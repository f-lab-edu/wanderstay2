import * as React from "react";
const SvgStar = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="m17.162 4.388 2.2 4.4c.3.612 1.1 1.2 1.775 1.312l3.988.663c2.55.425 3.15 2.275 1.312 4.1l-3.1 3.1c-.525.525-.812 1.537-.65 2.262l.888 3.838c.7 3.037-.913 4.212-3.6 2.625l-3.738-2.213c-.675-.4-1.787-.4-2.475 0l-3.737 2.213c-2.675 1.587-4.3.4-3.6-2.625l.887-3.838c.163-.725-.125-1.737-.65-2.262l-3.1-3.1c-1.825-1.825-1.237-3.675 1.313-4.1l3.987-.663c.663-.112 1.463-.7 1.763-1.312l2.2-4.4c1.2-2.388 3.15-2.388 4.337 0Z"
    />
  </svg>
);
export default SvgStar;