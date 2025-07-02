import React from "react";

export const Input = React.forwardRef(
  (
    {
      className = "",
      type = "text",
      fullWidth = true,
      ...props
    },
    ref
  ) => {
    const baseStyles = `
      rounded-md border border-gray-300 bg-white 
      px-3 py-2 text-sm shadow-sm 
      focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 
      disabled:opacity-50 disabled:cursor-not-allowed 
      dark:bg-gray-900 dark:border-gray-700 dark:text-white 
      dark:placeholder-gray-400 
    `;

    return (
      <input
        type={type}
        ref={ref}
        className={`${fullWidth ? "w-full" : ""} ${baseStyles} ${className}`}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
