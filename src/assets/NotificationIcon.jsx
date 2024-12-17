import * as React from "react";
const NotificationIcon = (props) => (
  <svg
    width={18}
    height={19}
    viewBox="0 0 18 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.3333 5.946C14.3333 4.53152 13.7714 3.17496 12.7712 2.17477C11.771 1.17457 10.4145 0.612671 9 0.612671C7.58551 0.612671 6.22896 1.17457 5.22876 2.17477C4.22857 3.17496 3.66667 4.53152 3.66667 5.946C3.66667 12.1682 1 13.946 1 13.946H17C17 13.946 14.3333 12.1682 14.3333 5.946Z"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.5378 17.5016C10.3815 17.771 10.1572 17.9946 9.88731 18.15C9.61743 18.3055 9.31144 18.3873 9 18.3873C8.68855 18.3873 8.38257 18.3055 8.11268 18.15C7.8428 17.9946 7.6185 17.771 7.46222 17.5016"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default NotificationIcon;
