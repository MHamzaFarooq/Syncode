const AuthInputField = ({ type, placeholder, value, onChange, className }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${className} placeholder:text-[#6d6d6d] border border-[#0F0E10]
       py-[14px] px-4 rounded-xl w-full 
       focus:border focus:border-white 
       bg-[#0F0E10] leading-[26px] text-[15px] tracking-[-0.01%]`}
    />
  );
};

export default AuthInputField;
