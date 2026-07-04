import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "./Select";

const meta = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  args: {
    label: "プラン",
  },
  render: (args) => (
    <Select {...args}>
      <option value="basic">ベーシック</option>
      <option value="standard">スタンダード</option>
      <option value="premium">プレミアム</option>
    </Select>
  ),
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithHint: Story = {
  args: { hint: "後から変更できます。" },
};

export const Invalid: Story = {
  args: { invalid: true, hint: "選択してください。" },
};

export const Disabled: Story = {
  args: { disabled: true },
};
