export default function Button(props) {
  return (
    <>
      <div className="bg-transparent p-2 border border-[rgba(255,255,255,0.15)] hover:border-[rgba(255,255,255,0.35)] transition-all w-fit rounded-2xl">
        <button className="bg-white text-black px-[15px] py-[5px] rounded-lg text-[15px] font-medium">
          {props.label}
        </button>
      </div>
    </>
  );
}
