import * as React from "react";

const SvgOrders = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <path
      d="M18.946 18.577c-1.6 0-2.92 1.29-2.92 2.919 0 1.6 1.292 2.919 2.92 2.919 1.6 0 2.92-1.291 2.92-2.92-.029-1.599-1.32-2.918-2.92-2.918zm5.137-13.922c-.056 0-.14-.028-.225-.028H6.175l-.28-1.88a2.513 2.513 0 0 0-2.5-2.163H1.123A1.127 1.127 0 0 0 0 1.708C0 2.325.505 2.83 1.123 2.83h2.273c.14 0 .253.113.281.253l1.74 11.845a3.078 3.078 0 0 0 3.032 2.61h11.676c1.46 0 2.723-1.038 3.031-2.47l1.825-9.122a1.11 1.11 0 0 0-.898-1.291zm-12.294 16.7c-.056-1.543-1.348-2.778-2.891-2.778a2.936 2.936 0 0 0-2.807 3.031c.056 1.544 1.319 2.779 2.863 2.779h.056c1.6-.084 2.863-1.432 2.779-3.032z"
      fill={props.fill ? props.fill : "#000"}
    />
  </svg>
);

export default SvgOrders;
