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

export const OneCardView: Story = {
  args: {
    post: {
      id: "1",
      title: "Test",
      detail: "Storybook Test",
      user: "Alex",
      imgId: 188,
      regDt: "23.08.08 17:23",
    },
  },
};
