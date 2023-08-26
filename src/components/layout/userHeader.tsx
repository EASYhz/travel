import Link from "next/link";

/* 유저 헤더 */
export default function UserHeader() {
  const isLogin: boolean = true;
  return (
    <div>
      {isLogin ? (
        <Link href="community/post/edit">
          {/* 로그인 상태 -> 로그아웃이나 마이페이지, 비로그인 상태 -> 로그인 상태 */}
          <span className="default-button mr-4">
            {/* <p className="flex-grow-0 flex-shrink-0 text-base text-left text-main-white"> */}
            마이페이지
            {/* </p> */}
          </span>
        </Link>
      ) : (
        <Link href="/user/login">
          {/* 로그인 상태 -> 로그아웃이나 마이페이지, 비로그인 상태 -> 로그인 상태 */}
          <span className="default-button mr-4">
            {/* <p className="flex-grow-0 flex-shrink-0 text-base text-left text-main-white"> */}
            로그인
            {/* </p> */}
          </span>
        </Link>
      )}
    </div>
  );
}
