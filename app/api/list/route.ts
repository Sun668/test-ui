import { AritcleSummaryEntity } from "@/app/lib/mysql/entity";
import { search } from "@/app/lib/mysql/repository/ArticleSummary";
import { NextRequest, NextResponse } from "next/server";

export const GET = async function(req: NextRequest) {
  const result: Array<AritcleSummaryEntity> = [
    {
      id: '1',
      title: 'Spider Potter',
      desc: 'Love, celebration, and a promise of forever.',
      cover: 'https://s3-alpha-sig.figma.com/img/34a0/ff11/feeb5bdc62f1e2b71353335d66ec7bc9?Expires=1698019200&Signature=aeqSvW2dDTupBqqLZ3vcjRiHd3ur2Rf7LjeDT-sOTN-BTYmZh1wFvZJutYVkALAs5JAO3k9bqcnnt3g8XJQn3jlP0UcRZqdRS3NNkeoZ~4D~UdswOS7HMlW0r9Bxf3jTRBYDRsUO1VdcMugFJoXzAlpzOh1i83TB-stPXPAQUlByHBNQ2pGkWG3AlfK5pv73ikVRvcZKyf5WhGD5MD-R93tT1WQN44Ruh9Fddl86Bes4uigGOwkrugqjlSVjt7ugJ~pLfjUzKcYiMETUujfyNJ2hxUS7fidQhwQOioMaV~OBCjh~xlEdE47U~D3dVfohEDCnYG6KOwZcOApsF6TIIA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      authorAvatar: 'https://s3-alpha-sig.figma.com/img/4b59/1aee/4e1a2b76c6e3ef3ad225ca39f03c15e2?Expires=1698019200&Signature=WJ6pL83RikVaM2HW3dfW41hzHYdWtxlINM9u52hDVXnVGYaPlRGpA2fMt2YkMFb12bMCAD5D1Q1tiGq9jtxnNRdgtdoSVjsYJSJ2eLcZW~J4wTJIsP~nYRlVyS4JZg8FhBtxHzdRS~hnE8~2aC9ZLDd7F8DxRG6nziy00XvmObEXvBn~-pYyJyhTDuKfiWfpT-M9STpcILqrwG2LsK2dTbe3A3tuKeu0lC0CtKTwnA74ATTyXmvOOhLZ87OfoYN-cAoWFimscO-~wT~DH-NxdWCt-E5MVuLWUpKhh88SXaSS9QA-rkxau~VSpiAGJxYyBLUcgtGFE4wXCPDDrj0OkA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      read: '330.5K',
      target: '1280'
    },
    {
      id: '2',
      title: 'Goddess Maria',
      desc: 'The rise and fall of an ancient empire.',
      cover: 'https://s3-alpha-sig.figma.com/img/37b9/3904/db7e0d4e786f345415609aeafbbc5023?Expires=1698019200&Signature=AVXyVJ4Oj46zijZucxNHOisUFsz9mvo0XlEOxyElNgQEAnwvCrCTKhktDk4UbPoBHnZ-zKel-89Q~p~z0oyZGHihOfBG2ytme8m6lH~cVH6B3u-ZRDT3Y4G9ESSOgowRpSNoLuKs3Lwf7EdgLAj2Zi86T3oTwUuoCpatbFrkjN0Y8va5hnxmvxrHLiRmOKm5AN7dwWrzvPJAi4kxEV3xQr~w3-015zy5xa~wZeo~Xcw9ygYmYMT8pagM8ANsVdQoQOVxfBE8M~6vrJU4kp6EKulAarDvphhf4GvH3DE56Kb3F7XMdPGeg5VzRedQryEfTYuSlWCVwRSThBMmhjVZeQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      authorAvatar: 'https://s3-alpha-sig.figma.com/img/4b59/1aee/4e1a2b76c6e3ef3ad225ca39f03c15e2?Expires=1698019200&Signature=WJ6pL83RikVaM2HW3dfW41hzHYdWtxlINM9u52hDVXnVGYaPlRGpA2fMt2YkMFb12bMCAD5D1Q1tiGq9jtxnNRdgtdoSVjsYJSJ2eLcZW~J4wTJIsP~nYRlVyS4JZg8FhBtxHzdRS~hnE8~2aC9ZLDd7F8DxRG6nziy00XvmObEXvBn~-pYyJyhTDuKfiWfpT-M9STpcILqrwG2LsK2dTbe3A3tuKeu0lC0CtKTwnA74ATTyXmvOOhLZ87OfoYN-cAoWFimscO-~wT~DH-NxdWCt-E5MVuLWUpKhh88SXaSS9QA-rkxau~VSpiAGJxYyBLUcgtGFE4wXCPDDrj0OkA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      read: '330.5K',
      target: '1280'
    },
    {
      id: '3',
      title: 'Moonlight',
      desc: 'Love, celebration, and a promise of forever.',
      cover: 'https://s3-alpha-sig.figma.com/img/5986/0dc3/06ed4703617d883b392325f4fd672368?Expires=1698019200&Signature=dk4RqOaY~PoBTWnlWWHneTHGrmJeYlOEXhDiNhZoyK2jh~KgGAzbyV2V9OrJYxoe00bmsjhvKWQXsyvxR2festeYB2XgPMyVtuTy2pOsmPukg-pRpH1Nak3W6RCXkf~c9icNY72pvOmg~ZYVrZE5oqKpywVKCn8l1znIehH4J2tU4ATE0tXfKM2t7Miwc2KaTUcVV6U7B-y6d7VtTlS2Ptl9z4xWUg-8784OfwHLPjbPi5PfL8oNf-sXD8TyjUErGC9LFr8j7RuI7iz7LgLzZCyF9n4y9Vl9GaKKzBi6G7uiSy~5C-ZyIxoH3XbYDy1608oPYwYQqnUpRbPvqhM9ew__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      authorAvatar: 'https://s3-alpha-sig.figma.com/img/4b59/1aee/4e1a2b76c6e3ef3ad225ca39f03c15e2?Expires=1698019200&Signature=WJ6pL83RikVaM2HW3dfW41hzHYdWtxlINM9u52hDVXnVGYaPlRGpA2fMt2YkMFb12bMCAD5D1Q1tiGq9jtxnNRdgtdoSVjsYJSJ2eLcZW~J4wTJIsP~nYRlVyS4JZg8FhBtxHzdRS~hnE8~2aC9ZLDd7F8DxRG6nziy00XvmObEXvBn~-pYyJyhTDuKfiWfpT-M9STpcILqrwG2LsK2dTbe3A3tuKeu0lC0CtKTwnA74ATTyXmvOOhLZ87OfoYN-cAoWFimscO-~wT~DH-NxdWCt-E5MVuLWUpKhh88SXaSS9QA-rkxau~VSpiAGJxYyBLUcgtGFE4wXCPDDrj0OkA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      read: '330.5K',
      target: '1280'
    },
    {
      id: '4',
      title: 'Jungle Hunter',
      desc: 'Love, celebration, and a promise of forever.',
      cover: 'https://s3-alpha-sig.figma.com/img/c756/9856/d5ce74a0a8e917241b1933ebe659d381?Expires=1698019200&Signature=itU6VWu~~O70OMoUJhMlCHdXl5WU90kGFg4GVDa95NkrvTXTkrviBjq10-byMIr9iYxwMspDqo2kO-OajMZEiGwC1Enw4jJ7s7g0vMwJGNpRxrk-i23OJIiCoOcD5ZgYz1pa5o330GwWCFXhdxp1NZIGMFQLy0LZU3zO6kXNJ3KLlH0~URdTgrvb-y-i3bLuOntutkZLV7f0PShSgcuPDk2EhJBrCFdRMy~p~DTlP3JnE3dVuZbhATfYrqGdzwPiIzYrChAzFHZfZsdC8YLrlMypM-zmKmYiQiHX4Twn-SBL36zrGarCZ0ZBnUMxAHsg7qVB2dSitBH~Fdql3w2aoA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      authorAvatar: 'https://s3-alpha-sig.figma.com/img/4b59/1aee/4e1a2b76c6e3ef3ad225ca39f03c15e2?Expires=1698019200&Signature=WJ6pL83RikVaM2HW3dfW41hzHYdWtxlINM9u52hDVXnVGYaPlRGpA2fMt2YkMFb12bMCAD5D1Q1tiGq9jtxnNRdgtdoSVjsYJSJ2eLcZW~J4wTJIsP~nYRlVyS4JZg8FhBtxHzdRS~hnE8~2aC9ZLDd7F8DxRG6nziy00XvmObEXvBn~-pYyJyhTDuKfiWfpT-M9STpcILqrwG2LsK2dTbe3A3tuKeu0lC0CtKTwnA74ATTyXmvOOhLZ87OfoYN-cAoWFimscO-~wT~DH-NxdWCt-E5MVuLWUpKhh88SXaSS9QA-rkxau~VSpiAGJxYyBLUcgtGFE4wXCPDDrj0OkA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      read: '330.5K',
      target: '1280'
    },
    {
      id: '5',
      title: 'Spider Potter',
      desc: 'Love, celebration, and a promise of forever.',
      cover: 'https://s3-alpha-sig.figma.com/img/34a0/ff11/feeb5bdc62f1e2b71353335d66ec7bc9?Expires=1698019200&Signature=aeqSvW2dDTupBqqLZ3vcjRiHd3ur2Rf7LjeDT-sOTN-BTYmZh1wFvZJutYVkALAs5JAO3k9bqcnnt3g8XJQn3jlP0UcRZqdRS3NNkeoZ~4D~UdswOS7HMlW0r9Bxf3jTRBYDRsUO1VdcMugFJoXzAlpzOh1i83TB-stPXPAQUlByHBNQ2pGkWG3AlfK5pv73ikVRvcZKyf5WhGD5MD-R93tT1WQN44Ruh9Fddl86Bes4uigGOwkrugqjlSVjt7ugJ~pLfjUzKcYiMETUujfyNJ2hxUS7fidQhwQOioMaV~OBCjh~xlEdE47U~D3dVfohEDCnYG6KOwZcOApsF6TIIA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      authorAvatar: 'https://s3-alpha-sig.figma.com/img/4b59/1aee/4e1a2b76c6e3ef3ad225ca39f03c15e2?Expires=1698019200&Signature=WJ6pL83RikVaM2HW3dfW41hzHYdWtxlINM9u52hDVXnVGYaPlRGpA2fMt2YkMFb12bMCAD5D1Q1tiGq9jtxnNRdgtdoSVjsYJSJ2eLcZW~J4wTJIsP~nYRlVyS4JZg8FhBtxHzdRS~hnE8~2aC9ZLDd7F8DxRG6nziy00XvmObEXvBn~-pYyJyhTDuKfiWfpT-M9STpcILqrwG2LsK2dTbe3A3tuKeu0lC0CtKTwnA74ATTyXmvOOhLZ87OfoYN-cAoWFimscO-~wT~DH-NxdWCt-E5MVuLWUpKhh88SXaSS9QA-rkxau~VSpiAGJxYyBLUcgtGFE4wXCPDDrj0OkA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      read: '330.5K',
      target: '1280'
    },
    {
      id: '6',
      title: 'Goddess Maria',
      desc: 'The rise and fall of an ancient empire.',
      cover: 'https://s3-alpha-sig.figma.com/img/37b9/3904/db7e0d4e786f345415609aeafbbc5023?Expires=1698019200&Signature=AVXyVJ4Oj46zijZucxNHOisUFsz9mvo0XlEOxyElNgQEAnwvCrCTKhktDk4UbPoBHnZ-zKel-89Q~p~z0oyZGHihOfBG2ytme8m6lH~cVH6B3u-ZRDT3Y4G9ESSOgowRpSNoLuKs3Lwf7EdgLAj2Zi86T3oTwUuoCpatbFrkjN0Y8va5hnxmvxrHLiRmOKm5AN7dwWrzvPJAi4kxEV3xQr~w3-015zy5xa~wZeo~Xcw9ygYmYMT8pagM8ANsVdQoQOVxfBE8M~6vrJU4kp6EKulAarDvphhf4GvH3DE56Kb3F7XMdPGeg5VzRedQryEfTYuSlWCVwRSThBMmhjVZeQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      authorAvatar: 'https://s3-alpha-sig.figma.com/img/4b59/1aee/4e1a2b76c6e3ef3ad225ca39f03c15e2?Expires=1698019200&Signature=WJ6pL83RikVaM2HW3dfW41hzHYdWtxlINM9u52hDVXnVGYaPlRGpA2fMt2YkMFb12bMCAD5D1Q1tiGq9jtxnNRdgtdoSVjsYJSJ2eLcZW~J4wTJIsP~nYRlVyS4JZg8FhBtxHzdRS~hnE8~2aC9ZLDd7F8DxRG6nziy00XvmObEXvBn~-pYyJyhTDuKfiWfpT-M9STpcILqrwG2LsK2dTbe3A3tuKeu0lC0CtKTwnA74ATTyXmvOOhLZ87OfoYN-cAoWFimscO-~wT~DH-NxdWCt-E5MVuLWUpKhh88SXaSS9QA-rkxau~VSpiAGJxYyBLUcgtGFE4wXCPDDrj0OkA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      read: '330.5K',
      target: '1280'
    },
    {
      id: '7',
      title: 'Moonlight',
      desc: 'Love, celebration, and a promise of forever.',
      cover: 'https://s3-alpha-sig.figma.com/img/5986/0dc3/06ed4703617d883b392325f4fd672368?Expires=1698019200&Signature=dk4RqOaY~PoBTWnlWWHneTHGrmJeYlOEXhDiNhZoyK2jh~KgGAzbyV2V9OrJYxoe00bmsjhvKWQXsyvxR2festeYB2XgPMyVtuTy2pOsmPukg-pRpH1Nak3W6RCXkf~c9icNY72pvOmg~ZYVrZE5oqKpywVKCn8l1znIehH4J2tU4ATE0tXfKM2t7Miwc2KaTUcVV6U7B-y6d7VtTlS2Ptl9z4xWUg-8784OfwHLPjbPi5PfL8oNf-sXD8TyjUErGC9LFr8j7RuI7iz7LgLzZCyF9n4y9Vl9GaKKzBi6G7uiSy~5C-ZyIxoH3XbYDy1608oPYwYQqnUpRbPvqhM9ew__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      authorAvatar: 'https://s3-alpha-sig.figma.com/img/4b59/1aee/4e1a2b76c6e3ef3ad225ca39f03c15e2?Expires=1698019200&Signature=WJ6pL83RikVaM2HW3dfW41hzHYdWtxlINM9u52hDVXnVGYaPlRGpA2fMt2YkMFb12bMCAD5D1Q1tiGq9jtxnNRdgtdoSVjsYJSJ2eLcZW~J4wTJIsP~nYRlVyS4JZg8FhBtxHzdRS~hnE8~2aC9ZLDd7F8DxRG6nziy00XvmObEXvBn~-pYyJyhTDuKfiWfpT-M9STpcILqrwG2LsK2dTbe3A3tuKeu0lC0CtKTwnA74ATTyXmvOOhLZ87OfoYN-cAoWFimscO-~wT~DH-NxdWCt-E5MVuLWUpKhh88SXaSS9QA-rkxau~VSpiAGJxYyBLUcgtGFE4wXCPDDrj0OkA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      read: '330.5K',
      target: '1280'
    },
    {
      id: '8',
      title: 'Jungle Hunter',
      desc: 'Love, celebration, and a promise of forever.',
      cover: 'https://s3-alpha-sig.figma.com/img/c756/9856/d5ce74a0a8e917241b1933ebe659d381?Expires=1698019200&Signature=itU6VWu~~O70OMoUJhMlCHdXl5WU90kGFg4GVDa95NkrvTXTkrviBjq10-byMIr9iYxwMspDqo2kO-OajMZEiGwC1Enw4jJ7s7g0vMwJGNpRxrk-i23OJIiCoOcD5ZgYz1pa5o330GwWCFXhdxp1NZIGMFQLy0LZU3zO6kXNJ3KLlH0~URdTgrvb-y-i3bLuOntutkZLV7f0PShSgcuPDk2EhJBrCFdRMy~p~DTlP3JnE3dVuZbhATfYrqGdzwPiIzYrChAzFHZfZsdC8YLrlMypM-zmKmYiQiHX4Twn-SBL36zrGarCZ0ZBnUMxAHsg7qVB2dSitBH~Fdql3w2aoA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      authorAvatar: 'https://s3-alpha-sig.figma.com/img/4b59/1aee/4e1a2b76c6e3ef3ad225ca39f03c15e2?Expires=1698019200&Signature=WJ6pL83RikVaM2HW3dfW41hzHYdWtxlINM9u52hDVXnVGYaPlRGpA2fMt2YkMFb12bMCAD5D1Q1tiGq9jtxnNRdgtdoSVjsYJSJ2eLcZW~J4wTJIsP~nYRlVyS4JZg8FhBtxHzdRS~hnE8~2aC9ZLDd7F8DxRG6nziy00XvmObEXvBn~-pYyJyhTDuKfiWfpT-M9STpcILqrwG2LsK2dTbe3A3tuKeu0lC0CtKTwnA74ATTyXmvOOhLZ87OfoYN-cAoWFimscO-~wT~DH-NxdWCt-E5MVuLWUpKhh88SXaSS9QA-rkxau~VSpiAGJxYyBLUcgtGFE4wXCPDDrj0OkA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      read: '330.5K',
      target: '1280'
    },
  ]
  // const result = await search();

  return NextResponse.json(result);
}