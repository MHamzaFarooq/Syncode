export default function RecorderButton({
  label,
  className = "bg-white text-black",
  parentClass,
  onClick,
  type = "button",
  disabled = false,
}) {
  return (
    <>
      <div
        className={`${parentClass} bg-transparent p-2 border border-[rgba(255,255,255,0.15)] hover:border-[rgba(255,255,255,0.35)] transition-all w-fit rounded-2xl`}
      >
        <button
          type={type}
          disabled={disabled}
          onClick={onClick}
          className={`flex items-center justify-center
          font-medium leading-[31px] text-[15px] tracking-[-1.01%]
          h-[41px] px-[15px] py-[5px]
          rounded-lg 
          ${className}`}
        >
          {label}
        </button>
      </div>
    </>
  );
}
