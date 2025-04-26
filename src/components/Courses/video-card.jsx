import DeleteTrashSVG from "@/assets/delete-trash";
import EditPencilSVG from "@/assets/edit-pencil";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";
import { DropDownItem } from "./card";
import { useState } from "react";
const VideoCard = ({ item, setVideoId, setIsDialogVidOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onDelete = () => {
    setVideoId(item.video_id);
    setIsDialogVidOpen(true);
  };

  return (
    <div
      className={`flex flex-wrap items-center justify-between 
        p-4 
        border border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.35)] 
        rounded-[12px] bg-[#0F0E10] group`}
    >
      <div className="text-[15px] leading-[26px]">{item.name}</div>
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
            onClick={() => {}}
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

export default VideoCard;
