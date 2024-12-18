const FormWrapper = ({ children }) => {
  return (
    <div className="w-[474px] border border-[rgba(255,255,255,0.1)] flex flex-col bg-black rounded-[12px]">
      <h1 className="text-white py-9 px-[172px] border-b border-b-[rgba(255,255,255,0.1)]">
        Login or Signup
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
