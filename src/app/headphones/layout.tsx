import Footer from '@/components/Footer'
import Header from '@/components/Header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Audiophile Headphones',
    description: 'All in one stop to fulfill your Headphone needs',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
        </>
    )
}
