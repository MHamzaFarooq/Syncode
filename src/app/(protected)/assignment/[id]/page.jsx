import { getSession } from "@/actions/ironSession";
import Assignment from "@/components/Assignment";

const AssignmentPlayerPage = async ({ params }) => {
  const { id } = await params;
  const session = await getSession();
  return <Assignment assignment_id={id} student_id={session.student_id} />;
};

export default AssignmentPlayerPage;
