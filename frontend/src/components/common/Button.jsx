// frontend/src/components/common/Button.jsx
import React from "react";
import clsx from "clsx";

/**
 * Props:
 * - children
 * - onClick
 * - type (button|submit)
 * - variant: 'primary' | 'secondary' | 'ghost'
 * - className: extra classes
 */
export default function Button({
  children,
  onClick = () => {},
  type = "button",
  variant = "primary",
  className = "",
  ...rest
}) {
  const base = "px-4 py-2 rounded-md font-medium inline-flex items-center justify-center";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200",
    ghost: "bg-transparent text-blue-600 hover:underline",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(base, variants[variant], className)}
      {...rest}
    >
      {children}
    </button>
  );
}
