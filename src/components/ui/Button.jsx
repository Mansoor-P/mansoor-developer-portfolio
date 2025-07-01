export function Button({
  children,
  variant = "default",
  className = "",
  fullWidth = false,
  disabled = false,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    outline:
      "border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-gray-400",
    ghost:
      "bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-gray-300",
  };

  const full = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${base} ${variants[variant] || variants.default} ${full} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
