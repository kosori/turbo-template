import type { VariantProps } from 'tailwind-variants';
import { forwardRef } from 'react';
import { tv } from 'tailwind-variants';

import { cn } from '../';

export const buttonStyles = tv({
  base: cn(
    'flex h-fit w-fit items-center justify-center font-semibold outline-none transition-colors duration-200',
    'focus-visible:ring-4',
    'disabled:cursor-not-allowed',
  ),
  variants: {
    variant: {
      default: '',
      danger: '',
    },
    intent: {
      solid: '',
      soft: '',
      outline: '',
      ghost: '',
    },
    size: {
      small: cn(
        'h-8 gap-x-1.5 rounded-lg px-2.5 text-xs leading-4',
        '[&_svg]:h-3.5 [&_svg]:w-3.5',
      ),
      medium: cn(
        'h-9 gap-x-2 rounded-lg px-3 text-sm',
        '[&_svg]:h-[18px] [&_svg]:w-[18px]',
      ),
      large: cn(
        'text-md h-10 gap-x-2.5 rounded-xl px-4',
        '[&_svg]:h-5 [&_svg]:w-5',
      ),
    },
    icon: {
      true: '',
    },
  },
  compoundVariants: [
    {
      variant: 'default',
      intent: 'solid',
      class: cn(
        'bg-primarySolid text-greyBase',
        'hover:bg-primarySolidHover',
        'focus-visible:ring-primaryFocusRing',
        'disabled:bg-primaryBorder',
      ),
    },
    {
      variant: 'default',
      intent: 'soft',
      class: cn(
        'border border-primaryBorder bg-primaryBg text-primarySolid',
        'hover:border-primaryBorderHover hover:bg-primaryBgHover',
        'active:bg-primaryBgActive',
        'focus-visible:ring-primaryFocusRing',
        'disabled:border-primaryLine disabled:bg-primaryBgSubtle disabled:text-primaryLine',
      ),
    },
    {
      variant: 'default',
      intent: 'outline',
      class: cn(
        'border border-greyBorder bg-greyBase text-greyTextContrast',
        'hover:border-greyBorderHover hover:bg-greyBgSubtle',
        'active:bg-greyBg',
        'focus-visible:ring-greyFocusRing',
        'disabled:border-greyLine disabled:bg-greyBase disabled:text-greySolid',
      ),
    },
    {
      variant: 'default',
      intent: 'ghost',
      class: cn(
        'text-greyTextContrast',
        'hover:bg-greyBgHover',
        'active:bg-greyBgActive',
        'focus-visible:ring-greyFocusRing',
        'disabled:bg-transparent disabled:text-greySolid',
      ),
    },
    {
      variant: 'danger',
      intent: 'solid',
      class: cn(
        'bg-dangerSolid text-white',
        'hover:bg-dangerSolidHover',
        'focus-visible:ring-dangerFocusRing',
        'disabled:bg-dangerBorder',
      ),
    },
    {
      variant: 'danger',
      intent: 'soft',
      class: cn(
        'border border-dangerBorder bg-dangerBg text-dangerSolid',
        'hover:border-dangerBorderHover hover:bg-dangerBgHover',
        'active:bg-dangerBgActive',
        'focus-visible:ring-dangerFocusRing',
        'disabled:border-dangerLine disabled:bg-dangerBgSubtle disabled:text-dangerLine',
      ),
    },
    {
      variant: 'danger',
      intent: 'outline',
      class: cn(
        'border border-dangerBorder bg-dangerBase text-dangerSolid',
        'hover:border-dangerBorderHover hover:bg-dangerBgSubtle',
        'active:bg-dangerBg',
        'focus-visible:ring-dangerFocusRing',
        'disabled:border-dangerLine disabled:bg-dangerBase disabled:text-dangerLine',
      ),
    },
    {
      variant: 'danger',
      intent: 'ghost',
      class: cn(
        'text-dangerSolid',
        'hover:bg-dangerBg',
        'active:bg-dangerBgHover',
        'focus-visible:ring-dangerFocusRing',
        'disabled:bg-transparent disabled:text-dangerLine',
      ),
    },
    {
      size: 'small',
      icon: true,
      class: 'w-8 px-0',
    },
    {
      size: 'medium',
      icon: true,
      class: 'w-9 px-0',
    },
    {
      size: 'large',
      icon: true,
      class: 'w-10 px-0',
    },
  ],
  defaultVariants: {
    variant: 'default',
    intent: 'solid',
    size: 'medium',
  },
});

type ButtonProps = React.ComponentPropsWithoutRef<'button'>;
type ButtonVariants = VariantProps<typeof buttonStyles>;
export type Props = {
  /** Change the visual style of the Button */
  variant?: ButtonVariants['variant'];
  /** Change the visual style of the Button */
  intent?: ButtonVariants['intent'];
  /** Change the visual style of the Button */
  icon?: ButtonVariants['icon'];
  /** Change the size of the Button */
  size?: ButtonVariants['size'];
} & ButtonProps;

/**
 * Displays a button or a component that looks like a button.
 * @param {string} [intent='primary'] - Change the visul style of the Button.
 * @param {string} [size='medium'] - Change the size of the BUtton.
 * @see {@link https://dub.sh/XuNhEXJ Button Docs} for further information.
 */
export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ variant, intent, size, icon, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonStyles({
          variant,
          intent,
          size,
          icon,
          class: className,
        })}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';
