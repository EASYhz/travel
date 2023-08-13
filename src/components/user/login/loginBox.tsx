import Logo from "@/components/logo/logo";
import { Menu } from "@/interfaces/user/login";
import Link from "next/link";
import LoginForm from "./loginForm";
import SocialLoginButtons from "./socialLoginButtons";

export default function LoginBox() {
  const loginMenuList: Array<Menu> = [
    {
      menuType: "아이디 찾기",
    },
    {
      menuType: "비밀번호 찾기",
    },
    {
      menuType: "회원가입",
      linkUrl: "/user/join",
    },
  ];
  const loginMenu: JSX.Element[] = loginMenuList.map((el, index) => (
    <div key={index}>
      <Link
        href={el.linkUrl !== undefined ? el.linkUrl : "#"}
        key={el.menuType}
      >
        <span className="text-sm mx-3 font-medium text-primary-600 hover:underline ">
          {el.menuType}
        </span>
      </Link>
      {index !== loginMenuList.length - 1 ? (
        <div className="divider" />
      ) : (
        <div />
      )}
    </div>
  ));
  return (
    <div>
      {/* <section className="bg-gray-50 dark:bg-gray-900"> */}
      <section className="bg-main-white">
        <div className="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-28">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Login
              </h1>
              <LoginForm />
              <div className="flex items-center justify-center">
                {loginMenu}
              </div>
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-main-blue after:mt-0.5 after:flex-1 after:border-t after:border-main-blue">
                <p className="mx-4 mb-0 text-center font-semibold">OR</p>
              </div>
              <SocialLoginButtons />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
