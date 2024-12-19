const FormWrapper = ({
  children,
  heading = "Login or Signup",
  headingClassName,
  className = "max-w-[474px]",
}) => {
  return (
    <div
      className={`w-full border border-[rgba(255,255,255,0.1)] flex flex-col bg-black rounded-[12px] ${className}`}
    >
      <h1
        className={`text-white py-9 flex items-center justify-center border-b border-b-[rgba(255,255,255,0.1)] ${headingClassName}`}
      >
        {heading}
      </h1>
      <form
        className="flex flex-col p-9 justify-center items-center gap-4 rounded-md text-white"
        action=""
      >
        {children}
      </form>
    </div>
  );
};

export default FormWrapper;
