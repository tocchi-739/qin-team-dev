import Link from "next/link";

const Button = (props) => {
  return (
    <div className="mt-6 flex items-center justify-center md:mt-10">
      <Link href={props.href}>
        <a className="inline-block rounded-full bg-gray-800 px-[22px] py-[10px] text-center text-white hover:opacity-60">
          {props.text}
        </a>
      </Link>
    </div>
  );
};

export default Button;
