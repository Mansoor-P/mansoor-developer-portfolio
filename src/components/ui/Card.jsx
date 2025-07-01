export function Card({ children, className = "", as: Component = "div" }) {
  return (
    <Component
      className={`rounded-lg border bg-white/10 dark:bg-gray-900 p-4 shadow-sm ${className}`}
    >
      {children}
    </Component>
  );
}

export function CardHeader({ children, className = "" }) {
  return <div className={`mb-4 space-y-1 ${className}`}>{children}</div>;
}

export function CardTitle({ children, className = "" }) {
  return <h3 className={`text-xl font-semibold leading-tight ${className}`}>{children}</h3>;
}

export function CardDescription({ children, className = "" }) {
  return <p className={`text-sm text-gray-500 dark:text-gray-400 ${className}`}>{children}</p>;
}

export function CardContent({ children, className = "" }) {
  return <div className={`mt-2 ${className}`}>{children}</div>;
}
