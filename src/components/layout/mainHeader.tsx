import Link from "next/link";

/* 메인 헤더 */
export default function MainHeader() {
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
        <Link href="/user/login">
          {/* 로그인 상태 -> 로그아웃이나 마이페이지, 비로그인 상태 -> 로그인 상태 */}
          <span className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden px-3 py-1 rounded-2xl bg-main-blue border border-main-blue">
            <p className="flex-grow-0 flex-shrink-0 text-base text-left text-main-white">
              로그인
            </p>
          </span>
        </Link>
      </div>
    </div>
  );
}
