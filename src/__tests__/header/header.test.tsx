import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import UserHeader from "@/components/layout/userHeader";
import MainHeader from "@/components/layout/mainHeader";
import React from "react";

describe("유저 헤더", () => {
  it("비로그인 상태 ", () => {
    const { getByText } = render(<UserHeader />);
    const text = getByText("로그인");
    expect(text).toBeInTheDocument();
  });

  // it("로그인 상태 ", () => {
  //   const { getByText } = render(<UserHeader />);
  //   const text = getByText("마이페이지");
  //   expect(text).toBeInTheDocument();
  // });
});

describe("메인 헤더", () => {
  it("로고", () => {
    const { getByText } = render(<MainHeader />);
    const text = getByText("Title");
    expect(text).toBeInTheDocument();
  });
  it("메뉴 - home", () => {
    const { getByText } = render(<MainHeader />);
    const text = getByText("Home");
    expect(text).toBeInTheDocument();
  });
  it("메뉴 - about", () => {
    const { getByText } = render(<MainHeader />);
    const text = getByText("About");
    expect(text).toBeInTheDocument();
  });
});

export {};
