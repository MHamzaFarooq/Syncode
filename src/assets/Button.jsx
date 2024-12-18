export default function Button({
  label,
  className = "bg-white text-black",
  parentClass,
  onClick,
  type = "button",
}) {
  return (
    <>
      <div
        className={`${parentClass} bg-transparent p-2 border border-[rgba(255,255,255,0.15)] hover:border-[rgba(255,255,255,0.35)] transition-all w-fit rounded-2xl`}
      >
        <button
          type={type}
          onClick={onClick}
          className={`px-[15px] py-[5px] rounded-lg text-[15px] font-medium ${className}`}
        >
          {label}
        </button>
      </div>
    </>
  );
}
