import React from "react";
import Card from "./card";

const NotificationCard = (props) => {
  return (
    <div>
      <div className="p-9">
        <h1 className="text-[32px] font-medium h-[48px]">Notifications</h1>
        <Card
          assignment={props.assignment}
          assignmentNo={props.assignmentNo}
          badgeText={props.badgeText}
          badgeColor={props.badgeColor}
        />
        <Card
          assignment={props.assignment}
          assignmentNo={props.assignmentNo}
          badgeText={props.badgeText}
          badgeColor={props.badgeColor}
        />
      </div>
    </div>
  );
};

export default NotificationCard;
