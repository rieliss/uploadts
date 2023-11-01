// "use client";
// import React, { useCallback, useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { useStoreHook } from "@/hook/store";
// export type FileImg = {
//   id: number;
//   type: string | null;
//   imgsrc: {
//     id: number;
//     originalName: string;
//     authorId: number;
//   }[];
// } | null;
// type Props = {
//   imgsrc: FileImg[];
// };

// export default function Market({ imgsrc }: Props) {
//   const refhight = useRef<HTMLElement>(null);
//   const [searchstate, setSearchstate] = useState<any[]>();
//   const { search } = useStoreHook();
//   useEffect(() => {
//     const imgSearch = imgsrc.filter((item) => item?.type?.includes(search));
//     console.log(imgSearch);
//     setSearchstate(imgSearch);
//   }, [search]);
//   console.log(searchstate);
//   useEffect(() => {
//     const scroll = (e: any) => {
//       console.log(refhight?.current);
//     };
//     refhight.current?.addEventListener("scroll", scroll);
//     return () => refhight.current?.removeEventListener("scroll", scroll);
//   }, []);

//   return (
//     <main className="flex h-[85vh] ">
//       <section className="flex flex-col w-[15%] items-center  h-full border-r-[1px] shadow-lg">
//         <ul className="text-center flex flex-col gap-y-[1.5rem] items-center justify-cente w-[80%] mt-[5em] font-bold text-[1.2em]">
//           <li> สินค้าแนะนำ </li>
//           <li>Eninem </li>
//           <li>Avatar</li>
//           <li> Tom and Jerry</li>
//           <li>MR. Beans </li>
//           <li>Post Malone</li>
//         </ul>
//         <ul className="text-center flex flex-col  items-center justify-cente w-[80%] h-[5vh] mt-[5em]">
//           <li className=" flex items-center w-full h-full">
//             <Image
//               alt="line"
//               src={"/line.svg"}
//               width={40}
//               height={40}
//               className=""
//             />{" "}
//             <span className="bg-[#00C300] w-full rounded-r-lg "> XxxxxxX </span>{" "}
//           </li>
//           <li className=" flex items-center w-full  h-full">
//             <Image
//               alt="line"
//               src={"/ig.svg"}
//               width={40}
//               height={40}
//               className=""
//             />{" "}
//             <span className="bg-[#ED4A62] w-full rounded-r-lg "> XxxxxxX </span>{" "}
//           </li>
//           <li className=" flex items-center w-full  h-full">
//             <Image
//               alt="line"
//               src={"/facebook.svg"}
//               width={40}
//               height={40}
//               className=""
//             />{" "}
//             <span className="bg-[#105B9D] w-full rounded-r-lg "> XxxxxxX </span>{" "}
//           </li>
//         </ul>
//       </section>
//       <section
//         className="w-[85%] h-full grid grid-cols-3 gap-3 py-[2em] px-[5em] overflow-y-scroll "
//         ref={refhight}
//       >
//         {searchstate
//           ? searchstate.map((img, index: number) => (
//               <Product
//                 key={index + 1}
//                 id={img.id}
//                 srcImg={img.imgsrc[0].originalName}
//                 price={"฿ 590"}
//                 detail={"เสื้อยืดแขนสั้น"}
//               />
//             ))
//           : null}
//       </section>
//     </main>
//   );
// }

// function Product({
//   detail,
//   price,
//   srcImg,
//   id,
// }: {
//   detail: string;
//   price: string;
//   srcImg: string;
//   id: number;
// }) {
//   const router = useRouter();

//   const NavigateFunc = useCallback((srcImg: string) => {
//     router.push("/confirm?ID=" + id + "&size=S&color=black");
//   }, []);

//   return (
//     <div className="flex justify-center items-center flex-col gap-y-2   ">
//       <Image
//         onClick={() => NavigateFunc(srcImg)}
//         alt="product"
//         width={300}
//         height={200}
//         src={"/uploads/" + srcImg}
//         className="cursor-pointer"
//         sizes="(max-width: 768px) 100vw, 33vw"
//         loading="lazy"
//         style={{ objectFit: "contain", width: "20em" }}
//       />
//       <p className="text-[1.1rem] font-bold"> {detail}</p>
//       <p className="text-[1.1rem] font-bold"> {price}</p>
//     </div>
//   );
// }
