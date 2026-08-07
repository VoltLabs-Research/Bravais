import './Loader.css';
import { forwardRef, useId } from 'react';

interface LoaderProps {
    scale: number;
    isFixed?: boolean;
    fillParent?: boolean;
    className?: string;
    label?: string;
    announce?: boolean;
    reducedMotionLabel?: string;
};

const Loader = forwardRef<HTMLDivElement, LoaderProps>(({
    scale,
    isFixed = true,
    fillParent = false,
    className = '',
    label,
    announce = false,
    reducedMotionLabel = 'Loading'
}, ref) => {
    const loaderItems = Array.from({ length: 12 }, (_, index) => index + 1);
    const statusId = useId();
    const statusLabel = label ?? 'Loading';

    let accessibilityProps = {};
    if (announce) {
        accessibilityProps = {
            role: 'status',
            'aria-live': 'polite',
            'aria-atomic': true,
            'aria-label': label ? undefined : statusLabel,
            'aria-labelledby': label ? statusId : undefined
        };
    }

    const positioningClass = fillParent
        ? 'loader-fill-parent'
        : isFixed
            ? 'fixed inset-0'
            : '';

    return (
        <div ref={ref} className={`flex items-center justify-center ${positioningClass} ${className}`} {...accessibilityProps}>
            <div className='flex flex-col items-center gap-8 loader-content'>
                <div className='relative loader-visual' style={{ transform: `scale(${scale})` }}>
                    {loaderItems.map((item) => (
                        <div key={item} className={`absolute Loader-Item Loader-Item-${item}`} />
                    ))}
                </div>

                {label && (
                    <span id={statusId} className='loader-label text-md text-secondary text-center leading-normal'>
                        {label}
                    </span>
                )}
                <span className='loader-reduced-motion-label'>
                    {reducedMotionLabel}
                </span>
            </div>
        </div>
    );
});

Loader.displayName = 'Loader';

export default Loader;
