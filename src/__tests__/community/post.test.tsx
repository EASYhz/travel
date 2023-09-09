import Post from "@/app/community/post/[id]/page";
import CommentField from "@/components/community/post/comment/commentField";
import { render, screen } from "@testing-library/react";

/* 게시글 화면 */
describe("글 부분 ", () => {
  it("제목", () => {
    render(<Post params={{ id: 190 }} />);
    expect(screen.getByText("글 제목임")).toBeInTheDocument();
  });
});

describe("댓글 부분 ", () => {
  it("댓글", () => {
    render(<CommentField />);
    expect(screen.getByText("댓글 (6)")).toBeInTheDocument();
  });
});
export {};
