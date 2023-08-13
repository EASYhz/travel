import Logo from "@/components/logo/logo";
import Link from "next/link";
import SocialLoginButton from "./socialLoginButton";

export default function LoginBox() {
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
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <button type="submit" className="user-button">
                  Sign in
                </button>
                <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-main-blue after:mt-0.5 after:flex-1 after:border-t after:border-main-blue">
                  <p className="mx-4 mb-0 text-center font-semibold">OR</p>
                </div>
                <div className="w-full flex justify-center items-center place-items-center">
                  <SocialLoginButton type="NAVER" />
                  <SocialLoginButton type="KAKAO" />
                  <SocialLoginButton type="GOOGLE" />
                </div>

                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    href="/user/join"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
