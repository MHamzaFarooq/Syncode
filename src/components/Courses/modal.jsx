import { useState } from "react";
import AuthInputField from "../Auth/inputfield";
import BorderButton from "../Button/borderButton";
import ModalWrapper from "../Modal/wrapper";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { addCourse } from "@/actions/actions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const statusOptions = ["upcoming", "available"];
export const programmingLanguageOptions = ["C++"];
export const levelOptions = ["Beginner", "Intermediate", "Advanced"];

const AddCoursesModal = ({
  isFetching,
  refetch,
  teacher_id,
  isOpen,
  setIsOpen,
}) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [pl, setPl] = useState("");
  const [level, setLevel] = useState("");
  const [status, setStatus] = useState("");
  const queryClient = useQueryClient();

  const addCourseMutation = useMutation({
    mutationFn: () => addCourse(teacher_id, title, desc, pl, level, status),
    onSuccess: async () => {
      await refetch();
      toast.success("Course created successfully");
      setIsOpen(false);
    },
    onError: (error) => {
      toast.error(error?.error || "Failed to create course");
    },
  });

  const disabled = [title, desc, pl, level, status].some(
    (field) => field.trim() === ""
  );

  return (
    <ModalWrapper
      title={"Add new course"}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <AuthInputField
        type={"text"}
        placeholder={"Title"}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={"mt-4 text-white"}
      />
      <AuthInputField
        type={"text"}
        placeholder={"Description"}
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        className={"mt-4 text-white"}
      />

      <div className="flex gap-4 my-4">
        <SelectOption
          placeholder={"Status"}
          options={statusOptions}
          value={status}
          onChange={setStatus}
        />
        <SelectOption
          placeholder={"Level"}
          options={levelOptions}
          value={level}
          onChange={setLevel}
        />
        <SelectOption
          placeholder={"Programming Language"}
          options={programmingLanguageOptions}
          value={pl}
          onChange={setPl}
        />
      </div>

      <BorderButton
        onClick={() => addCourseMutation.mutate()}
        disabled={disabled || addCourseMutation.isPending || isFetching}
        isLoading={addCourseMutation.isPending || isFetching}
        type="button"
        loaderColor="#000"
        label={"Add"}
        parentClass={"w-full"}
        className="bg-white text-black w-full"
      />
    </ModalWrapper>
  );
};

export default AddCoursesModal;

const SelectOption = ({ options, placeholder, value, onChange }) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="capitalize bg-black">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="bg-black">
        {options.map((item, index) => (
          <SelectItem key={index} className="capitalize" value={item}>
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
