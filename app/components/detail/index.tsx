'use client'
import Image from "next/image";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AritcleDetailEntity } from "@/app/lib/mysql/entity";

export default function Detail() {
  const [detail, setDetail] = useState<AritcleDetailEntity>();

  useEffect(() => {
    fetch('/api/detail').then(res => res.json()).then(setDetail)
  }, []);

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
        <img height={286} width={430} alt="" src={detail?.cover} />
      </div>
      <div className="px-[10px]">

        <div className="mt-[25px] text-[20px] font-bold">{detail?.title}</div>
        <div className="flex flex-row-reverse flex-end items-center">
          <span className="text-[#A72062] text-[16px]">{detail?.author}</span>
          <img className="w-[32px] h-[32px] rounded-[16px] mr-[5px]" src={detail?.authorAvatar} alt="" />
        </div>
        <div className="mt-[16px] font-normal">{detail?.content}</div>
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