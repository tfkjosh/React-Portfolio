import { jsx as _jsx } from "react/jsx-runtime";
import clsx from "clsx";
export const Section = (props) => {
    return (_jsx("div", { ...props, className: clsx("md:mx-[10%] border-b border-b-white/20 px-8 py-24", props.className), children: props.children }));
};
//# sourceMappingURL=Section.js.map