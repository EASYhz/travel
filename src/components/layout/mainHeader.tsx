import { User } from "@/types/types";
import Link from "next/link";
import UserHeader from "./userHeader";

/* 메인 헤더 */
export default function MainHeader(props: { user?: User }) {
  return (
    <div className="flex justify-between items-center h-16 fixed overflow-hidden w-screen md:px-12 lg:px-48 xl:px-48 py-2 bg-white border-t-0 border-r-0 border-b border-l-0 border-[#dee5ed]">
      {/* TODO : border 색상 변경 */}
      {/* md:px-12 lg:px-48 xl:px-48 */}
      <Link href="/">
        <div className="flex-grow-0 items-center flex-shrink-0 w-[109px] h-6">
          <p className="absolute text-xl font-bold text-left text-[#7b95b7]">
            Title
          </p>
        </div>
      </Link>
      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-10">
        <Link href="/">
          <p className="header-menu">Home</p>
        </Link>
        <p className="header-menu">About</p>
        <UserHeader user={props.user} />
      </div>
    </div>
  );
}
