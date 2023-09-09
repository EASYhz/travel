import CardView from "@/components/home/cardView";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "home/CardView",
  component: CardView,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainCardView: Story = {
  args: {
    post: {
      id: "1",
      title: "Test",
      detail:
        "진짜 여기 굉장함 내가 보려고 쓰는 글임쓰는 글임쓰는 글임쓰는 글임쓰는 글임쓰는 글임쓰는 글임쓰는 글임쓰는 글임쓰는 글임쓰는 글임쓰는 글임쓰는 글임쓰는 글임쓰는 글임쓰는 글임쓰는 글임쓰는 글임쓰는 글임쓰는 글임쓰는 글임쓰는 글임쓰는 글임쓰는 글임쓰는 글임쓰는 글임쓰는 글임쓰는 글임",
      user: "Alex",
      imgId: 188,
      regDt: "23.08.08 17:23",
    },
    size: "medium",
  },
};

export const SmallCardView: Story = {
  args: {
    post: {
      id: "1",
      title: "Test",
      detail:
        "진짜 여기 굉장함 내가 보려고 쓰는 글임쓰는 글임쓰는 글임쓰는 글임쓰는 글임쓰는 글임쓰는 글임쓰는 글임쓰는 글임쓰는 글임쓰는 글임쓰는 글임쓰는 글임쓰는 글임쓰는 글임쓰는 글임쓰는 글임쓰는 글임쓰는 글임쓰는 글임쓰는 글임쓰는 글임쓰는 글임쓰는 글임쓰는 글임쓰는 글임쓰는 글임쓰는 글임",
      user: "Alex",
      imgId: 188,
      regDt: "23.08.08 17:23",
    },
    size: "small",
  },
};
