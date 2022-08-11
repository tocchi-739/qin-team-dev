const Button = (props) => {
  return (
    <div className="flex items-center justify-center">
      <a
        className="mt-6 inline-block rounded-full bg-gray-800 px-[22px] py-[10px] text-center text-white hover:opacity-60"
        href={props.href}
      >
        {props.text}
      </a>
    </div>
  );
};

export default Button;
