import Image from "next/image";
import HomeCover from './cover';
import HomeTag from './tag'
import HomeList from './list';
import HomeFooter from './footer';

export default function Home() {
  return (
    <div className="fixed bg-white w-[430px] h-[942px] flex flex-col">
      <div className="h-[83px]">
        <div className="absolute right-[12px] top-[25px]">
          <div className="rounded-[18px] w-[26px] h-[36px] bg-white">
            <Image src="/menu.svg" alt="menu logo" width={24} height={24}/>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-[59px]">
        <div className="flex items-center mb-[23px] w-[386px] h-[36px] rounded-[20px] border-[1.5px]" style={{ borderColor: '#15097A' }}>
          <Image className="ml-[12px] mr-[14px]" src="/search.svg" alt="search logo" width={24} height={24}/>
          <input placeholder="Search for dreams"/>
        </div>
      </div>
      <div className="overflow-y-auto flex-1 pb-[5px]">
        <HomeCover />
        <HomeTag />
        <HomeList />
      </div>
      <HomeFooter />
    </div>
  )
}
