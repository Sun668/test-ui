import Image from "next/image";

export default function Tag() {
  return (
    <div className="ml-[30px] mr-[26px] mt-[17px] divide-y  text-[#062C81]">
      <div className="flex text-[14px] pb-[8px] pt-[8px] items-center">
        <div className="text-[#D70B5F] mr-[14px] font-bold">Recommended</div>
        <div className="mr-[24px]">Fan Fiction</div>
        <div className="mr-[50px]">Sci-fi</div>
        <div className="mr-[5px]">RPG</div>
        <Image src="/arrowRight.svg" alt="" width={17} height={17}/>
      </div>
      <div className="flex text-[14px] pb-[8px] pt-[8px] ">
        <div className="text-[#15097A] mr-[40px] font-bold" style={{ borderBottom: 'solid 1px #15097A' }}>Default</div>
        <div className="mr-[46px]">Recent</div>
        <div className="mr-[47px]">Hot</div>
        <div className="mr-[10px] pr-[10px]">Nodes</div>
        <div>Filter</div>
      </div>
    </div>
  )
}