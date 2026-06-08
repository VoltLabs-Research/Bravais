/**
 * bravais — public API.
 *
 * The curated, stable entrypoint consumers (VOLT, Console, Registry) import from.
 * Excludes app-level wrappers that depend on the host app's error/toast system
 * (AsyncMenuItemWrapper, ContextMenuPopover); compose Popover + PopoverMenu with
 * your own async/error handling instead.
 */

/* ── Foundation (tokens-as-types + style-prop → utility-class mappers) ─────── */
export * from '@/shared/presentation/primitives/types';
export * from '@/shared/presentation/primitives/buildBoxClasses';
export * from '@/shared/presentation/primitives/typography';

/* ── Layout ────────────────────────────────────────────────────────────────*/
export { default as Box } from '@/shared/presentation/primitives/Box';
export * from '@/shared/presentation/primitives/Box';
export { default as Stack } from '@/shared/presentation/primitives/Stack';
export * from '@/shared/presentation/primitives/Stack';
export { default as Row } from '@/shared/presentation/primitives/Row';
export * from '@/shared/presentation/primitives/Row';
export { default as Grid } from '@/shared/presentation/primitives/Grid';
export * from '@/shared/presentation/primitives/Grid';
export { default as Surface } from '@/shared/presentation/primitives/Surface';
export * from '@/shared/presentation/primitives/Surface';
export { default as Divider } from '@/shared/presentation/primitives/Divider';
export * from '@/shared/presentation/primitives/Divider';

/* ── Typography ──────────────────────────────────────────────────────────── */
export { default as Text } from '@/shared/presentation/primitives/Text';
export * from '@/shared/presentation/primitives/Text';
export { default as Heading } from '@/shared/presentation/primitives/Heading';
export * from '@/shared/presentation/primitives/Heading';
export { default as SectionLabel } from '@/shared/presentation/primitives/SectionLabel';
export * from '@/shared/presentation/primitives/SectionLabel';

/* ── Actions / controls ──────────────────────────────────────────────────── */
export { default as Button } from '@/shared/presentation/primitives/Button';
export * from '@/shared/presentation/primitives/Button';
export { default as IconButton } from '@/shared/presentation/primitives/IconButton';
export * from '@/shared/presentation/primitives/IconButton';
export { default as CloseButton } from '@/shared/presentation/primitives/CloseButton';
export * from '@/shared/presentation/primitives/CloseButton';
export { default as Select } from '@/shared/presentation/primitives/Select';
export * from '@/shared/presentation/primitives/Select';
export { default as SegmentedTabs } from '@/shared/presentation/primitives/SegmentedTabs';
export * from '@/shared/presentation/primitives/SegmentedTabs';
export { default as Slider } from '@/shared/presentation/primitives/Slider';
export * from '@/shared/presentation/primitives/Slider';
export { default as LiquidToggle } from '@/shared/presentation/primitives/LiquidToggle';
export * from '@/shared/presentation/primitives/LiquidToggle';
export { default as Stepper } from '@/shared/presentation/primitives/Stepper';
export * from '@/shared/presentation/primitives/Stepper';

/* ── Form inputs ─────────────────────────────────────────────────────────── */
export { default as TextInput } from '@/shared/presentation/primitives/TextInput';
export * from '@/shared/presentation/primitives/TextInput';
export { default as Textarea } from '@/shared/presentation/primitives/Textarea';
export * from '@/shared/presentation/primitives/Textarea';
export { default as NumberInput } from '@/shared/presentation/primitives/NumberInput';
export * from '@/shared/presentation/primitives/NumberInput';
export { default as SearchInput } from '@/shared/presentation/primitives/SearchInput';
export * from '@/shared/presentation/primitives/SearchInput';
export { default as FormField } from '@/shared/presentation/primitives/FormField';
export * from '@/shared/presentation/primitives/FormField';
export { default as Checkbox } from '@/shared/presentation/primitives/Checkbox';
export * from '@/shared/presentation/primitives/Checkbox';
export { default as Radio } from '@/shared/presentation/primitives/Radio';
export * from '@/shared/presentation/primitives/Radio';

/* ── Navigation / disclosure ─────────────────────────────────────────────── */
export { default as Tabs } from '@/shared/presentation/primitives/Tabs';
export * from '@/shared/presentation/primitives/Tabs';
export { default as Breadcrumbs } from '@/shared/presentation/primitives/Breadcrumbs';
export * from '@/shared/presentation/primitives/Breadcrumbs';
export { default as CollapsibleSection } from '@/shared/presentation/primitives/CollapsibleSection';
export * from '@/shared/presentation/primitives/CollapsibleSection';

/* ── Overlays / floating ─────────────────────────────────────────────────── */
export { default as Modal } from '@/shared/presentation/primitives/Modal';
export * from '@/shared/presentation/primitives/Modal';
export { default as Popover } from '@/shared/presentation/primitives/Popover';
export * from '@/shared/presentation/primitives/Popover';
export { default as PopoverMenu } from '@/shared/presentation/primitives/PopoverMenu';
export * from '@/shared/presentation/primitives/PopoverMenu';
export { default as PopoverMenuItem } from '@/shared/presentation/primitives/PopoverMenuItem';
export * from '@/shared/presentation/primitives/PopoverMenuItem';
export { default as Menu } from '@/shared/presentation/primitives/Menu';
export * from '@/shared/presentation/primitives/Menu';
export { default as Tooltip } from '@/shared/presentation/primitives/Tooltip';
export * from '@/shared/presentation/primitives/Tooltip';
export { default as CursorTooltip } from '@/shared/presentation/primitives/CursorTooltip';
export * from '@/shared/presentation/primitives/CursorTooltip';
export { default as FloatingToolbar } from '@/shared/presentation/primitives/FloatingToolbar';
export * from '@/shared/presentation/primitives/FloatingToolbar';

/* ── Data display ────────────────────────────────────────────────────────── */
export { default as Tag } from '@/shared/presentation/primitives/Tag';
export * from '@/shared/presentation/primitives/Tag';
export { default as StatusBadge } from '@/shared/presentation/primitives/StatusBadge';
export * from '@/shared/presentation/primitives/StatusBadge';
export { default as StatusDot } from '@/shared/presentation/primitives/StatusDot';
export * from '@/shared/presentation/primitives/StatusDot';
export { default as InlineStatus } from '@/shared/presentation/primitives/InlineStatus';
export * from '@/shared/presentation/primitives/InlineStatus';
export { default as SaveStatusIndicator } from '@/shared/presentation/primitives/SaveStatusIndicator';
export * from '@/shared/presentation/primitives/SaveStatusIndicator';
export { default as Avatar } from '@/shared/presentation/primitives/Avatar';
export * from '@/shared/presentation/primitives/Avatar';
export { default as AvatarStack } from '@/shared/presentation/primitives/AvatarStack';
export * from '@/shared/presentation/primitives/AvatarStack';
export { default as IconFrame } from '@/shared/presentation/primitives/IconFrame';
export * from '@/shared/presentation/primitives/IconFrame';
export { default as Card } from '@/shared/presentation/primitives/Card';
export * from '@/shared/presentation/primitives/Card';
export { default as StatCard } from '@/shared/presentation/primitives/StatCard';
export * from '@/shared/presentation/primitives/StatCard';
export { default as SelectableCard } from '@/shared/presentation/primitives/SelectableCard';
export * from '@/shared/presentation/primitives/SelectableCard';
export { default as DashedActionBox } from '@/shared/presentation/primitives/DashedActionBox';
export * from '@/shared/presentation/primitives/DashedActionBox';
export { default as KeyValueList } from '@/shared/presentation/primitives/KeyValueList';
export * from '@/shared/presentation/primitives/KeyValueList';
export { default as ListRow } from '@/shared/presentation/primitives/ListRow';
export * from '@/shared/presentation/primitives/ListRow';
export { default as Table } from '@/shared/presentation/primitives/Table';
export * from '@/shared/presentation/primitives/Table';
export { default as Timeline } from '@/shared/presentation/primitives/Timeline';
export * from '@/shared/presentation/primitives/Timeline';
export { default as Sparkline } from '@/shared/presentation/primitives/Sparkline';
export * from '@/shared/presentation/primitives/Sparkline';
export { default as Callout } from '@/shared/presentation/primitives/Callout';
export * from '@/shared/presentation/primitives/Callout';
export { default as EmptyState } from '@/shared/presentation/primitives/EmptyState';
export * from '@/shared/presentation/primitives/EmptyState';
export { default as Toast } from '@/shared/presentation/primitives/Toast';
export * from '@/shared/presentation/primitives/Toast';

/* ── Feedback / progress ─────────────────────────────────────────────────── */
export { default as Loader } from '@/shared/presentation/primitives/Loader';
export * from '@/shared/presentation/primitives/Loader';
export { default as Skeleton } from '@/shared/presentation/primitives/Skeleton';
export * from '@/shared/presentation/primitives/Skeleton';
export { default as ThinkingDots } from '@/shared/presentation/primitives/ThinkingDots';
export * from '@/shared/presentation/primitives/ThinkingDots';
export { default as ProgressBar } from '@/shared/presentation/primitives/ProgressBar';
export * from '@/shared/presentation/primitives/ProgressBar';
export { default as Meter } from '@/shared/presentation/primitives/Meter';
export * from '@/shared/presentation/primitives/Meter';
export { default as AsyncBoundary } from '@/shared/presentation/primitives/AsyncBoundary';
export * from '@/shared/presentation/primitives/AsyncBoundary';

/* ── Utilities ───────────────────────────────────────────────────────────── */
export { default as VisuallyHidden } from '@/shared/presentation/primitives/VisuallyHidden';
export * from '@/shared/presentation/primitives/VisuallyHidden';

/* ── Hooks ───────────────────────────────────────────────────────────────── */
export { default as useMedia } from '@/shared/presentation/hooks/use-media';
export { usePrefersReducedMotion } from '@/shared/presentation/hooks/use-prefers-reduced-motion';
export { default as useStepper } from '@/shared/presentation/hooks/use-stepper';
export { default as useInfiniteScroll } from '@/shared/presentation/hooks/use-infinite-scroll';
export { default as useKeyboardShortcut } from '@/shared/presentation/hooks/use-keyboard-shortcut';
