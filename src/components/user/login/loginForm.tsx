export default function LoginForm() {
  return (
    <form className="space-y-4 md:space-y-6" action="#">
      <div>
        <input
          type="email"
          name="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
          placeholder="이메일"
          required
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="비밀번호"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
          required
        />
      </div>
      <button type="submit" className="user-button">
        로그인
      </button>
    </form>
  );
}
