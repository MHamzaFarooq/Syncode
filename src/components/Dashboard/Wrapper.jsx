const DashboardHeadingWrapper = ({ children, heading, className }) => {
  return (
    <div className={`mt-[72px] p-9 ${className}`}>
      <h1 className="text-[32px] font-medium h-[48px] mb-4">{heading}</h1>
      {children}
    </div>
  );
};

export default DashboardHeadingWrapper;
