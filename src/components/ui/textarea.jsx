import React from "react";

export const Textarea = React.forwardRef(
  ({ className = "", fullWidth = true, ...props }, ref) => {
    const baseStyles = `
      rounded-md border border-gray-300 bg-white 
      px-3 py-2 text-sm shadow-sm 
      focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 
      disabled:opacity-50 disabled:cursor-not-allowed 
      dark:bg-gray-900 dark:border-gray-700 dark:text-white 
      dark:placeholder-gray-400
    `;

    return (
      <textarea
        ref={ref}
        rows={4} // default height
        className={`${fullWidth ? "w-full" : ""} ${baseStyles} ${className}`}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";
