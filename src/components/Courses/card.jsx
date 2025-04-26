import DeleteTrashSVG from "@/assets/delete-trash";
import EditPencilSVG from "@/assets/edit-pencil";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { EllipsisVertical } from "lucide-react";
import { useState } from "react";
const CourseCard = ({
  setCourseId,
  item,
  setIsDialogOpen,
  setIsEditOpen,
  setVideos,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onEdit = () => {
    setVideos(item.videos);
    setIsEditOpen(true);
  };
  const onDelete = () => {
    setCourseId(item.courseId);
    setIsDialogOpen(true);
  };
  return (
    <div
      className={`flex flex-wrap items-center justify-between 
      p-9 
      border border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.35)] 
      rounded-[12px] bg-[#0F0E10] group`}
    >
      <div className="font-medium text-lg">{item.title}</div>
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger className="focus:outline-none">
          <EllipsisVertical
            className={`${
              isOpen ? "opacity-100" : "group-hover:opacity-100 opacity-0"
            } transition-all duration-300 cursor-pointer`}
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white rounded-[12px]">
          <DropDownItem
            Svg={EditPencilSVG}
            label={"Edit"}
            className={"text-black"}
            onClick={onEdit}
          />
          <DropdownMenuSeparator className="bg-[#2122261A]" />
          <DropDownItem
            Svg={DeleteTrashSVG}
            label={"Delete"}
            className={"text-[#FF5A5A]"}
            onClick={onDelete}
          />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default CourseCard;

export const DropDownItem = ({ Svg, label, className, onClick }) => {
  return (
    <DropdownMenuItem
      onClick={onClick}
      className="flex items-center justify-center 
      focus:bg-black/10 cursor-pointer"
    >
      <div className={`w-[70px] flex items-center gap-2 ${className}`}>
        <Svg className="size-4" />
        {label}
      </div>
    </DropdownMenuItem>
  );
};
