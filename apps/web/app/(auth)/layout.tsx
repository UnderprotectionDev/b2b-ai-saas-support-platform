interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen min-w-screen h-full flex flex-col items-center justify-center">
      {children}
    </div>
  );
}
