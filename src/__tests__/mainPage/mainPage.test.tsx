import Home from "@/app/page";
import CardView from "@/components/home/cardView";
import MainPage from "@/components/home/mainPage";
import { render, screen } from "@testing-library/react";

const imgId = 190;
describe("메인 화면", () => {
  it("카드 뷰", () => {
    const { getByText } = render(<CardView imgId={imgId} />);
    expect(getByText("This is..")).toBeInTheDocument();
  });

  /* 카드 뷰가 제대로 렌더링이 되는지 */
  it("카드 뷰의 개수 ", () => {
    render(<MainPage />);
    const cardViews = screen.getAllByRole("link");

    expect(cardViews.length).toBe(50);
  });
});

export {};
