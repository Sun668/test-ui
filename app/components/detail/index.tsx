'use client'
import Image from "next/image";
import { Link } from 'react-router-dom';

export default function Detail() {
  return (
    <div className="fixed bg-white w-[430px] h-[942px]">
      <div className="absolute right-[12px] top-[25px] w-[405px] flex justify-between">
        <Link to={'/'}>
          <div className="bg-white rounded-[18px] w-[36px] h-[36px] flex justify-center items-center">
            <Image src="/arrowLeft.svg" width={24} height={24} alt=""/>
          </div>
        </Link>
        <div className="bg-white rounded-[18px] w-[36px] h-[36px] flex justify-center items-center">
          <Image src="/menu.svg" width={24} height={24} alt=""/>
        </div>
      </div>
      <div className="w-[430px] h-[286px]">
        <img height={286} width={430} alt="" src="https://s3-alpha-sig.figma.com/img/37b9/3904/db7e0d4e786f345415609aeafbbc5023?Expires=1698019200&Signature=AVXyVJ4Oj46zijZucxNHOisUFsz9mvo0XlEOxyElNgQEAnwvCrCTKhktDk4UbPoBHnZ-zKel-89Q~p~z0oyZGHihOfBG2ytme8m6lH~cVH6B3u-ZRDT3Y4G9ESSOgowRpSNoLuKs3Lwf7EdgLAj2Zi86T3oTwUuoCpatbFrkjN0Y8va5hnxmvxrHLiRmOKm5AN7dwWrzvPJAi4kxEV3xQr~w3-015zy5xa~wZeo~Xcw9ygYmYMT8pagM8ANsVdQoQOVxfBE8M~6vrJU4kp6EKulAarDvphhf4GvH3DE56Kb3F7XMdPGeg5VzRedQryEfTYuSlWCVwRSThBMmhjVZeQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
      </div>
      <div className="px-[10px]">

        <div className="mt-[25px] text-[20px] font-bold">Goddess Maria</div>
        <div className="flex flex-row-reverse flex-end items-center">
          <span className="text-[#A72062] text-[16px]">Fannings</span>
          <img className="w-[32px] h-[32px] rounded-[16px] mr-[5px]" src="https://s3-alpha-sig.figma.com/img/4b59/1aee/4e1a2b76c6e3ef3ad225ca39f03c15e2?Expires=1698019200&Signature=WJ6pL83RikVaM2HW3dfW41hzHYdWtxlINM9u52hDVXnVGYaPlRGpA2fMt2YkMFb12bMCAD5D1Q1tiGq9jtxnNRdgtdoSVjsYJSJ2eLcZW~J4wTJIsP~nYRlVyS4JZg8FhBtxHzdRS~hnE8~2aC9ZLDd7F8DxRG6nziy00XvmObEXvBn~-pYyJyhTDuKfiWfpT-M9STpcILqrwG2LsK2dTbe3A3tuKeu0lC0CtKTwnA74ATTyXmvOOhLZ87OfoYN-cAoWFimscO-~wT~DH-NxdWCt-E5MVuLWUpKhh88SXaSS9QA-rkxau~VSpiAGJxYyBLUcgtGFE4wXCPDDrj0OkA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
        </div>
        <div className="mt-[16px] font-normal">You find yourself in a vast celestial landscape,with the radiant figure of Goddess Maria shining brightly beyond the sun. Her golden aura illuminates the surroundings casting a warm light on the ethereal clouds that float in the sky. </div>
        <div className="text-[#A72062] text-[14px] grid grid-cols-5 mt-[41px]">
          <span>#Romantic</span>
          <span>#Fiction</span>
          <span>#Love story</span>
          <span>#Love story</span>
          <span>#Fiction</span>
          <span>#Romantic</span>
          <span>#Fiction</span>
          <span>#Love story</span>
          <span>#Love story</span>
          <span>#Fiction</span>
        </div>
        <div className="mt-[20px] flex gap-[16px] text-[#15097A] text-[14px]">
          <div className="flex justify-center items-center bg-[#EDEDED] px-[10px] py-[5px] rounded-[20px]">Time travel</div>
          <div className="flex justify-center items-center bg-[#EDEDED] px-[10px] py-[5px] rounded-[20px]">RPG</div>
          <div className="flex justify-center items-center bg-[#EDEDED] px-[10px] py-[5px] rounded-[20px]">Science Fiction</div>
          <div className="flex justify-center items-center bg-[#EDEDED] px-[10px] py-[5px] rounded-[20px]">Fantasy</div>
        </div>
        <div className="mt-[22px] flex items-center">
          <div className="flex mr-[9px]">
            <div className="w-[42px] h-[42px] rounded-[21px] bg-[#C4C4C4] border-[2px] border-[#969696]"></div>
            <div className="w-[42px] h-[42px] ml-[-17px] rounded-[21px] bg-[#C4C4C4] border-[2px] border-[#969696]"></div>
            <div className="w-[42px] h-[42px] ml-[-17px] rounded-[21px] bg-[#C4C4C4] border-[2px] border-[#969696]"></div>
          </div>
          <div className="text-[#000989] text-[14px] mr-[80px]">+28 contributors</div>
          <div className="text-[#15097A] text-[20px] font-bold flex">
            <Image src="/target2.svg" alt="" height={18} width={18}/>
            2429
          </div>
        </div>
        <div className="flex justify-center mt-[54px]">
          <div className="flex justify-center items-center w-[260px] h-[52px]" style={{ border: 'solid 2px', borderImage: 'linear-gradient(to right, #15097A, #FF006A) 10', borderRadius: 25 }}>Enter Dream </div>
        </div>
        <div  className="flex justify-center mt-[30px]">
          <div>View Dream Details</div>
          <Image src="/arrowRightFill.svg" width={24} height={24} alt=""/>
        </div>
      </div>
    </div>
  )
}