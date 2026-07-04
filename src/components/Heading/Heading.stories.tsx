import type { Meta, StoryObj } from "@storybook/react-vite";
import { Heading } from "./Heading";

const meta = {
  title: "Components/Heading",
  component: Heading,
  tags: ["autodocs"],
  args: {
    children: "誠実で、余白のある提案",
    level: 1,
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Title: Story = {};

export const Numbered: Story = {
  args: { number: 1, children: "課題の整理" },
};

export const Subheading: Story = {
  args: { level: 2, children: "背景と前提" },
};

export const Stacked: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 32 }}>
      <Heading number={1}>市場の状況</Heading>
      <Heading number={2}>私たちの提案</Heading>
      <Heading level={2}>補足資料</Heading>
    </div>
  ),
};
