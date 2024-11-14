import { jsx as _jsx } from "react/jsx-runtime";
import clsx from "clsx";
export const Button = ({ label, styleVariant = "primary", ...props }) => {
    return (_jsx("button", { ...props, className: clsx("px-6 py-3 w-fit text-lg transition opacity-100", "rounded-full", styleVariant === "primary" &&
            "bg-gradient-to-t from-orange-500 to-yellow-500", styleVariant === "secondary" && "border border-white", "hover:opacity-90", props.className), children: label }));
};
//# sourceMappingURL=Button.js.map