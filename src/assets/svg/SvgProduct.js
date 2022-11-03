import * as React from "react";

const SvgProduct = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <g fill={props.fill ? props.fill : "#000"}>
      <path d="M24.296 11.384H19.3l-2.232 2.232h3.913c.207.001.411.051.596.146l2.718-2.378zm-11.35 10.268h1.787v.893h-1.787v-.893zm9.376-6.697v8.217l2.544-2.544a.437.437 0 0 0 .134-.316v-8.358l-2.8 2.45c.08.173.121.361.122.551zm-12.188 9.248.008-.008a.446.446 0 0 0 .126-.311v-8.929c0-.246-.2-.446-.447-.446H.446c-.246 0-.446.2-.446.446v8.929c0 .246.2.446.446.446h9.375c.117 0 .23-.045.313-.127zm-5.67-1.658c0 .493-.4.892-.893.892H1.786a.893.893 0 0 1-.893-.892v-.893c0-.493.4-.893.893-.893H3.57c.493 0 .893.4.893.893v.893zm4.465.892h-1.34a.446.446 0 0 1 0-.892h1.34a.446.446 0 0 1 0 .892zm0-1.785h-1.34a.446.446 0 0 1 0-.893h1.34a.446.446 0 0 1 0 .893z" />
      <path d="M1.786 21.652h1.786v.893H1.786v-.893zm19.504 2.553.005-.009.008-.008a.446.446 0 0 0 .125-.304v-8.929c0-.246-.2-.446-.446-.446h-9.375c-.246 0-.446.2-.446.446v8.929c0 .246.2.446.446.446h9.375a.446.446 0 0 0 .308-.125zm-5.665-1.66c0 .493-.4.892-.893.892h-1.786a.893.893 0 0 1-.893-.892v-.893c0-.493.4-.893.893-.893h1.786c.493 0 .893.4.893.893v.893zm4.464.892h-1.34a.446.446 0 0 1 0-.892h1.34a.446.446 0 0 1 0 .892zm0-1.785h-1.34a.446.446 0 0 1 0-.893h1.34a.446.446 0 0 1 0 .893zM16.22 3.048 18.938.67h-3.606l-2.87 2.232h3.163c.207.001.411.051.595.146zM10.405.798a.44.44 0 0 1-.063.054l-2.92 2.05h3.586L13.878.67h-3.164a.434.434 0 0 0-.31.128zm9.104 9.112a.437.437 0 0 0 .134-.312V1.24l-2.8 2.45c.08.173.12.36.121.551v8.218l2.545-2.548zM4.6 11.512a.439.439 0 0 1-.062.054l-2.919 2.05h3.374a1.323 1.323 0 0 1-.082-.446v-1.786a.434.434 0 0 0-.31.128zm2.99-.574h1.786v.892H7.589v-.893z" />
      <path d="M6.25 13.616h9.375c.117 0 .23-.045.313-.127l.009-.01a.444.444 0 0 0 .125-.31V4.242c0-.246-.2-.446-.447-.446H6.25c-.246 0-.446.2-.446.446v8.929c0 .246.2.446.446.446zm7.143-3.571h1.34a.446.446 0 1 1 0 .893h-1.34a.446.446 0 0 1 0-.893zm0 1.785h1.34a.446.446 0 1 1 0 .893h-1.34a.446.446 0 1 1 0-.893zm-6.696-.893c0-.493.4-.892.892-.892h1.786c.493 0 .893.4.893.893v.892c0 .493-.4.893-.893.893H7.59a.893.893 0 0 1-.892-.893v-.893z" />
    </g>
  </svg>
);

export default SvgProduct;