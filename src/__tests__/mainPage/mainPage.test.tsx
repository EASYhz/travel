import Home from "@/app/page";
import CardView from "@/components/home/cardView";
import MainPage from "@/components/home/mainPage";
import { render, screen } from "@testing-library/react";

const imgId = 190;
const DUMMY = {
  post: {
    id: "1",
    title: "Test",
    detail: "This is..",
    user: "Alex",
    imgId: 188,
    regDt: "23.08.08 17:23",
  },
  size: "small",
};
describe("메인 화면", () => {
  it("카드 뷰", () => {
    const { getByText } = render(<CardView post={DUMMY.post} size="medium" />);
    expect(getByText("Test")).toBeInTheDocument();
  });

  /* 카드 뷰가 제대로 렌더링이 되는지 */
  // it("카드 뷰의 개수 ", () => {
  //   render(<MainPage />);
  //   const cardViews = screen.getAllByRole("link");

  //   expect(cardViews.length).toBe(50);
  // });
});

export {};
