import Assignment from "@/components/Assignment";

const AssignmentPlayerPage = async ({ params }) => {
  const { id } = await params;
  return <Assignment assignment_id={id} />;
};

export default AssignmentPlayerPage;
