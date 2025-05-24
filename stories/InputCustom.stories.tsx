import { InputCustom } from "@/components/ui/input/InputCustom";
import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";
import { FormProvider } from "react-hook-form";

// 📌 기본 설정
const meta: Meta<typeof InputCustom> = {
  title: "Components/InputCustom",
  component: InputCustom,
  tags: ["autodocs"],
  args: {
    placeholder: "내용을 입력하세요",
  },
};

export default meta;
type Story = StoryObj<typeof InputCustom>;

export const Default: Story = {
  args: {
    label: "기본 입력",
  },
};

export const WithHint: Story = {
  args: {
    label: "이름",
    hint: "실명을 입력해주세요.",
  },
};

export const WithError: Story = {
  args: {
    label: "이메일",
    error: "올바른 이메일 형식이 아닙니다.",
  },
};

export const Required: Story = {
  args: {
    label: "비밀번호",
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "비활성화된 필드",
    disabled: true,
  },
};

const RHFInput = () => {
  const methods = useForm();
  const {
    register,
    formState: { errors },
  } = methods;

  return (
    <FormProvider {...methods}>
      <form>
        <InputCustom
          label="이메일"
          type="email"
          placeholder="example@domain.com"
          error={errors.email?.message as string}
          {...register("email", { required: "이메일은 필수입니다." })}
        />
      </form>
    </FormProvider>
  );
};

export const WithReactHookForm: Story = {
  render: () => <RHFInput />,
};
