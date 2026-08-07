/**
 * Shared design tokens for Volt primitives.
 *
 * A token is a name for a design decision; `buildBoxClasses` and `typography`
 * translate each one into the Tailwind class that expresses it. Token names are
 * deliberately *not* class names — `direction='column'` emits `flex-col` — so the
 * vocabulary this library offers stays independent of the utility layer under it.
 *
 * The scale is closed on purpose, but it must be wide enough to be usable: an
 * audit of VOLT's app CSS found `display: inline-flex` written by hand 46 times,
 * the nowrap/ellipsis idiom over 100 times, and `color: var(--status-error)` 18
 * times, every one of them because no token reached it. Anything the scale cannot
 * name — an arbitrary pixel height, a one-off max-width — belongs in a Tailwind
 * arbitrary value at the call site, not in a per-component stylesheet.
 */

export type Display = 'flex' | 'inline-flex' | 'grid' | 'block' | 'none';

export type FlexDirection = 'row' | 'column' | 'row-reverse';

export type AlignItems = 'start' | 'center' | 'end';

export type JustifyContent = 'start' | 'center' | 'end' | 'between' | 'around';

export type GapToken =
    | '0' | '01' | '0125' | '02' | '025' | '035' | '0375' | '05' | '0625' | '075'
    | '1' | '1-5' | '2' | '3';

export type PaddingToken = '0' | '025' | '05' | '075' | '1' | '1-5' | '2' | '3';

/**
 * Asymmetric padding shares the symmetric scale. Panels and rows are padded
 * tighter vertically than horizontally far more often than not — it was the
 * single most common shape of hand-written padding in the consuming app — and a
 * scale that only offered `px='1'` sent every one of those to a stylesheet.
 */
export type PaddingXToken = PaddingToken;

export type PaddingYToken = PaddingToken;

export type MarginTopToken = '0' | '025' | '05' | '075' | '1' | '1-5' | '2' | '3';

export type MarginBottomToken = MarginTopToken;

export type MarginXToken = 'auto';

export type RadiusToken = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

/**
 * Surface fills, as tokens rather than as `background: var(--…)`.
 *
 * Eight values cover ~200 of the hand-written background declarations in the
 * consuming app: `transparent` and `hover` alone account for over half. An app
 * that has to write `background: var(--color-surface-2)` by hand also has to
 * remember which surface level a given depth calls for; a token makes that the
 * design system's answer.
 */
export type BackgroundToken =
    | 'transparent'
    | 'hover'
    | 'bg'
    | 'content'
    | 'surface-1' | 'surface-2' | 'surface-3'
    | 'glass' | 'glass-secondary'
    | 'overlay';

/**
 * Borders, per edge and per weight. `1px solid var(--color-border-soft)` and its
 * bottom-edge variant were the two most repeated declarations in the whole app
 * corpus (48 and 44 occurrences); `none` and `0` another 58 between them.
 */
export type BorderToken =
    | 'soft' | 'strong' | 'glass' | 'transparent' | 'none'
    | 'top-soft' | 'bottom-soft' | 'left-soft' | 'right-soft'
    | 'bottom-glass' | 'bottom-none';

export type PositionToken = 'relative' | 'sticky' | 'absolute' | 'fixed';

export type OverflowToken =
    | 'auto' | 'hidden'
    | 'x-auto' | 'x-scroll'
    | 'y-auto' | 'y-scroll';

export type WidthToken = 'max' | '50' | 'vw-max';

export type HeightToken = 'max' | 'vh-max';

/** `.mw-max` / `.mh-max` — the cap that lets a child shrink inside a flex parent. */
export type MaxWidthToken = 'max';

export type MaxHeightToken = 'max';

export type FlexToken = '1';

export type TransitionToken = 'fast' | 'normal';

/**
 * Typography tokens. These match `font-size-*` / `font-weight-*` / `color-*`
 * utilities declared in `general.css`.
 */
export type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

export type TextWeight = 'regular' | 'medium' | 'semibold' | 'bold';

/**
 * Text tone covers the neutral ramp *and* semantics, because a label reading
 * "Failed" in `--status-error` is typography, not a status widget, and it should
 * not need a stylesheet to say so. The names follow {@link StatusTone} so a tone
 * means the same thing on a `Text` as it does on a `Tag`.
 */
export type TextTone =
    | 'primary' | 'secondary' | 'tertiary' | 'muted' | 'muted-foreground'
    | 'brand' | 'success' | 'warning' | 'danger' | 'info';

export type TextAlign = 'left' | 'center' | 'right';

/** `.line-height-*` — the shipped set, all of it. */
export type LineHeightToken = '1' | '1-2' | '1-4' | '5';

export type SurfaceVariant =
    | 'primary'   // primary-surface
    | 'glass'     // glass-bg
    | 'elevated'  // card-elevated
    | 'danger'    // zone-danger
    | 'warning';  // zone-warning

/**
 * Canonical semantic tone shared by every status/feedback primitive
 * (Tag, StatusBadge, StatusDot, InlineStatus, IconFrame, Callout, StatCard, Timeline).
 * Maps 1:1 to the `--status-*` / accent tokens and the `.color-*` text utilities.
 */
export type StatusTone = 'neutral' | 'brand' | 'success' | 'warning' | 'danger' | 'info';

/** Canonical control size scale shared by interactive primitives. */
export type ControlSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/** Canonical shape vocabulary shared by button-like / chip-like primitives. */
export type Shape = 'rounded' | 'pill' | 'square' | 'circle';

/**
 * Resolves a {@link StatusTone} to the CSS custom properties that express it.
 * Single source of truth so primitives stop hardcoding per-tone colors.
 */
export const STATUS_TONE_VARS: Record<StatusTone, { fg: string; bg: string; border: string }> = {
    neutral: { fg: 'var(--color-text-secondary)', bg: 'var(--color-surface-2)', border: 'var(--color-border-soft)' },
    brand: { fg: 'var(--color-brand-primary)', bg: 'color-mix(in srgb, var(--color-brand-primary) 12%, transparent)', border: 'color-mix(in srgb, var(--color-brand-primary) 24%, transparent)' },
    success: { fg: 'var(--status-success)', bg: 'var(--status-success-bg)', border: 'var(--status-success-border)' },
    warning: { fg: 'var(--status-warning)', bg: 'var(--status-warning-bg)', border: 'var(--status-warning-border)' },
    danger: { fg: 'var(--status-error)', bg: 'var(--status-error-bg)', border: 'var(--status-error-border)' },
    info: { fg: 'var(--status-info)', bg: 'var(--status-info-bg)', border: 'var(--status-info-border)' }
};
