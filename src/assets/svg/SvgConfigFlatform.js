import * as React from "react";

const SvgConfigFlatform = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <path
      d="M10.417 0H1.042C.469 0 0 .47 0 1.042V12.5c0 .573.47 1.042 1.042 1.042h9.375c.572 0 1.041-.47 1.041-1.042V1.042C11.458.469 10.99 0 10.417 0zm13.541 11.458h-9.375c-.572 0-1.042.47-1.042 1.042v11.458c0 .573.47 1.042 1.042 1.042h9.375c.573 0 1.042-.469 1.042-1.042V12.5c0-.573-.47-1.042-1.042-1.042zm-13.541 4.167H1.042c-.573 0-1.042.47-1.042 1.042v7.291C0 24.531.47 25 1.042 25h9.375c.572 0 1.041-.47 1.041-1.042v-7.291c0-.573-.469-1.042-1.041-1.042zM23.958 0h-9.375c-.572 0-1.042.47-1.042 1.042v7.291c0 .573.47 1.042 1.042 1.042h9.375c.573 0 1.042-.47 1.042-1.042V1.042C25 .469 24.53 0 23.958 0z"
      fill={props.fill ? props.fill : "#000"}
    />
  </svg>
);

export default SvgConfigFlatform;
