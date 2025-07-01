export function Badge({ children, variant = "default", className = "" }) {
  const base =
    "inline-flex items-center px-2 py-1 rounded text-xs font-medium transition-colors";

  const variants = {
    default: "bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100",
    secondary: "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100",
    success: "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100",
    danger: "bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100",
    warning: "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100",
  };

  return (
    <span className={`${base} ${variants[variant] || variants.default} ${className}`}>
      {children}
    </span>
  );
}
