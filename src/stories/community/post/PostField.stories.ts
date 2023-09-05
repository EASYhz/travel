import PostField from "@/components/community/post/postField";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "post/PostField",
  component: PostField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PostField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 글: Story = {
  args: {
    params: {
      id: 188,
    },
  },
};
