import NotificationCard from "@/components/Notification-page/notificationCard";

const NotificationPage = () => {
  return (
    <>
      <div className="w-[330px] p-9"></div>
      <div className="flex flex-1 flex-col">
        <NotificationCard
          heading="Notifications"
          assignment="Assignment"
          assignmentNo="1"
          badgeText="Marked"
          badgeColor="bg-[#0000FF]"
        />
      </div>
    </>
  );
};

export default NotificationPage;
