import { getSession } from "@/actions/ironSession";
import Record from "@/components/Record";
const RecordPage = async () => {
  const session = await getSession();
  return (
    <>
      <div className="flex flex-col min-h-screen p-9">
        <Record teacher_id={session.teacher_id} />
      </div>
    </>
  );
};

export default RecordPage;
