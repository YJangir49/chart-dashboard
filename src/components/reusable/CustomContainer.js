export default function CustomContainer({
  children,
  headingLeft,
  subHeadingLeft,
  headingRight,
  subHeadingRight,
  headingCenter,
  style,
}) {
  return (
    <div className="h-full w-full relative outline rounded outline-2 outline-offset-2 outline-zinc-800 shadow-lg shadow-slate-800 font-semibold">
      <div className=" absolute flex justify-between items-center left-0 right-0 bg-black text-white px-4 pb-1">
        <div className="flex items-center">
          <p className="text-lg text-[#91b9a2] ">{headingLeft}</p>
          {subHeadingLeft !== undefined && (
            <p className="text-base ml-1 text-[#bd9755]">{subHeadingLeft}</p>
          )}
        </div>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-[#09babb]">
            {headingCenter}
          </p>
        </div>
        <div className="flex items-center">
          {subHeadingRight !== undefined && (
            <p className="text-[12px] mr-1 digital-font">{subHeadingRight}</p>
          )}
          {headingRight !== undefined && (
            <p className="text-base text-[#91b9a2]">{headingRight}</p>
          )}
        </div>
      </div>
      <div
        className="w-full h-full pt-8 overflow-y-scroll overflow-x-hidden"
        style={style}
      >
        {children}
      </div>
    </div>
  );
}
