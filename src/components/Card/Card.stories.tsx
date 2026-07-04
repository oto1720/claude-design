import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "./Card";
import { Button } from "../Button/Button";
import { Badge } from "../Badge/Badge";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  args: {
    title: "スタンダードプラン",
    children: "中小チーム向けの標準機能を、月額でご利用いただけます。",
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithFooter: Story = {
  args: {
    footer: (
      <>
        <Button variant="primary">申し込む</Button>
        <Button variant="secondary">詳細</Button>
      </>
    ),
  },
};

export const WithBadge: Story = {
  args: {
    title: (
      <span style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
        プレミアム <Badge tone="accent">おすすめ</Badge>
      </span>
    ),
    children: "大規模チーム向けの全機能と優先サポート。",
  },
};
