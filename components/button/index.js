import React from "react";
import clsx from "clsx";

const Button = ({
  type = "button",
  onClick,
  children,
  variant = "primary",
  className = "",
}) => {
  const baseClasses =
    "flex-1 py-2 px-4 rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses = clsx({
    "text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 border border-transparent":
      variant === "primary",
    "text-gray-700 bg-white hover:bg-gray-50 focus:ring-blue-500 border border-gray-300":
      variant === "secondary",
  });

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
