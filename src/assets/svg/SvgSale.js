import * as React from "react"
import { memo } from "react"

const SvgComponent = (props) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="m9.156 11.782.772-.772-1.748-.977.976 1.749Z" fill="#414141" />
    <path
      d="M17.845 0h-4.628c-1.016 0-2.375.563-3.093 1.281L.63 10.776A2.14 2.14 0 0 0 0 12.3c0 .577.224 1.118.63 1.523l5.546 5.548c.406.405.947.629 1.524.629a2.14 2.14 0 0 0 1.524-.63l9.495-9.494C19.437 9.158 20 7.799 20 6.783V2.155A2.158 2.158 0 0 0 17.845 0ZM8.282 15.053c-.581.581-1.318.732-1.575.475-.125-.125-.196-.427-.058-.564.182-.182.643.04 1.096-.413.266-.266.377-.617.111-.883-.666-.666-1.886.963-2.938-.089-.661-.661-.32-1.455.19-1.966.263-.262.906-.78 1.2-.488.101.102.234.377.075.537-.138.137-.409.07-.782.444-.319.32-.372.63-.16.843.551.55 1.785-1.065 2.934.084.635.635.52 1.407-.093 2.02Zm3.293-3.373c-.098.098-.204.142-.31.08l-.76-.422-1.016 1.017.422.758c.062.107.017.214-.08.311-.156.155-.462.266-.604.124a.37.37 0 0 1-.035-.053L7.257 9.847c-.094-.173.009-.4.173-.564.168-.168.395-.27.568-.177l3.648 1.935c.022.013.04.022.053.035.138.138.031.449-.124.604Zm2.33-2.33-1.407 1.407c-.129.129-.315.19-.435.07L9.178 7.944c-.124-.124-.035-.32.111-.466.142-.142.342-.235.466-.11l2.56 2.56L13.4 8.844c.115-.115.297-.049.426.08.124.124.195.31.08.426Zm2.32-2.32-1.58 1.579c-.128.129-.314.19-.434.071L11.33 5.8c-.12-.12-.058-.307.07-.435l1.58-1.58c.125-.124.311-.053.431.066.137.138.19.324.075.44l-1.256 1.256.888.887.675-.674c.115-.115.293-.071.412.049.103.102.165.28.04.403l-.674.675.892.892 1.256-1.256c.115-.115.302-.062.44.076.119.12.19.306.066.43Zm.497-2.89a.59.59 0 0 1-1-.414.588.588 0 0 1 .585-.585.59.59 0 0 1 .415.171.59.59 0 0 1 0 .829Z"
      // fill="#414141"
    />
  </svg>
)

const SvgSale = memo(SvgComponent)
export default SvgSale
