import CommentForm from "@/components/community/post/comment/commentForm";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "post/comment/CommentForm",
  component: CommentForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CommentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 댓글쓰는칸: Story = {};
