'use client'

import { AritcleSummaryEntity } from "@/app/lib/mysql/entity";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

function ListItem(props: AritcleSummaryEntity) {
  return (
    <div className="w-[192px] bg-[#F9F9F9] rounded-[10px]" style={{ filter: 'drop-shadow(1px 4px 4px rgba(0, 0, 0, 0.25))' }}>
      <div className="relative">
        <img className="w-[192px] h-[132px]" src={props.cover} alt="" />
        <div className="mr-[5px] flex flex-row-reverse gap-[2px] text-[#FFF] text-[10px] absolute right-0 bottom-0">
          <div>{props.target}</div>
          <Image src="/target.svg" alt="" height={16} width={16}/>
          <div>{props.read}</div>
          <Image src="/eye.svg" alt="" height={16} width={16}/>
        </div>
      </div>
      <div className="pl-[5px] pr-[6px]">
        <div className="text-[16px] font-bold">{props.title}</div>
        <div className="flex">
          <div className="flex-1 text-[12px]">{props.desc}</div>
          <img src={props.authorAvatar} alt="" className="w-[30px] h-[30px] rounded-[15px]" />
        </div>
      </div>
    </div>
  )
}

export default function List() {
  const [list, setList] = useState<Array<AritcleSummaryEntity>>([]);

  useEffect(() => {
    fetch('/api/list').then(res => res.json()).then(setList)
  }, []);

  return (
    <div className="grid grid-cols-2 gap-[15px] pl-[11px]">
      {list.map(item => <Link key={item.id} to={'/detail'}><ListItem{...item} /></Link>)}
    </div>
  )
}