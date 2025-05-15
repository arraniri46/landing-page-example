import type { Metadata } from 'next'
import './globals.css'
import CustomNavbar from '@/components/layouts/navbar'
import { Providers } from './providers'

export const metadata: Metadata = {
    title: 'NextJS Starter Kit',
    description: 'This is a NextJS starter kit',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body>
                <Providers>
                    <CustomNavbar />

                    {children}
                </Providers>
            </body>
        </html>
    )
}
