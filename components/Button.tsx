import React from 'react';

// Added 'disabled' property to ButtonProps to allow parent components to control the button's interactive state
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'white';
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '',
  type = 'button',
  disabled = false
}) => {
  const baseStyles = "btn-text px-8 py-[18px] rounded-[8px] transition-all duration-300 transform inline-flex items-center justify-center text-[16px] font-bold tracking-tight";
  
  const variants = {
    primary: "bg-brandTeal text-white hover:bg-hoverTeal hover:scale-[1.05] active:scale-[0.98]",
    outline: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-deepBlack hover:scale-[1.05] active:scale-[0.98]",
    white: "bg-white text-brandTeal hover:bg-lightGrey hover:scale-[1.05] active:scale-[0.98]"
  };

  // Highly distinct disabled styles that override hover effects and brand colors
  // Using Tailwind's '!' prefix to ensure these properties take precedence over variant classes
  const disabledStyles = disabled 
    ? "!opacity-30 !cursor-not-allowed !pointer-events-none !bg-charcoalGrey/20 !border-charcoalGrey/10 !text-charcoalGrey/40 !scale-100 !hover:scale-100 !shadow-none grayscale" 
    : "";

  return (
    <button 
      type={type}
      onClick={disabled ? undefined : onClick} 
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${disabledStyles} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;