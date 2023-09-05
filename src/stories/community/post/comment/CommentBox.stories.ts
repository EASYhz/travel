import CommentBox from "@/components/community/post/comment/commentBox";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "post/comment/CommentBox",
  component: CommentBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CommentBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 댓글컴포넌트: Story = {
  args: {
    comment: {
      id: "1",
      content: "This is Comment",
      user: "Alex",
      regDt: "2023.08.08",
      isReply: false,
    },
  },
};

// export const 댓글_답글: Story = {
//   args: {
//     comment: {
//       id: "2",
//       content: "This is Comment",
//       user: "Alex",
//       regDt: "2023.08.08",
//       isReply: true,
//       head: "1",
//     },
//   },
// };
