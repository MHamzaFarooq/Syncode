export default function BorderButton({
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
          className={`font-medium leading-[31px] tracking-[-1.01%] px-[15px] py-[5px] rounded-lg text-[15px] ${className}`}
        >
          {label}
        </button>
      </div>
    </>
  );
}
