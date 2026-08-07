import { cn } from '@/shared/utils/cn';
import type { LineHeightToken, TextAlign, TextSize, TextTone, TextWeight } from './types';

/**
 * Typography tokens → Tailwind classes.
 *
 * As with `buildBoxClasses`, every value is a complete literal: Tailwind
 * generates a utility only for class names its scanner can see whole.
 *
 * The size names are Tailwind's but the *values* are bravais's, set in
 * `tailwind.css` — `text-sm` is 0.75rem here, not Tailwind's 0.875rem. That is
 * what lets this migration change no pixels while every call site keeps reading
 * `size='sm'`. Four steps of the ramp have no name on either scale and use
 * arbitrary values, which is the capability a closed enum never had.
 */

const sizeMap: Record<TextSize, string> = {
    'xs': 'text-xs',
    'sm': 'text-sm',
    'md': 'text-md',
    'lg': 'text-lg',
    'xl': 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl'
};

const weightMap: Record<TextWeight, string> = {
    regular: 'font-normal',
    medium: 'font-medium',
    /* 550 sits between Tailwind's medium and semibold and has no name. */
    semibold: 'font-[550]',
    bold: 'font-semibold'
};

const toneMap: Record<TextTone, string> = {
    'primary': 'text-primary',
    'secondary': 'text-secondary',
    'tertiary': 'text-tertiary',
    'muted': 'text-muted',
    'muted-foreground': 'text-muted',
    'brand': 'text-brand',
    'success': 'text-success',
    'warning': 'text-warning',
    'danger': 'text-danger',
    'info': 'text-info'
};

const alignMap: Record<TextAlign, string> = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
};

const lineHeightMap: Record<LineHeightToken, string> = {
    '1': 'leading-none',
    '1-2': 'leading-[1.2]',
    '1-4': 'leading-[1.4]',
    '5': 'leading-normal'
};

interface TypographyClassOptions {
    size?: TextSize;
    weight?: TextWeight;
    tone?: TextTone;
    align?: TextAlign;
    truncate?: boolean;
    lineHeight?: LineHeightToken;
    className?: string;
}

export const buildTypographyClasses = ({
    size,
    weight,
    tone,
    align,
    truncate,
    lineHeight,
    className
}: TypographyClassOptions): string => cn(
    size ? sizeMap[size] : undefined,
    weight ? weightMap[weight] : undefined,
    tone ? toneMap[tone] : undefined,
    align ? alignMap[align] : undefined,
    truncate ? 'truncate' : undefined,
    lineHeight ? lineHeightMap[lineHeight] : undefined,
    className
);
