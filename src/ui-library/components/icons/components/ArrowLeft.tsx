import * as React from "react";
const SvgArrowLeft = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M9.57 5.93 3.5 12l6.07 6.07M20.5 12H3.67"
    />
  </svg>
);
export default SvgArrowLeft;
