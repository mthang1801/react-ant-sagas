import * as React from "react"

const SvgIconTagPromo = (props) => (
  <svg
    width={21}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.313 9.625a5.694 5.694 0 0 0-5.688 5.688A5.694 5.694 0 0 0 15.313 21 5.694 5.694 0 0 0 21 15.312a5.694 5.694 0 0 0-5.688-5.687Zm-.11 5.031h.219c.905 0 1.64.736 1.64 1.64 0 .712-.458 1.314-1.093 1.54v.32a.656.656 0 0 1-1.313 0v-.218h-.437a.656.656 0 0 1 0-1.313h1.203a.328.328 0 0 0 0-.656h-.219c-.905 0-1.64-.736-1.64-1.64 0-.712.458-1.314 1.093-1.54v-.32a.656.656 0 0 1 1.313 0v.219h.437a.656.656 0 0 1 0 1.312h-1.203a.328.328 0 0 0 0 .656Z"
      fill={props.fill ?? "#414141"}
    />
    <path
      d="M18.375 0H12.25c-.954 0-1.881.403-2.537 1.094L.718 10.448A2.609 2.609 0 0 0 0 12.25c0 .7.271 1.365.77 1.855l6.125 6.125c.49.499 1.155.77 1.855.77.481 0 .954-.131 1.356-.376a7.655 7.655 0 0 1-1.129-1.418.865.865 0 0 1-.848-.21l-6.125-6.125a.866.866 0 0 1-.254-.621c0-.227.087-.438.236-.595l8.995-9.354a1.702 1.702 0 0 1 1.269-.551h6.125c.481 0 .875.394.875.875V8.75c0 .079-.009.166-.017.245a7.273 7.273 0 0 1 1.452 1.181c.21-.446.315-.936.315-1.426V2.625A2.633 2.633 0 0 0 18.375 0Z"
      fill={props.fill ?? "#414141"}
    />
    <path
      d="M16.625 6.125c-.965 0-1.75-.785-1.75-1.75s.785-1.75 1.75-1.75 1.75.785 1.75 1.75-.785 1.75-1.75 1.75Z"
      fill="#000"
    />
  </svg>
)

export default SvgIconTagPromo