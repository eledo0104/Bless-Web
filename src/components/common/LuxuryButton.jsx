import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Luxury / Editorial Button
 * - 0px border-radius
 * - Sliding gold layer animation on Primary
 * - Generous uppercase letter-spacing (tracking-[0.2em])
 * - Cinematic 500ms transitions with ease-luxury
 */
export default function LuxuryButton({
  children,
  variant = 'primary',
  size = 'default',
  to,
  href,
  className = '',
  disabled = false,
  ...props
}) {
  const sizeClasses = {
    sm: 'h-10 px-6 text-[11px]',
    default: 'h-12 px-8 text-xs',
    lg: 'h-14 px-10 text-sm',
  }[size] || 'h-12 px-8 text-xs';

  const baseClasses = `inline-flex items-center justify-center font-medium uppercase tracking-[0.2em] transition-all duration-500 ease-luxury select-none disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden ${sizeClasses} ${className}`;

  if (variant === 'primary') {
    const primaryClasses = `${baseClasses} bg-[#1A1A1A] text-white border border-[#1A1A1A] shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.22)] group`;
    const innerContent = (
      <>
        {/* Sliding Gold Layer from Left */}
        <span
          className="absolute inset-0 bg-[#D4AF37] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-luxury pointer-events-none"
          aria-hidden="true"
        />
        {/* Button Content */}
        <span className="relative z-10 flex items-center gap-2.5">
          {children}
        </span>
      </>
    );

    if (to) return <Link to={to} className={primaryClasses} {...props}>{innerContent}</Link>;
    if (href) return <a href={href} className={primaryClasses} {...props}>{innerContent}</a>;
    return <button disabled={disabled} className={primaryClasses} {...props}>{innerContent}</button>;
  }

  if (variant === 'secondary') {
    const secondaryClasses = `${baseClasses} bg-transparent text-[#1A1A1A] border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#F9F8F6]`;
    if (to) return <Link to={to} className={secondaryClasses} {...props}>{children}</Link>;
    if (href) return <a href={href} className={secondaryClasses} {...props}>{children}</a>;
    return <button disabled={disabled} className={secondaryClasses} {...props}>{children}</button>;
  }

  if (variant === 'outline-white') {
    const whiteClasses = `${baseClasses} bg-transparent text-[#F9F8F6] border border-[#F9F8F6]/80 hover:bg-[#F9F8F6] hover:text-[#1A1A1A]`;
    if (to) return <Link to={to} className={whiteClasses} {...props}>{children}</Link>;
    if (href) return <a href={href} className={whiteClasses} {...props}>{children}</a>;
    return <button disabled={disabled} className={whiteClasses} {...props}>{children}</button>;
  }

  if (variant === 'gold') {
    const goldClasses = `${baseClasses} bg-[#D4AF37] text-white border border-[#D4AF37] hover:bg-[#1A1A1A] hover:border-[#1A1A1A] shadow-sm`;
    if (to) return <Link to={to} className={goldClasses} {...props}>{children}</Link>;
    if (href) return <a href={href} className={goldClasses} {...props}>{children}</a>;
    return <button disabled={disabled} className={goldClasses} {...props}>{children}</button>;
  }

  // Link / Ghost variant
  const linkClasses = `inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#1A1A1A] hover:text-[#D4AF37] transition-colors duration-300 border-b border-transparent hover:border-[#D4AF37] pb-1 ${className}`;
  if (to) return <Link to={to} className={linkClasses} {...props}>{children}</Link>;
  if (href) return <a href={href} className={linkClasses} {...props}>{children}</a>;
  return <button disabled={disabled} className={linkClasses} {...props}>{children}</button>;
}
