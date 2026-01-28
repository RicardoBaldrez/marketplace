import { tv, type VariantProps } from "tailwind-variants";

export const inputVariants = tv({
  slots: {
    container: 'w-full my-4',
    wrapper: 'flex-row items-center border-b border-gray-200 pyb5',
    input: 'bg-transparent text-gray-500 text-base flex-1',
    label: 'text-xs text-gray-300 mb-1 font-semibold',
    error: 'text-sm text-danger mt-1'
  },
  variants: {
    isFocuses: {
      true: {}
    },
    isError: {
      true: {}
    },
    isDisabled: {
      true: {}
    },
  },
  defaultVariants: {
    isFocuses: false,
    isError: false,
    isDisabled: false,
  },
});