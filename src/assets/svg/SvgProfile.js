import * as React from "react"
import { memo } from "react"

const SvgComponent = (props) => (
  <svg
    width={25}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)" fill="#2D9CDB">
      <path d="M12.502 0C8.93 0 6.01 2.92 6.01 6.49c0 3.572 2.92 6.492 6.49 6.492 3.572 0 6.492-2.92 6.492-6.491 0-3.572-2.92-6.491-6.491-6.491ZM23.641 18.169a6.047 6.047 0 0 0-.652-1.19c-1.303-1.928-3.316-3.204-5.584-3.515-.283-.029-.595.028-.822.198a6.829 6.829 0 0 1-4.081 1.332 6.828 6.828 0 0 1-4.082-1.332 1.063 1.063 0 0 0-.822-.198 8.01 8.01 0 0 0-5.584 3.514 6.978 6.978 0 0 0-.652 1.191c-.085.17-.056.369.029.538.226.397.51.794.765 1.134.397.539.822 1.02 1.304 1.474.397.397.85.765 1.304 1.134A12.841 12.841 0 0 0 12.474 25c2.777 0 5.47-.879 7.71-2.551.453-.34.906-.737 1.303-1.134.454-.453.907-.935 1.304-1.474.283-.368.539-.737.765-1.134.142-.17.17-.368.085-.538Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h25v25H0z" />
      </clipPath>
    </defs>
  </svg>
)

const SvgProfile = memo(SvgComponent)
export default SvgProfile
