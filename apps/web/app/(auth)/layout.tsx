import { AuthLayout } from "@/modules/auth/ui/layouts/auth-layout";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: AuthLayoutProps) {
  return <AuthLayout>{children}</AuthLayout>;
}
