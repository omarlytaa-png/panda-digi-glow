import { NavLink } from "react-router-dom";
import {
  Home,
  LayoutDashboard,
  Users,
  FileText,
  ShoppingCart,
  BarChart3,
  Settings,
  Shield,
  Code,
  MessageSquare,
  Palette,
  Wrench,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Back to Home", url: "/", icon: Home, end: true },
  { title: "Overview", url: "/admin", icon: LayoutDashboard, end: true },
  { title: "User Management", url: "/admin/users", icon: Users },
  { title: "Content (CMS)", url: "/admin/content", icon: FileText },
  { title: "Services", url: "/admin/services", icon: ShoppingCart },
  { title: "Portfolio", url: "/admin/portfolio", icon: FileText },
  { title: "Testimonials", url: "/admin/testimonials", icon: MessageSquare },
  { title: "Analytics", url: "/admin/analytics", icon: BarChart3 },
  { title: "Settings", url: "/admin/settings", icon: Settings },
  { title: "Security", url: "/admin/security", icon: Shield },
  { title: "Developer Tools", url: "/admin/developer", icon: Code },
  { title: "Support", url: "/admin/support", icon: MessageSquare },
  { title: "Appearance", url: "/admin/appearance", icon: Palette },
  { title: "Advanced", url: "/admin/advanced", icon: Wrench },
];

export function AdminSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" className="border-r">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Admin Panel</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <NavLink
                      to={item.url}
                      end={item.end}
                      className={({ isActive }) =>
                        isActive ? "bg-sidebar-accent text-sidebar-accent-foreground" : ""
                      }
                    >
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
