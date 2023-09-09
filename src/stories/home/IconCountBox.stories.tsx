import IconCountBox from "@/components/home/iconCountBox";
import Bookmark from "@/components/logo/bookmark";
import ThumbUp from "@/components/logo/thumbUp";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "home/IconCountBox",
  component: IconCountBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof IconCountBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LikeCount: Story = {
  args: {
    icon: <ThumbUp />,
    count: 14,
  },
};

export const BookmarkCount: Story = {
  args: {
    icon: <Bookmark />,
    count: 14,
  },
};
