import ClipLoader from "react-spinners/ClipLoader";
export default function BorderButton({
  label,
  className = "bg-white text-black",
  parentClass,
  onClick,
  type = "button",
  isLoading = false,
  loaderColor = "white",
}) {
  return (
    <>
      <div
        className={`${parentClass} bg-transparent p-2 border border-[rgba(255,255,255,0.15)] hover:border-[rgba(255,255,255,0.35)] transition-all w-fit rounded-2xl`}
      >
        <button
          type={type}
          onClick={onClick}
          className={`font-medium flex items-center justify-center leading-[31px] h-[41px] tracking-[-1.01%] px-[15px] py-[5px] rounded-lg text-[15px] ${className}`}
        >
          {isLoading ? (
            <ClipLoader loading={isLoading} size={24} color={loaderColor} />
          ) : (
            label
          )}
        </button>
      </div>
    </>
  );
}
