import { cn } from '@/shared/utils/cn';
import { getInitialsFromUser } from '@/shared/utils/user';
import StatusDot from '../StatusDot';
import './Avatar.css';
import { forwardRef } from 'react';
import type { ReactNode } from 'react';

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg';

/** Minimal user-like shape the Avatar renders from. Local to the primitive so
 *  the design system carries no domain (auth) coupling; a domain `User` is
 *  structurally assignable. */
export interface AvatarUser {
    firstName?: string | null;
    lastName?: string | null;
    email?: string | null;
    avatar?: string | null;
}

interface AvatarProps {
    src?: string | null;
    alt?: string;
    fallback?: string;
    user?: AvatarUser | null;
    size?: AvatarSize;
    className?: string;
    isOnline?: boolean;
    showStatus?: boolean;
    icon?: ReactNode;
};

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(({
    src,
    alt,
    fallback,
    user,
    size = 'md',
    className = '',
    isOnline = false,
    showStatus = false,
    icon
}, ref) => {
    const imageSrc = src ?? user?.avatar;
    const initials = fallback ?? (user ? getInitialsFromUser(user) : '?');
    const altText = alt ?? (user ? `${user.firstName ?? ''} ${user.lastName ?? ''}`.trim() : 'Avatar');

    return (
        <div ref={ref} className={`${cn('avatar', `avatar-${size}`, 'd-flex flex-center radius-full overflow-hidden f-shrink-0 p-relative', className)}`}>
            {icon ? (
                <div className='avatar-icon d-flex flex-center'>
                    {icon}
                </div>
            ) : imageSrc ? (
                <img src={imageSrc} alt={altText} className='w-max h-max avatar-image' />
            ) : (
                <p className='avatar-initials font-weight-6'>
                    {initials}
                </p>
            )}
            {showStatus && (
                <StatusDot tone={isOnline ? 'success' : 'neutral'} className='avatar-status p-absolute bottom-0 right-0' />
            )}
        </div>
    );
});

Avatar.displayName = 'Avatar';

export default Avatar;
