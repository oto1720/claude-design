import type { Meta, StoryObj } from "@storybook/react-vite";
import { Callout } from "./Callout";

const meta = {
  title: "Components/Callout",
  component: Callout,
  tags: ["autodocs"],
  args: {
    children: "出典：2025年 自社調査（n=420）",
  },
} satisfies Meta<typeof Callout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Note: Story = {
  args: { tone: "note", children: "注：数値は四半期末時点の実績です。" },
};

export const Emphasis: Story = {
  args: {
    tone: "emphasis",
    children: "重要：導入後3か月で解約率が半減しました。",
  },
};
