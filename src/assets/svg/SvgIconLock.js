import * as React from "react"

const SvgIconLock = (props) => (
  <svg
    width={16}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.172 12.727a.703.703 0 0 0 .703-.704V9.422a2.816 2.816 0 0 0-2.813-2.813h-.845V4.13C12.217 1.854 10.325 0 8 0 5.672 0 3.78 1.853 3.78 4.13v2.48h-.842A2.816 2.816 0 0 0 .124 9.421v5.765A2.816 2.816 0 0 0 2.938 18h10.124a2.816 2.816 0 0 0 2.813-2.813.703.703 0 0 0-1.406 0c0 .776-.631 1.407-1.406 1.407H2.937c-.775 0-1.406-.631-1.406-1.407V9.422c0-.776.631-1.406 1.407-1.406h10.124c.776 0 1.407.63 1.407 1.406v2.601c0 .389.315.704.703.704Zm-4.36-6.118H5.185V4.13c0-1.501 1.262-2.723 2.813-2.723 1.55 0 2.812 1.222 2.812 2.724v2.48Z"
      fill={props?.fill ? props.fill : "#000"}
    />
  </svg>
)

export default SvgIconLock
