import Google from "@/components/logo/google";
import Kakao from "@/components/logo/kakao";
import Naver from "@/components/logo/naver";

export default function SocialLoginButton(props: { type: string }) {
  switch (props.type) {
    case "NAVER":
      return <NaverButton />;
    case "KAKAO":
      return <KakaoButton />;
    case "GOOGLE":
      return <GoogleButton />;
    default:
      return <div></div>;
  }
}

function NaverButton() {
  return (
    <button
      className="social-button bg-naver"
      role="button"
      data-te-ripple-init
      data-te-ripple-color="light"
    >
      <Naver />
    </button>
  );
}

function KakaoButton() {
  return (
    <button
      className="social-button bg-kakao"
      role="button"
      data-te-ripple-init
      data-te-ripple-color="light"
    >
      <Kakao />
    </button>
  );
}

function GoogleButton() {
  return (
    <button
      className="social-button bg-google border"
      role="button"
      data-te-ripple-init
      data-te-ripple-color="light"
    >
      <Google />
    </button>
  );
}
