-- Create security_events table for security logs
CREATE TABLE IF NOT EXISTS public.security_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_type TEXT NOT NULL,
  severity TEXT NOT NULL CHECK (severity IN ('info', 'warning', 'critical')),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  user_email TEXT,
  ip_address TEXT,
  description TEXT NOT NULL,
  metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create system_logs table for developer logs
CREATE TABLE IF NOT EXISTS public.system_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  log_level TEXT NOT NULL CHECK (log_level IN ('INFO', 'WARNING', 'ERROR', 'API', 'DATABASE')),
  message TEXT NOT NULL,
  source TEXT,
  metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on both tables
ALTER TABLE public.security_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.system_logs ENABLE ROW LEVEL SECURITY;

-- RLS policies for security_events
CREATE POLICY "Admins can view all security events"
  ON public.security_events FOR SELECT
  USING (has_role(auth.uid(), 'admin'));

CREATE POLICY "System can insert security events"
  ON public.security_events FOR INSERT
  WITH CHECK (true);

-- RLS policies for system_logs
CREATE POLICY "Admins can view all system logs"
  ON public.system_logs FOR SELECT
  USING (has_role(auth.uid(), 'admin'));

CREATE POLICY "System can insert logs"
  ON public.system_logs FOR INSERT
  WITH CHECK (true);

-- Insert sample data for testing
INSERT INTO public.security_events (event_type, severity, user_email, description) VALUES
  ('login_success', 'info', 'admin@example.com', 'Successful admin login'),
  ('failed_login', 'warning', 'user@example.com', 'Failed login attempt'),
  ('password_change', 'info', 'user@example.com', 'Password successfully changed'),
  ('role_change', 'warning', 'admin@example.com', 'User role changed to admin');

INSERT INTO public.system_logs (log_level, message, source) VALUES
  ('INFO', 'Application started successfully', 'system'),
  ('API', 'GET /api/users - 200 OK', 'api'),
  ('DATABASE', 'Database connection established', 'database'),
  ('INFO', 'Cache warmed up', 'cache'),
  ('API', 'POST /api/auth/login - 200 OK', 'api');