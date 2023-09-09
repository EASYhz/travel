import MainPage from "@/components/home/mainPage";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "home/MainPage",
  component: MainPage,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {};
