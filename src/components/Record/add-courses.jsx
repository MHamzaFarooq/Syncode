import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ClipLoader from "react-spinners/ClipLoader";
import AuthInputField from "../Auth/inputfield";
import BorderButton from "../Button/borderButton";
import { SelectCourseBox } from "./select-course";
import { useTeacherCourses } from "@/context/TeacherCourses";

const AddCoursesModal = ({ createVideo, createVideoLoading }) => {
  const {
    data,
    isLoading,
    isError,
    error,
    title,
    setTitle,
    courseId: value,
    setCourseId: setValue,
    isOpen,
    setIsOpen,
  } = useTeacherCourses();

  const disabled = createVideoLoading || title === "" || value === "";

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-black border border-[#FFFFFF1A] p-0">
        <DialogHeader>
          <DialogTitle
            className="text-[32px] leading-[26px] font-medium
            text-center py-9 border-b border-[#FFFFFF1A]"
          >
            Your Courses
          </DialogTitle>
          <div className="p-9">
            {isLoading ? (
              <LoadingCourses />
            ) : (
              <SelectCourseBox
                courses={data?.courses}
                value={value}
                setValue={setValue}
              />
            )}
            <AuthInputField
              type={"text"}
              placeholder={"Title of the video"}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={"my-4 text-white"}
            />
            <BorderButton
              onClick={createVideo}
              disabled={disabled}
              isLoading={createVideoLoading}
              type="button"
              loaderColor="#000"
              label={"Add"}
              parentClass={"w-full"}
              className="bg-white text-black w-full"
            />
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddCoursesModal;

const LoadingCourses = () => {
  return (
    <div
      className="bg-[#0F0E10] py-[14px] px-4 rounded-xl
      flex items-center justify-center"
    >
      Loading Courses...&nbsp;
      <ClipLoader size={20} color={"white"} />
    </div>
  );
};
