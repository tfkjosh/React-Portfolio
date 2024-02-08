import clsx from "clsx";
import type { FC, HTMLAttributes } from "react";

export const Section: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <div
      {...props}
      className={clsx(
        "md:mx-[10%] border-b border-b-white/20 px-8 py-24",
        props.className
      )}
    >
      {props.children}
    </div>
  );
};
