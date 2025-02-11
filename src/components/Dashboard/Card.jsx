import Link from "next/link";

const Card = (props) => {
  const CardContent = (
    <div className="p-9 border border-[rgba(255,255,255,0.1)] rounded-[12px] bg-[#0F0E10] hover:border-[rgba(255,255,255,0.35)]">
      <div className="flex items-center justify-between">
        <h1 className="text-[24px] font-medium">{props.title}</h1>
        <div
          className={`py-[5px] px-[10px] ${props.badgeColor} rounded-full text-[10px] font-bold`}
        >
          {props.badgeText}
        </div>
      </div>
      <div className="mt-[16px] text-[16px] font-normal max-w-[966px] text-[#6D6D6D]">
        {props.desc}
      </div>
      <div className="mt-9 flex items-center justify-between">
        <div className="flex gap-6">
          <p className="text-[12px]">C++</p>
          <p className="text-[12px]">3.4 Hours</p>
          <p className="text-[12px]">Beginner Level</p>
        </div>
        <div className="text-[12px]">Dr. Erum Ashraf</div>
      </div>
    </div>
  );

  return (
    <div className="mt-[72px] p-9">
      <h1 className="text-[32px] font-medium h-[48px]">{props.heading}</h1>
      <div className={`${props.blur} mt-4 w-full h-[213px] cursor-pointer`}>
        {props.href ? (
          <Link href={props.href}>{CardContent}</Link>
        ) : (
          CardContent
        )}
      </div>
    </div>
  );
};

export default Card;
