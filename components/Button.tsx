import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', children, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200";
  
  const variants = {
    primary: "border-transparent text-white bg-blue-900 hover:bg-blue-800 focus:ring-blue-900",
    secondary: "border-transparent text-blue-900 bg-blue-100 hover:bg-blue-200 focus:ring-blue-500",
    outline: "border-slate-300 text-slate-700 bg-white hover:bg-slate-50 focus:ring-blue-500"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};