import ClipLoader from "react-spinners/ClipLoader";
export default function BorderButton({
  label,
  className = "bg-white text-black",
  parentClass,
  onClick,
  type = "button",
  isLoading = false,
  loaderColor = "white",
  disabled = false,
}) {
  return (
    <>
      <div
        className={`${parentClass} bg-transparent p-2 border border-[rgba(255,255,255,0.15)] hover:border-[rgba(255,255,255,0.35)] transition-all w-fit rounded-2xl`}
      >
        <button
          disabled={disabled || isLoading}
          type={type}
          onClick={onClick}
          className={`${
            disabled && "opacity-50 cursor-not-allowed"
          } flex items-center justify-center
          font-medium leading-[31px] tracking-[-1.01%] text-[15px]
          h-[41px]  px-[15px] py-[5px] rounded-lg ${className}`}
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
