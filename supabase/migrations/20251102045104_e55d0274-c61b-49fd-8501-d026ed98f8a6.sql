-- Create services table
CREATE TABLE public.services (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  description text NOT NULL,
  icon text NOT NULL,
  features text[] NOT NULL DEFAULT '{}',
  display_order integer NOT NULL DEFAULT 0,
  active boolean NOT NULL DEFAULT true,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Create portfolio_items table
CREATE TABLE public.portfolio_items (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  category text NOT NULL,
  description text NOT NULL,
  image_url text NOT NULL,
  featured boolean NOT NULL DEFAULT false,
  display_order integer NOT NULL DEFAULT 0,
  active boolean NOT NULL DEFAULT true,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Create testimonials table
CREATE TABLE public.testimonials (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  role text NOT NULL,
  content text NOT NULL,
  avatar_url text,
  active boolean NOT NULL DEFAULT true,
  display_order integer NOT NULL DEFAULT 0,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portfolio_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

-- Create policies for services
CREATE POLICY "Anyone can view active services"
  ON public.services FOR SELECT
  USING (active = true OR has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert services"
  ON public.services FOR INSERT
  WITH CHECK (has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update services"
  ON public.services FOR UPDATE
  USING (has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete services"
  ON public.services FOR DELETE
  USING (has_role(auth.uid(), 'admin'));

-- Create policies for portfolio_items
CREATE POLICY "Anyone can view active portfolio items"
  ON public.portfolio_items FOR SELECT
  USING (active = true OR has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert portfolio items"
  ON public.portfolio_items FOR INSERT
  WITH CHECK (has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update portfolio items"
  ON public.portfolio_items FOR UPDATE
  USING (has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete portfolio items"
  ON public.portfolio_items FOR DELETE
  USING (has_role(auth.uid(), 'admin'));

-- Create policies for testimonials
CREATE POLICY "Anyone can view active testimonials"
  ON public.testimonials FOR SELECT
  USING (active = true OR has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert testimonials"
  ON public.testimonials FOR INSERT
  WITH CHECK (has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update testimonials"
  ON public.testimonials FOR UPDATE
  USING (has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete testimonials"
  ON public.testimonials FOR DELETE
  USING (has_role(auth.uid(), 'admin'));

-- Add triggers for updated_at
CREATE TRIGGER update_services_updated_at
  BEFORE UPDATE ON public.services
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_portfolio_items_updated_at
  BEFORE UPDATE ON public.portfolio_items
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_testimonials_updated_at
  BEFORE UPDATE ON public.testimonials
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default data for services
INSERT INTO public.services (title, description, icon, features, display_order) VALUES
  ('Web & Software Development', 'Custom websites, mobile apps, CRMs, and enterprise software solutions.', 'Code', ARRAY['Responsive Websites', 'Mobile Applications', 'Custom CRM Systems', 'E-commerce Solutions'], 1),
  ('Graphic Design & Branding', 'Professional designs that make your brand stand out from the competition.', 'Palette', ARRAY['Logo Design', 'Brand Identity', 'Flyers & Posters', 'Certificate Design'], 2),
  ('Cyber & IT Services', 'Comprehensive cybersecurity and IT support to protect your business.', 'Shield', ARRAY['Cybersecurity Solutions', 'Network Setup', 'IT Support', 'Data Protection'], 3),
  ('Projects & Documentation', 'Professional documentation services for your business and academic needs.', 'FileText', ARRAY['Business Reports', 'Project Proposals', 'Company Profiles', 'Academic Projects'], 4);

-- Insert default data for testimonials
INSERT INTO public.testimonials (name, role, content, display_order) VALUES
  ('Sarah Mwangi', 'CEO, TechStart Kenya', 'Panda Tech transformed our digital presence. Their team is professional, creative, and delivers on time.', 1),
  ('John Ochieng', 'Founder, Creative Hub', 'Excellent service! They built our website and mobile app from scratch. Highly recommended!', 2);