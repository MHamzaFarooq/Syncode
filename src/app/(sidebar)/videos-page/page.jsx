import VideosPageContent from "@/components/VideosPage/content";
import VideosPageHeading from "@/components/VideosPage/heading";

const VideosPage = () => {
  return (
    <div className="flex flex-1 flex-col p-9">
      <VideosPageHeading />
      <VideosPageContent />
    </div>
  );
};

export default VideosPage;
