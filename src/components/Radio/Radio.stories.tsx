import type { Meta, StoryObj } from "@storybook/react-vite";
import { Radio } from "./Radio";

const meta = {
  title: "Components/Radio",
  component: Radio,
  tags: ["autodocs"],
  args: {
    name: "plan",
    children: "スタンダード",
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unselected: Story = {};
export const Selected: Story = { args: { defaultChecked: true } };
export const Disabled: Story = { args: { disabled: true } };

export const Group: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 12 }}>
      <Radio name="plan" defaultChecked>
        ベーシック
      </Radio>
      <Radio name="plan">スタンダード</Radio>
      <Radio name="plan">プレミアム</Radio>
    </div>
  ),
};
