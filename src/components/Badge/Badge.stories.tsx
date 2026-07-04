import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./Badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  args: {
    children: "Active",
  },
  argTypes: {
    tone: {
      control: "select",
      options: ["neutral", "accent", "navy"],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Neutral: Story = { args: { tone: "neutral", children: "Draft" } };
export const Accent: Story = { args: { tone: "accent", children: "New" } };
export const Navy: Story = { args: { tone: "navy", children: "Official" } };

export const AllTones: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8 }}>
      <Badge tone="neutral">Draft</Badge>
      <Badge tone="accent">New</Badge>
      <Badge tone="navy">Official</Badge>
    </div>
  ),
};
