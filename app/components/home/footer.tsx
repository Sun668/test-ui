import Image from "next/image";

export default function Footer() {
  return (
    <div className="h-[65px] w-[430px] bg-[#F8F8F8] flex justify-center">
      <div className="flex flex-col justify-center items-center">
        <Image src="/home.svg" alt="" height={24} width={24}/>
        <div>Home</div>
      </div>
      <div className="w-[215px] flex justify-center items-center">
        <Image src="/write.svg" alt="" height={55} width={55}/>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Image src="/mine.svg" alt="" height={24} width={24}/>
        <div>Mine</div>
      </div>
    </div>
  )
}