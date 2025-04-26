import { getSession } from "@/actions/ironSession";
import AddAssignment from "@/components/AddAssignment";
import { TeacherCoursesProvider } from "@/context/TeacherCourses";

const AddAssignmentPage = async () => {
  const session = await getSession();

  return (
    <div className="flex flex-col min-h-screen p-9">
      <TeacherCoursesProvider teacher_id={session?.teacher_id}>
        <AddAssignment />
      </TeacherCoursesProvider>
    </div>
  );
};

export default AddAssignmentPage;
