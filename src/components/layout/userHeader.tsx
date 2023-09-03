import { User } from "@/types/types";
import Link from "next/link";

/* 유저 헤더 */
export default function UserHeader(props: { user?: User }) {
  return (
    <div>
      {props.user ? (
        <Link href="/community/post/edit">
          {/* 로그인 상태 -> 로그아웃이나 마이페이지, 비로그인 상태 -> 로그인 상태 */}
          <span className="default-button mr-4">마이페이지</span>
        </Link>
      ) : (
        <Link href="/user/login">
          {/* 로그인 상태 -> 로그아웃이나 마이페이지, 비로그인 상태 -> 로그인 상태 */}
          <span className="default-button mr-4">로그인</span>
        </Link>
      )}
    </div>
  );
}
