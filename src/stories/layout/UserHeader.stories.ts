import UserHeader from "@/components/layout/userHeader";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "layout/UserHeader",
  component: UserHeader,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof UserHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 로그인상태: Story = {
  args: {
    user: {
      name: "Alex",
      token: "1234",
    },
  },
};

export const 로그아웃상태: Story = {};
