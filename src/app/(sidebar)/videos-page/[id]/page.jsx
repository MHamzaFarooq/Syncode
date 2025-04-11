import VideosPageId from "@/components/VideosPage";

const VideosPage = async ({ params }) => {
  const { id } = await params;
  return <VideosPageId id={id} />;
};

export default VideosPage;
