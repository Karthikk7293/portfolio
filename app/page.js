import Image from "next/image";
import image from "@/public/avatar/avatar-6.jpg";

export default function Home() {
  return (
    <main className="w-full h-full my-10  ">
      <div className="grid grid-cols-2 mb-12  ">
        <div className="">
          <div
            data-aos="fade-right"
            className="bg-glass w-[614px] h-[344px] rounded-[35px] border border-default-br flex justify-center items-center p-5 shadow-main"
          >
            <div className="w-[267px] h-[245px] rounded-tl-[35px] rounded-br-[35px]  overflow-hidden flex justify-center items-center  ">
              <Image src={image} alt="" className=" hover:scale-125 duration-300" />
            </div>
            <div className="w-1/2 h-4/6 flex flex-col justify-center gap-5 items-start text-ash px-7 ">
              <p className="text-[15px] ">WEB DEVELOPER</p>
              <p className=" text-4xl text-main-white font-bebas ">KARTHIK.</p>
              <p className="text-[15px]">
                I am Web Developer based in Banglore.
              </p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col justify-between ">
          <div
            data-aos="fade-left"
            className="bg-glass  overflow-hidden w-full h-[67px] rounded-[35px] border  border-default-br flex-wrap-reverse flex items-center  px-6 text-sm shadow-main"
          >
            <div className="animate-loop-scroll  ">
              <p className="text-ash  ">
                I’m available for{" "}
                <span className=" text-[#C9C8C8] ">freelance works. </span>
              </p>
            </div>
            
          </div>
          <div className="flex justify-between">
            <div
              data-aos="fade-up"
              className="bg-glass w-[302px] h-[255px] rounded-[35px] border border-default-br flex flex-col justify-end items-end p-5  shadow-main "
            >
              <p className="text-ash text-xs uppercase">SHOWCASE</p>
              <p className="text-ash text-[20px] text-main-white ">
                Portfolios.
              </p>
            </div>
            <div
              data-aos="fade-up"
              className="bg-glass w-[302px] h-[255px] rounded-[35px] border border-default-br flex flex-col justify-end items-end p-5 shadow-main "
            >
              <p className="text-ash text-xs uppercase">more about me</p>
              <p className="text-ash text-[20px] text-main-white ">
                Credentials.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 mb-12 ">
        <div
          data-aos="fade-right"
          className=" col-span-1 bg-glass w-full h-[286px] rounded-[35px] border border-default-br flex flex-col justify-end items-end p-5 shadow-main "
        >
          <p className="text-ash text-xs uppercase">MY CV</p>
          <p className="text-ash text-[20px] text-main-white ">Download.</p>
        </div>
        <div
          data-aos="fade-up"
          className=" col-span-2 bg-glass w-[600px] mx-auto h-[286px] rounded-[35px] border border-default-br flex flex-col justify-end items-end p-5 shadow-main  "
        >
          <p className="text-ash text-xs uppercase">SPECIALIZATION</p>
          <p className="text-ash text-[20px] text-main-white ">
            Service Offering.
          </p>
        </div>
        <div
          data-aos="fade-left"
          className=" col-span-1 bg-glass w-full h-[286px] rounded-[35px] border border-default-br flex flex-col justify-between items-center p-5  shadow-main "
        >
          <div className="bg-social-bg shadow-social w-[240px] h-[133px] rounder-[15px]  ">
            {" "}
          </div>
          <div>
            <p className="text-ash text-xs uppercase ">STAY WITH ME</p>
            <p className="text-ash text-[20px] text-main-white ">Profiles.</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 mb-12 ">
        <div
          data-aos="fade-right"
          className=" bg-glass w-[600px] h-[286px] rounded-[35px] border border-default-br flex  justify-around items-center px-5 shadow-main "
        >
          <div className=" w-[145px] h-[191px] rounded-[15px] border-[#232323] border bg-dark-black hover:shadow-timeline duration-700 text-center flex-col flex justify-around items-center ">
            <p className=" text-[65px] text-white font-extrabold ">01</p>
            <p className="text-ash text-[14px] uppercase ">
              YEARS <br />
              EXPERIENCE
            </p>
          </div>
          <div className=" w-[145px] h-[191px] rounded-[15px] border-[#232323] border bg-dark-black hover:shadow-timeline duration-700 text-center flex-col flex justify-around items-center ">
            <p className=" text-[65px] text-white font-extrabold ">13</p>
            <p className="text-ash text-xs uppercase ">
              CLIENTS <br />
              WORLD WIDE
            </p>
          </div>
          <div className=" w-[145px] h-[191px] rounded-[15px] border-[#232323] border bg-dark-black hover:shadow-timeline duration-700 text-center flex-col flex justify-around items-center ">
            <p className=" text-[65px] text-white font-extrabold ">20</p>
            <p className="text-ash text-xs uppercase ">
              TOTAL <br />
              PROJECTS
            </p>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className=" bg-glass w-[673px] ms-auto h-[286px] rounded-[35px] border border-default-br flex justify-start items-center p-5 shadow-main "
        >
          <p className=" text-[65px] font-extrabold ">
            Let’s <br />
            work <span className="text-rare-blue">together.</span>
          </p>
        </div>
      </div>
    </main>
  );
}
