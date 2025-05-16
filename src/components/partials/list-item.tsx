import { cn } from '@heroui/theme'
import Link from 'next/link'
import { ReactNode } from 'react'

type Props = {
    labelClassName?: string
    valueClassName?: string
    label?: ReactNode
    value?: ReactNode
    bordered?: boolean
    colon?: boolean
    className?: string
    isPrintCard?: boolean
    isLink?: boolean
    isWrap?: boolean
}
export default function ListItem({
    label,
    labelClassName,
    value,
    valueClassName,
    bordered = false,
    colon = true,
    className,
    isPrintCard = false,
    isLink = false,
    isWrap = false,
}: Props) {
    return (
        <div
            className={cn(
                'font-body flex w-full gap-2',
                {
                    'apply-dark border-b border-zinc-300 pb-2': bordered,
                    'w-full flex-col md:items-start lg:flex-row': typeof value === 'object',
                    'lg:flex-col': isWrap && typeof value === 'object',
                },
                className,
            )}
        >
            <span
                className={cn('max-w-32 flex-1 text-sm font-medium sm:max-w-64', labelClassName, {
                    'sm:max-w-28': isPrintCard,
                })}
            >
                {label}
            </span>

            <div
                className={cn('flex w-full flex-1 gap-2', {
                    'md:items-start': typeof value === 'object',
                })}
            >
                {colon && typeof value !== 'object' && <span className='text-sm'>:</span>}

                <div className='flex w-full gap-2'>
                    {typeof value === 'object' && !isWrap && <span className='hidden text-sm lg:inline'>:</span>}

                    {isLink ? (
                        <Link
                            className={cn('w-full text-sm text-blue-400 underline', valueClassName)}
                            href={`${process.env.NEXT_PUBLIC_SERVER_LOCAL_URL}${value}`}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            {`Attachment`}
                        </Link>
                    ) : (
                        <span
                            className={cn('w-full text-sm', valueClassName)}
                            // dangerouslySetInnerHTML={{ __html: (value as TrustedHTML) || '-' }}
                        >
                            {value ?? '-'}
                        </span>
                    )}
                </div>
            </div>
        </div>
    )
}
