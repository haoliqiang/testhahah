import React from "react";
import PropTypes from "prop-types";

const variants = {
  FillWhiteA700: "bg-white_A700 text-black_900",
  FillGray800: "bg-gray_800 text-white_A700_90",
  FillGray901: "bg-gray_901 text-white_A700",
  FillBluegray400: "bg-bluegray_400 text-white_A700",
  FillIndigo50: "bg-indigo_50 text-gray_900",
  FillBluegray51: "bg-bluegray_51 text-bluegray_300",
  FillOrange50: "bg-orange_50 text-yellow_900",
  FillIndigo51: "bg-indigo_51 text-indigo_300",
  FillTeal50: "bg-teal_50 text-teal_400",
};
const sizes = {
  sm: "p-[11px] sm:p-[5px] md:p-[7px]",
  md: "md:p-[11px] p-[17px] sm:px-[15px] sm:py-[9px]",
  lg: "md:p-[15px] p-[23px] sm:px-[15px] sm:py-[12px]",
  xl: "md:p-[24px] p-[35px] sm:px-[15px] sm:py-[18px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className}  ${variants[variant] || ""} ${
        sizes[size] || ""
      } `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf([
    "FillWhiteA700",
    "FillGray800",
    "FillGray901",
    "FillBluegray400",
    "FillIndigo50",
    "FillBluegray51",
    "FillOrange50",
    "FillIndigo51",
    "FillTeal50",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
};
Button.defaultProps = { className: "", variant: "FillWhiteA700", size: "sm" };

export { Button };
