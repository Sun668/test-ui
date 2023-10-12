import { AritcleDetailEntity } from "@/app/lib/mysql/entity";
import { NextRequest, NextResponse } from "next/server";

export const GET = function(req: NextRequest) {
  const result: AritcleDetailEntity = {
    id: '1',
    title: 'Goddess Maria',
    author: 'Fannings',
    desc: 'Love, celebration, and a promise of forever.',
    cover: 'https://s3-alpha-sig.figma.com/img/37b9/3904/db7e0d4e786f345415609aeafbbc5023?Expires=1698019200&Signature=AVXyVJ4Oj46zijZucxNHOisUFsz9mvo0XlEOxyElNgQEAnwvCrCTKhktDk4UbPoBHnZ-zKel-89Q~p~z0oyZGHihOfBG2ytme8m6lH~cVH6B3u-ZRDT3Y4G9ESSOgowRpSNoLuKs3Lwf7EdgLAj2Zi86T3oTwUuoCpatbFrkjN0Y8va5hnxmvxrHLiRmOKm5AN7dwWrzvPJAi4kxEV3xQr~w3-015zy5xa~wZeo~Xcw9ygYmYMT8pagM8ANsVdQoQOVxfBE8M~6vrJU4kp6EKulAarDvphhf4GvH3DE56Kb3F7XMdPGeg5VzRedQryEfTYuSlWCVwRSThBMmhjVZeQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    authorAvatar: 'https://s3-alpha-sig.figma.com/img/4b59/1aee/4e1a2b76c6e3ef3ad225ca39f03c15e2?Expires=1698019200&Signature=WJ6pL83RikVaM2HW3dfW41hzHYdWtxlINM9u52hDVXnVGYaPlRGpA2fMt2YkMFb12bMCAD5D1Q1tiGq9jtxnNRdgtdoSVjsYJSJ2eLcZW~J4wTJIsP~nYRlVyS4JZg8FhBtxHzdRS~hnE8~2aC9ZLDd7F8DxRG6nziy00XvmObEXvBn~-pYyJyhTDuKfiWfpT-M9STpcILqrwG2LsK2dTbe3A3tuKeu0lC0CtKTwnA74ATTyXmvOOhLZ87OfoYN-cAoWFimscO-~wT~DH-NxdWCt-E5MVuLWUpKhh88SXaSS9QA-rkxau~VSpiAGJxYyBLUcgtGFE4wXCPDDrj0OkA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    read: '330.5K',
    target: '1280',
    content: 'You find yourself in a vast celestial landscape,with the radiant figure of Goddess Maria shining brightly beyond the sun. Her golden aura illuminates the surroundings casting a warm light on the ethereal clouds that float in the sky. '
  }

  return NextResponse.json(result);
}