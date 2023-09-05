import MainPage from "@/components/home/mainPage";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "home/MainPage",
  component: MainPage,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 메인페이지: Story = {};
