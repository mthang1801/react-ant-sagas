import * as React from "react";

const SvgComplete = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={21}
    fill="none"
    {...props}
  >
    <g fill={props?.fill ?? "#fff"}>
      <path d="M19.995 6.009a10.47 10.47 0 0 0-3.925-4.413A10.44 10.44 0 0 0 8.142.27 10.41 10.41 0 0 0 1.6 4.934a10.42 10.42 0 0 0-1.33 7.929 10.44 10.44 0 0 0 4.664 6.542 10.473 10.473 0 0 0 5.558 1.6h.127a10.553 10.553 0 0 0 5.508-1.633c.48-.304.62-.935.316-1.415a1.023 1.023 0 0 0-1.415-.316 8.441 8.441 0 0 1-9.007.033 8.383 8.383 0 0 1-3.753-5.266 8.403 8.403 0 0 1 1.07-6.378c2.47-3.95 7.695-5.156 11.645-2.687a8.45 8.45 0 0 1 3.917 8.109 1.025 1.025 0 1 0 2.039.225c.217-1.94-.111-3.9-.944-5.668z" />
      <path d="m13.892 6.94-4.946 4.946-1.834-1.833a1.025 1.025 0 0 0-1.452 0 1.025 1.025 0 0 0 0 1.452l2.56 2.56c.2.2.463.299.726.299.262 0 .525-.099.726-.3l5.668-5.672a1.025 1.025 0 1 0-1.448-1.452z" />
    </g>
  </svg>
);

export default SvgComplete;
