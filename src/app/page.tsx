'use client'

import { Accordion, AccordionItem, Button, cn } from '@heroui/react'
import { HelpCircle, Mail, Phone, University } from 'lucide-react'
import { motion } from 'framer-motion'
import AssetAnimatedVr from '@/assets/lottie/animated-vr.json'
import dynamic from 'next/dynamic'

const LottiePlayer = dynamic(() => import('lottie-react'), {
    ssr: false,
})

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

const faqs = [
    {
        question: 'Bagaimana cara mengajukan peminjaman ruangan?',
        answer: 'Untuk mengajukan peminjaman ruangan, silakan mengisi formulir online di halaman peminjaman dan menunggu verifikasi dari admin. Pastikan data yang diisi lengkap dan benar.',
    },
    {
        question: 'Apa saja syarat peminjaman ruangan?',
        answer: 'Peminjam harus terdaftar sebagai civitas kampus dan menyertakan surat permohonan resmi yang masih berlaku.',
    },
    {
        question: 'Berapa lama proses verifikasi peminjaman?',
        answer: 'Verifikasi biasanya memakan waktu 1–2 hari kerja tergantung pada antrian permintaan dan kelengkapan data.',
    },
    {
        question: 'Apakah ruangan bisa digunakan di luar jam operasional?',
        answer: 'Penggunaan di luar jam operasional memerlukan izin khusus dari pihak pengelola dan harus diajukan minimal 3 hari sebelumnya.',
    },
]

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
}

const cardItem = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Home() {
    return (
        <main className=''>
            {/* hero section */}
            <header className='relative flex h-[100dvh] w-full items-start justify-center overflow-hidden'>
                {/* glob */}
                <div className='absolute -right-28 -top-28 z-30 h-[24rem] w-[24rem] rounded-full bg-blue-500/20 blur-3xl'></div>

                <div className='absolute -bottom-28 -left-28 z-30 h-[24rem] w-[24rem] rounded-full bg-violet-500/20 blur-3xl'></div>

                {/* glob */}
                {/* <div className='absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 animate-moveVertical bg-radial-blue opacity-100 mix-blend-hard-light'></div> */}

                {/* <div className='absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 animate-moveInCircleReverse bg-radial-purple opacity-100 mix-blend-hard-light [transform-origin:calc(50%-300px)]'></div> */}

                <div className='absolute h-[80%] w-[80%] animate-moveInCircleSlow bg-radial-cyan opacity-100 mix-blend-hard-light [left:calc(50%-40%-500px)] [top:calc(50%-40%+200px)] [transform-origin:calc(50%+400px)]'></div>

                <div className='absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 animate-moveHorizontal bg-radial-red opacity-70 mix-blend-hard-light [transform-origin:calc(50%-200px)]'></div>

                <div className='absolute h-[160%] w-[160%] animate-moveInCircle bg-radial-yellow opacity-100 mix-blend-hard-light [left:calc(50%-80%)] [top:calc(50%-80%)] [transform-origin:calc(50%-800px)_calc(50%+200px)]'></div>

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

                <div className='relative z-30 mt-12 flex flex-col items-start justify-center gap-2 p-4'>
                    <p className='relative bg-gradient-to-b from-neutral-800 to-neutral-900 bg-clip-text py-8 text-6xl font-extrabold text-transparent dark:from-neutral-200 dark:to-neutral-300 sm:text-7xl lg:text-8xl'>
                        Digital <br /> Learning <br /> Centre
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
                    <section aria-label='hero-dlc' className='items-centerpx-6 flex flex-col py-10'>
                        <div className='font-poppins mb-6 text-center text-[40px] font-bold leading-[56px]'>
                            Your Services
                        </div>

                        <div className='mx-auto mb-12 max-w-[634px] text-center tracking-[0.32px] text-neutral-400'>
                            Temukan berbagai layanan Digital Learning Centre untuk mendukung aktivitas belajar, produksi
                            konten, dan eksplorasi teknologi digital.
                        </div>

                        <motion.div
                            className='flex flex-wrap justify-center gap-8'
                            variants={container}
                            initial='hidden'
                            whileInView='show'
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {services.map((service, index) => (
                                <motion.div
                                    key={`service-${index}`}
                                    variants={cardItem}
                                    className='flex max-w-80 flex-col gap-3 rounded-xl border p-6 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg dark:border-neutral-800'
                                >
                                    <University size={56} className='text-fuchsia-400' />
                                    <span className='font-poppins text-2xl font-semibold'>{service.title}</span>
                                    <span className='text-sm font-light text-neutral-600 dark:text-neutral-300'>
                                        {service.description}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </section>
                </div>
            </section>

            {/* facility section */}
            <section className='py-16 dark:bg-[#040814]'>
                <div className='container p-4'>
                    <section className='flex flex-col items-center px-6 py-16 md:flex-row md:justify-center md:gap-20 md:py-24'>
                        {/* Lottie Animation Container */}
                        <motion.div
                            className='max-w-xs md:max-w-md'
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                        >
                            <LottiePlayer animationData={AssetAnimatedVr} loop={true} />
                        </motion.div>

                        {/* Text Content */}
                        <motion.div
                            className='mt-10 max-w-xl text-center md:mt-0 md:text-left'
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                        >
                            <h2 className='mb-4 text-4xl font-bold'>Fasilitas DLC</h2>
                            <p className='text-lg leading-relaxed dark:text-neutral-400'>
                                Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis
                                hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis
                                consequat neque, tellus blandit.
                            </p>
                        </motion.div>
                    </section>
                </div>
            </section>

            {/* faq section */}
            <section className='py-16'>
                <div className='container p-4'>
                    <section className='relative overflow-hidden text-neutral-800 dark:text-neutral-100 md:px-24'>
                        <div className='relative z-10 mx-auto max-w-4xl text-center'>
                            <h2 className='mb-12 text-5xl font-extrabold leading-tight drop-shadow-lg md:text-6xl'>
                                Pertanyaan Umum
                            </h2>

                            <Accordion
                                isCompact={false}
                                variant='light'
                                selectionMode='multiple'
                                className='space-y-4 text-left'
                                itemClasses={{
                                    base: 'bg-white/5 backdrop-blur-md border-white/10 rounded-2xl p-6 transition-all hover:scale-[1.02] duration-300',
                                    title: 'text-xl md:text-2xl font-semibold flex items-center gap-3',
                                    content: 'text-base text-white/80 mt-2',
                                    indicator: 'text-white',
                                }}
                            >
                                {faqs.map((item, index) => (
                                    <AccordionItem
                                        key={index}
                                        aria-label={item.question}
                                        title={
                                            <>
                                                <HelpCircle className='h-6 w-6 shrink-0 text-fuchsia-400' />
                                                {item.question}
                                            </>
                                        }
                                    >
                                        {item.answer}
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </section>
                </div>
            </section>

            {/* contact us section */}
            <section className='py-16'>
                <div className='container p-4'>
                    <section className='relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-500 px-6 py-20 text-white shadow-2xl md:px-16'>
                        {/* Decorative blob */}
                        <div className='absolute -left-20 -top-20 z-0 h-72 w-72 animate-pulse rounded-full bg-white/10 blur-3xl filter' />
                        <div className='absolute -bottom-20 -right-20 z-0 h-72 w-72 animate-pulse rounded-full bg-white/10 blur-3xl filter' />

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className='relative z-10 text-center'
                        >
                            <h2 className='mb-8 text-4xl font-extrabold drop-shadow-lg md:text-5xl'>Contact Us!</h2>
                            <div className='flex flex-col items-center justify-center gap-8 text-lg md:flex-row'>
                                <a
                                    href='tel:(061)32872111'
                                    className='group flex flex-col items-center rounded-full bg-white/10 p-6 backdrop-blur-md transition hover:bg-white/20'
                                >
                                    <Phone className='mb-2 h-7 w-7 text-white transition-transform group-hover:scale-110' />
                                    (061) 3287 2111
                                </a>
                                <a
                                    href='mailto:dlcb@usu.ac.id'
                                    className='group flex flex-col items-center rounded-full bg-white/10 p-6 backdrop-blur-md transition hover:bg-white/20'
                                >
                                    <Mail className='mb-2 h-7 w-7 text-white transition-transform group-hover:scale-110' />
                                    dlcb@usu.ac.id
                                </a>
                            </div>
                        </motion.div>
                    </section>
                </div>
            </section>
        </main>
    )
}
