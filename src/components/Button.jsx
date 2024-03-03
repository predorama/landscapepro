const Button = ({ type, title }) => {
  return (
    <button type={type} title={title} className="bg-[#124a2f] shadow-gray-500">
      <label>{title}</label>
    </button>
  );
};

export default Button;
