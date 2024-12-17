import * as React from "react";
const HomeBtn = (props) => (
  <svg
    width={18}
    height={19}
    viewBox="0 0 18 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 6.83334L9 0.611115L17 6.83334V16.6111C17 17.0826 16.8127 17.5348 16.4793 17.8682C16.1459 18.2016 15.6937 18.3889 15.2222 18.3889H2.77778C2.30628 18.3889 1.8541 18.2016 1.5207 17.8682C1.1873 17.5348 1 17.0826 1 16.6111V6.83334Z"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.33331 18.3889V9.5H11.6666V18.3889"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default HomeBtn;
