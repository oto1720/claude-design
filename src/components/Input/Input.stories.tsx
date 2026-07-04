import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./Input";

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    label: "Email",
    placeholder: "you@example.com",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithHint: Story = {
  args: {
    hint: "We'll never share your email.",
  },
};

export const Invalid: Story = {
  args: {
    invalid: true,
    hint: "Please enter a valid email address.",
    defaultValue: "not-an-email",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: "locked@example.com",
  },
};
