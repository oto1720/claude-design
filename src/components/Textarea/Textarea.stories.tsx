import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "./Textarea";

const meta = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  args: {
    label: "メッセージ",
    placeholder: "ご要望をご記入ください",
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithHint: Story = {
  args: { hint: "500文字以内でお願いします。" },
};

export const Invalid: Story = {
  args: { invalid: true, hint: "必須項目です。", defaultValue: "" },
};

export const Disabled: Story = {
  args: { disabled: true, defaultValue: "編集できません" },
};
