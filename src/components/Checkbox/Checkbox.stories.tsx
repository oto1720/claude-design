import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "./Checkbox";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  args: {
    children: "利用規約に同意する",
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {};
export const Checked: Story = { args: { defaultChecked: true } };
export const Disabled: Story = { args: { disabled: true } };

export const Group: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 12 }}>
      <Checkbox defaultChecked>メール通知を受け取る</Checkbox>
      <Checkbox>SMS通知を受け取る</Checkbox>
      <Checkbox disabled>アプリ通知（準備中）</Checkbox>
    </div>
  ),
};
