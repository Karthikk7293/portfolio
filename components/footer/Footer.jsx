import Link from "next/link"

function Footer() {
  return (
    <div className="  flex flex-col gap-8 justify-between py-14 ">
      <div className=" w-full flex  justify-center items-center ">
        <p className={`font-baggers text-[#E7E7E7] text-[36px] `}>PORTFOLIO</p>
      </div>
      <div className=" w-1/2 mx-auto flex items-center ">
        <ul
          className={` font-bebas w-5/6  mx-auto flex gap-7 justify-around items-center  `}
        >
          <li>
            <Link href={"/"}>home</Link>
          </li>
          <li>
            <Link href={"/about"}>about</Link>
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
      <div>
        <p className="text-[10px] text-main-white text-center ">
          Copyright © 2024. All rights reserved by{" "}
          <span className="text-teal-600 font-bebas tracking-wider ">
            KARTHIK.
          </span>
        </p>
      </div>
    </div>
  );
}

export default Footer