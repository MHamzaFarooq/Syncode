import { useRouter } from "next/navigation";
import BorderButton from "../Button/borderButton";
import ModalWrapper from "../Modal/wrapper";
import VideoCard from "./video-card";

const EditModal = ({
  isOpen,
  setIsOpen,
  videos,
  setVideoId,
  setIsDialogVidOpen,
}) => {
  const router = useRouter();
  return (
    <ModalWrapper title={"Edit course"} isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="pb-9">All videos</div>
      {videos.length === 0 ? (
        <div>No videos on this course</div>
      ) : (
        <div className="flex flex-col gap-4">
          {videos.map((item) => (
            <VideoCard
              key={item.video_id}
              item={item}
              setVideoId={setVideoId}
              setIsDialogVidOpen={setIsDialogVidOpen}
            />
          ))}
        </div>
      )}
      <BorderButton
        onClick={() => router.push("/record")}
        disabled={false}
        isLoading={false}
        type="button"
        loaderColor="#000"
        label={"Add more"}
        parentClass={"w-full mt-4"}
        className="bg-white text-black w-full"
      />
    </ModalWrapper>
  );
};

export default EditModal;
