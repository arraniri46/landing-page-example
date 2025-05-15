'use client'

import { HeroUIProvider, ToastProvider } from '@heroui/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <HeroUIProvider locale='en-ID'>
            <NextThemesProvider attribute='class' defaultTheme='light' disableTransitionOnChange>
                <ToastProvider
                    toastProps={{
                        variant: 'flat',
                        radius: 'md',
                        timeout: 2000,
                    }}
                />

                {children}
            </NextThemesProvider>
        </HeroUIProvider>
    )
}
