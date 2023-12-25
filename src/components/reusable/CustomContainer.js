export default function CustomContainer({ children, title, subTitle }) {
  return (
    <div className="h-full w-full relative">
      <div className="absolute flex justify-between left-0 right-0 bg-black text-white px-4">
        <p className="text-base text-[#91b9a2]">{title}</p>
        {subTitle && <p className="text-xs text-[#91b9a2]">{subTitle}</p>}
      </div>
      <div className="w-full h-full pt-8">{children}</div>
    </div>
  );
}
