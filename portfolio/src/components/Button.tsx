import clsx from "clsx";
import type { ButtonHTMLAttributes, FC } from "react";

type StyleVariant = "primary" | "secondary";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  styleVariant?: StyleVariant;
}

export const Button: FC<IButtonProps> = ({
  label,
  styleVariant = "primary",
  ...props
}) => {
  return (
    <button
      {...props}
      className={clsx(
        "px-6 py-3 w-fit text-lg transition opacity-100",
        "rounded-full",
        styleVariant === "primary" &&
          "bg-gradient-to-t from-orange-500 to-yellow-500",
        styleVariant === "secondary" && "border border-white",
        "hover:opacity-90",
        props.className
      )}
    >
      {label}
    </button>
  );
};
