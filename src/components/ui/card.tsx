import * as React from "react";

import { cn } from "../../lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-[20px] border border-transparent bg-[linear-gradient(60deg,#100f2e,#0f0029)] outline outline-1 outline-offset-[-1px] outline-[#6971a2]/40 text-card-foreground shadow transition-all duration-200 hover:outline-[#906be7cc]",
      className,
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

interface CardButtonProps {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

const CardButton: React.FC<CardButtonProps> = ({ children, className = "", icon }) => (
  <div
    className={`px-2 py-1 bg-[linear-gradient(60deg,#100f2e,#0f0029)] rounded-[40px] outline outline-[0.50px] outline-offset-[-0.50px] outline-[#6971a2]/40 flex justify-center items-center ${className}`}
  >
    {icon && (typeof icon === 'string' ? (
      <img src={icon} alt="icon" className="w-4 h-4 max-w-4.5 max-h-4.5 flex-shrink-0" />
    ) : (
      <span className="w-4 h-4 max-w-4.5 max-h-4.5 flex-shrink-0 flex items-center justify-center">{icon}</span>
    ))}
    <div className={`text-[#cccccc] text-[10px] md:text-[12px] font-medium [font-family:'Inter',Helvetica]${icon ? ' ml-2' : ''}`}>{children}</div>
  </div>
);

export {
  Card, CardButton, CardContent, CardDescription, CardFooter, CardHeader, CardTitle
};

