'use client'

import FadeInWhenVisible from '@/components/partials/framer-motion/fade-in-when-visible'
import { Button, cn } from '@heroui/react'
import { University } from 'lucide-react'

const services = [
    {
        title: 'Kunjungan Digital Learning Center',
        description: 'Pengajukan permohonan untuk melakukan kunjungan ke Digital Learning Centre Building.',
    },
    {
        title: 'Peminjaman Ruangan',
        description:
            'Peminjaman ruangan untuk memaksimalkan pengalaman belajar dengan teknologi interaktif dan fitur-fitur canggih.',
    },
    {
        title: 'Kunjungan Digital Learning Center',
        description: 'Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices',
    },
    {
        title: 'Kunjungan Digital Learning Center',
        description: 'Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices',
    },
]

export default function Home() {
    return (
        <main className=''>
            {/* hero section */}
            <header className='relative flex h-screen w-full items-center justify-center overflow-hidden'>
                {/* glob */}
                <div className='absolute -right-12 -top-12 z-30 h-[28rem] w-[28rem]'></div>

                <div className='absolute -bottom-12 -left-12 z-30 h-[28rem] w-[28rem]'></div>

                {/* glob */}
                <div className='animate-moveVertical bg-radial-blue absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 opacity-100 mix-blend-hard-light'></div>

                <div className='animate-moveInCircleReverse bg-radial-purple absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 opacity-100 mix-blend-hard-light [transform-origin:calc(50%-300px)]'></div>

                <div className='animate-moveInCircleSlow bg-radial-cyan absolute h-[80%] w-[80%] opacity-100 mix-blend-hard-light [left:calc(50%-40%-500px)] [top:calc(50%-40%+200px)] [transform-origin:calc(50%+400px)]'></div>

                <div className='animate-moveHorizontal bg-radial-red absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 opacity-70 mix-blend-hard-light [transform-origin:calc(50%-200px)]'></div>

                <div className='animate-moveInCircle bg-radial-yellow absolute h-[160%] w-[160%] opacity-100 mix-blend-hard-light [left:calc(50%-80%)] [top:calc(50%-80%)] [transform-origin:calc(50%-800px)_calc(50%+200px)]'></div>

                <div
                    className={cn(
                        'absolute inset-0',
                        '[background-size:60px_60px]',
                        '[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]',
                        'dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]',
                    )}
                />
                {/* Radial gradient for the container to give a faded look */}
                <div className='pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black'></div>

                <div className='relative z-30 flex flex-col items-start justify-center gap-2 p-4'>
                    <p className='relative bg-gradient-to-b from-neutral-800 to-neutral-900 bg-clip-text py-8 text-6xl font-bold text-transparent sm:text-7xl lg:text-8xl dark:from-neutral-200 dark:to-neutral-300'>
                        Your <br /> Service <br /> Tagline
                    </p>

                    <p className='max-w-lg text-lg font-medium text-neutral-900 dark:text-neutral-300'>
                        Digital Learning Centre merupakan pusat pembelajaran digital yang memberikan pelayanan kepada
                        dosen, mahasiswa dan umum dalam penyediaan ruangan dan pembuatan media digital.
                    </p>

                    <Button className='mt-6 bg-violet-600 text-lg text-white' size='lg' radius='full'>
                        Explore Layanan
                    </Button>
                </div>
            </header>

            {/* services section */}
            <section className='py-16'>
                <div className='container p-4'>
                    <section
                        aria-label='hero-dlc'
                        className='flex flex-col items-center px-6 py-6 md:px-[70px] md:py-20'
                    >
                        <div className='font-poppins mb-6 text-center text-[40px] font-bold leading-[56px]'>
                            Your Services
                        </div>

                        <div className='mb-10 max-w-[634px] text-center tracking-[0.32px] text-neutral-500'>
                            Temukan berbagai layanan Digital Learning Centre untuk mendukung aktivitas belajar, produksi
                            konten, dan eksplorasi teknologi digital.
                        </div>

                        <div className='flex flex-wrap justify-center gap-8'>
                            {services.map((service, index) => (
                                <FadeInWhenVisible
                                    className='w-full max-w-80'
                                    multiplier={index / 2}
                                    key={`service-${index}`}
                                >
                                    <div className='border-default-500 flex max-w-80 flex-col gap-3 rounded border p-5 dark:border-neutral-800'>
                                        <University size={57} />
                                        <span className='font-poppins text-3xl font-semibold'>{service.title}</span>

                                        <span className='text-sm font-normal text-neutral-500'>
                                            {service.description}
                                        </span>
                                    </div>
                                </FadeInWhenVisible>
                            ))}
                        </div>
                    </section>
                </div>
            </section>

            {/* contact us section */}
            <section className='py-16'>
                <div className='container p-4'></div>
            </section>
        </main>
    )
}
