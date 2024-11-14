import { jsx as _jsx } from "react/jsx-runtime";
import clsx from "clsx";
import { inputClassName } from "../constants";
export const Input = (props) => {
    return (_jsx("input", { ...props, className: clsx(inputClassName, props.className) }));
};
//# sourceMappingURL=Input.js.map