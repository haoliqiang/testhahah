import React from "react";
const variantClasses = {
  h1: "font-normal md:text-[48px] sm:text-[48px] text-[60px]",
  h2: "font-normal sm:text-[38px] md:text-[44px] text-[52px]",
  h3: "font-normal sm:text-[32px] md:text-[38px] text-[42px]",
  h4: "font-normal sm:text-[28px] md:text-[30px] text-[32px]",
  h5: "font-normal sm:text-[22px] md:text-[24px] text-[26px]",
  h6: "font-normal sm:text-[20px] md:text-[22px] text-[24px]",
  body1: "font-normal sm:text-[18px] md:text-[20px] text-[22px]",
  body2: "font-normal text-[18px]",
  body3: "font-normal text-[160px] md:text-[48px] sm:text-[48px]",
  body4: "font-normal text-[16px]",
  body5: "font-normal text-[14px]",
  body6: "font-normal text-[12px]",
  body7: "font-normal text-[100px] md:text-[48px] sm:text-[48px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
