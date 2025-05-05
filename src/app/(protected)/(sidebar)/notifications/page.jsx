import { getSession } from "@/actions/ironSession";
import NotificationCard from "@/components/Notification-page/notificationCard";

const NotificationPage = async () => {
  const session = await getSession();
  return (
    <>
      <div className="flex flex-1 flex-col">
        <NotificationCard student_id={session.student_id} />
      </div>
    </>
  );
};

export default NotificationPage;
