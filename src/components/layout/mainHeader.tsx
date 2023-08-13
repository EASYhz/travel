import Link from "next/link";

/* 메인 헤더 */
export default function MainHeader() {
  return (
    <div className="flex w-full justify-between items-center h-16 fixed overflow-hidden px-[98px] py-2 bg-white border-t-0 border-r-0 border-b border-l-0 border-[#dee5ed]">
      {/* TODO : border 색상 변경 */}
      <Link
        href="/"
        className="flex-grow-0 items-center flex-shrink-0 w-[109px] h-6"
      >
        <p className="absolute left-[98px] text-xl font-bold text-left text-[#7b95b7]">
          Title
        </p>
      </Link>
      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-12">
        <p className="header-menu">Home</p>
        <p className="header-menu">About</p>
        <Link
          href="/user/login"
          className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden px-3 py-1 rounded-2xl bg-main-blue border border-main-blue"
        >
          {/* 로그인 상태 -> 로그아웃이나 마이페이지, 비로그인 상태 -> 로그인 상태 */}
          <p className="flex-grow-0 flex-shrink-0 text-base text-left text-main-white">
            로그인
          </p>
        </Link>
      </div>
    </div>
  );
}
