import GoogleButtonSVG from "@/assets/googleButton";

export default function GoogleButton({
  parentClass,
  onClick,
  type = "button",
}) {
  return (
    <>
      <div
        className={`bg-transparent p-2 border border-[rgba(255,255,255,0.15)] hover:border-[rgba(255,255,255,0.35)] transition-all w-full rounded-2xl`}
      >
        <button
          type={type}
          onClick={onClick}
          className={`bg-[#0F0E10] w-full flex items-center justify-center gap-2 font-medium leading-[31px] tracking-[-1.01%] px-[15px] py-[5px] rounded-lg text-[15px]`}
        >
          <GoogleButtonSVG />
          <div>Google</div>
        </button>
      </div>
    </>
  );
}
