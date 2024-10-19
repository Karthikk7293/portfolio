import Link from "next/link";

function Header() {
  return (
    <div className="  flex justify-between pt-16 pb-4 ">
      <div className=" w-1/2 flex justify-center items-center ">
        <div className="relative">
          {/* <Image
            src={star}
            alt="star "
            width={42}
            height={56}
            className="absolute -left-11 -top-4"
          /> */}
          <p className={`font-baggers text-[#E7E7E7] text-[36px] `}>
            PORTFOLIO
          </p>
        </div>
      </div>
      <div className=" w-1/2 flex items-center ">
        <ul
          className={` font-bebas w-5/6 flex gap-7 justify-around items-center  `}
        >
          <li>
            <Link href={"/"}>home</Link>
          </li>
          <li>
            <Link href={"/profile"}>about</Link>
          </li>
          <li>
            <Link href={"/services"}>services</Link>
          </li>
          <li>
            {" "}
            <Link href={"/works"}>works</Link>
          </li>
          <li>
            <Link href={"/contact-me"}>contact me</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;