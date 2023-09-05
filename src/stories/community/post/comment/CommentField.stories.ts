import CommentField from "@/components/community/post/comment/commentField";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "post/comment/CommentField",
  component: CommentField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CommentField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 댓글: Story = {};
