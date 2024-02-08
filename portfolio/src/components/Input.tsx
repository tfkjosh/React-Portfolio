import clsx from "clsx";
import type { FC, InputHTMLAttributes } from "react";
import { inputClassName } from "../constants";

export const Input: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <input
      {...props}
      className={clsx(
        inputClassName,
        props.className
      )}
    />
  );
};
