import NotificationCard from "@/components/Notification-page/notificationCard";

const NotificationPage = () => {
  return (
    <>
      <div className="flex flex-1 flex-col">
        <NotificationCard
          assignment="Assignment: 2"
          assignmentNo="Printing Hello world!"
          badgeText="Marked"
          badgeColor="bg-[#0000FF]"
        />
      </div>
    </>
  );
};

export default NotificationPage;
