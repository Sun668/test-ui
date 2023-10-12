'use client'

import Image from "next/image";
import { useState } from "react";

function CoverItem() {
  return (
    <div className="flex justify-center flex-1">
      <div className="w-[411px] h-[279px] rounded-[10px] flex justify-center items-center relative" style={{ background: 'rgba(255, 89, 221, 0.18)' }}>
        <img className="w-[396px] h-[265px]" src="https://s3-alpha-sig.figma.com/img/fe80/8a0e/b43186e247904d205fb962baffa4a319?Expires=1698019200&Signature=R67hIUbIrt27BNWH2bWzwWQ-NnQtomyOXJZc9qRiFA2XAV6a8h~Jb5PaLt0kM289VqJ1Uxa2wOgvfweNOeSIv0crd85m6z0KdxVDSiZb3ZXjarYJAsEcER~LjRwostVh6-OsYdLnX9c5RAjy0ysZNw9jPq6QctNvc~pAiAyjUXGG1Em3dFT6ty2qF8-nsMWrkZMK3EcGyiZeB6DacD98Ad-2SkoE9qQCV8Ysa89AGNdPKMpo0ia4bOGqdRmGouRkg7riYFuhFLP3h7LiMWInCZ4YykwlH4FSe7j0wZUeHIfXapHZX2LUwMEai7afLMJUeP405R3~VX0Fn~YRQCmb8Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
        <div className="w-[411px] h-[279px] absolute left-0 top-0" style={{ background: 'linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5))' }}>
          <div className="absolute w-[126px] right-0 pt-[15px] mr-[15px]">
            <div className="text-[24px] font-bold">Arachna</div>
            <div className="text-[12px]">A group of spider women on the outskirts of the city. These fierce and elegant creatures possess the upper body of a woman and the lower body of a spider...</div>
            <div className="bg-white w-[108px] h-[35px] rounded-[20px] flex justify-center items-center">
              <div className="text-[14px] font-bold">Get Start</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CoverAnchor(props: {isCurrent?: boolean}) {
  if (props.isCurrent) {
    return (
      <div className="w-[9px] h-[6px] rounded-[3px] bg-[#C84B6A]"></div>
    )
  }
  return (
    <div className="w-[6px] h-[6px] rounded-[3px] bg-[#C4C4C4]"></div>
  )
}

export default function Cover() {
  const total = 7;
  const [current, setCurrent] = useState(0);
  const handleSwipe = (direction: string) => {
    if (direction === 'left') {
      setCurrent((prevIndex) => (prevIndex === total - 1 ? 0 : prevIndex + 1));
    } else if (direction === 'right') {
      setCurrent((prevIndex) => (prevIndex === 0 ? total - 1 : prevIndex - 1));
    }
  };
  return (
    <>
      <div className="overflow-hidden">
        <div
          className="w-[411px] h-[279px] cursor-pointer"
          style={{
            transition: 'transform 0.3s ease-in-out',
            transform: `translateX(-${current * 100}%)`,
          }}
          onTouchStart={(e) => {
            const touchStartX = e.touches[0].clientX;
            const touchEndX = (e: any) => {
              const touchEndX = e.changedTouches[0].clientX;
              const deltaX = touchStartX - touchEndX;
              if (deltaX > 10) {
                handleSwipe('left');
              } else if (deltaX < -10) {
                handleSwipe('right');
              }
            };
            document.addEventListener('touchend', touchEndX);
          }}
        >
          <div className="flex flex-nowrap flex-row">
            {new Array(total).fill(0).map((_, i) => <CoverItem key={i} />)}
          </div>
        </div>
      </div>
      <div className="flex gap-[4px] mt-[5px] justify-center">
        {new Array(total).fill(0).map((_, i) => <div className="cursor-pointer" key={i} onClick={() => setCurrent(i)}><CoverAnchor isCurrent={i === current}/></div>)}
      </div>
    </>
  )
}