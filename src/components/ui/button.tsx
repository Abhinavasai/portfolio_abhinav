"use client";

import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, MouseEvent, ReactNode } from "react";
import { useRef } from "react";

import { cn } from "@/lib/utils";

type ButtonStyleProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
};

type SharedProps = ButtonStyleProps & {
  magnetic?: boolean;
  children: ReactNode;
};

type LinkProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = SharedProps & ButtonHTMLAttributes<HTMLButtonElement>;

const variants = {
  primary:
    "border-transparent bg-[linear-gradient(135deg,rgba(167,139,250,1),rgba(103,232,249,0.88))] text-white shadow-[0_10px_40px_rgba(167,139,250,0.34)]",
  secondary: "border-line bg-surface text-text hover:bg-surfaceStrong",
  ghost: "border-transparent bg-transparent text-text hover:bg-accentSoft"
};

const sizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base"
};

function classes({ variant = "primary", size = "md", className }: ButtonStyleProps) {
  return cn(
    "inline-flex items-center justify-center rounded-full border font-medium transition-all duration-300 will-change-transform",
    "focus-visible:ring-2 focus-visible:ring-sky-400/60",
    variants[variant],
    sizes[size],
    className
  );
}

function useMagnetic<T extends HTMLElement>(enabled: boolean | undefined) {
  const ref = useRef<T>(null);

  function reset() {
    if (enabled && ref.current) {
      ref.current.style.transform = "translate3d(0px, 0px, 0px)";
    }
  }

  function move(event: MouseEvent<T>) {
    if (!enabled || !ref.current) {
      return;
    }

    const rect = ref.current.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    ref.current.style.transform = `translate3d(${x * 0.08}px, ${y * 0.08}px, 0px)`;
  }

  return { ref, move, reset };
}

export function Button(props: LinkProps | NativeButtonProps) {
  const magnetic = props.magnetic ?? true;
  const { ref, move, reset } = useMagnetic<HTMLElement>(magnetic);

  if ("href" in props) {
    const { href, children, className, variant, size, magnetic: _magnetic, ...rest } = props;
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    const isHashLink = href.startsWith("/#") || href.startsWith("#");

    if (isExternal || isHashLink) {
      return (
        <a
          href={href}
          className={classes({ variant, size, className })}
          onMouseMove={move as never}
          onMouseLeave={reset}
          ref={ref as never}
          target={isExternal ? "_blank" : rest.target}
          rel={isExternal ? "noreferrer" : rest.rel}
          {...rest}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={classes({ variant, size, className })}
        onMouseMove={move as never}
        onMouseLeave={reset}
        ref={ref as never}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  const { children, className, variant, size, magnetic: _magnetic, ...rest } = props;

  return (
    <button
      className={classes({ variant, size, className })}
      onMouseMove={move as never}
      onMouseLeave={reset}
      ref={ref as never}
      {...rest}
    >
      {children}
    </button>
  );
}
