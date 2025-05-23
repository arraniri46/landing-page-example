'use client'

import { Accordion, AccordionItem, Button, cn } from '@heroui/react'
import { HelpCircle, Mail, MailIcon, MapPinIcon, Phone, PhoneIcon, University } from 'lucide-react'
import { motion } from 'framer-motion'
import AssetAnimatedVr from '@/assets/lottie/animated-vr.json'
import dynamic from 'next/dynamic'
import ListItem from '@/components/partials/list-item'
import Link from 'next/link'
import AssetUsuGroup from '@/assets/webp/asset-usu-group.webp'
import AssetUsuForDarkBg from '@/assets/webp/asset-usu-for-dark-bg.webp'
import Image from 'next/image'

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
            <header className='relative flex h-[100dvh] w-full items-center justify-center overflow-hidden'>
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
                        '[background-size:96px_96px]',
                        '[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]',
                        'dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]',
                    )}
                />
                {/* Radial gradient for the container to give a faded look */}
                <div className='pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black'></div>

                <div className='relative z-30 mb-12 flex flex-col items-start justify-center gap-2 p-4'>
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
            <section className='py-12'>
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
            <section className='py-12 dark:bg-[#040814]'>
                <div className='container p-4'>
                    <section className='flex flex-col items-center px-6 md:flex-row md:justify-center md:gap-16'>
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
                            <p className='leading-relaxed dark:text-neutral-400 lg:text-lg'>
                                Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis
                                hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis
                                consequat neque, tellus blandit.
                            </p>
                        </motion.div>
                    </section>
                </div>
            </section>

            {/* faq section */}
            <section className='py-12'>
                <div className='container p-4'>
                    <section className='relative overflow-hidden text-neutral-800 dark:text-neutral-100 md:px-24'>
                        <div className='relative z-10 mx-auto max-w-4xl text-center'>
                            <div className='font-poppins mb-6 text-center text-[40px] font-bold leading-[56px]'>
                                Pertanyaan Umum
                            </div>

                            <Accordion
                                isCompact={false}
                                variant='light'
                                selectionMode='multiple'
                                className='space-y-4 text-left'
                                itemClasses={{
                                    base: 'bg-white/5 backdrop-blur-md border-white/10 rounded-2xl px-4 py-2 transition-all hover:scale-[1.02] duration-300',
                                    title: 'text-base md:text-2xl font-semibold flex items-center gap-3',
                                    content: 'text-base mt-2 text-neutral-600',
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
            <section className='py-12'>
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
                                    className='group flex items-center gap-2 rounded-full bg-white/10 p-6 backdrop-blur-md transition hover:bg-white/20'
                                >
                                    <Phone className='h-7 w-7 text-white transition-transform group-hover:scale-110' />

                                    <span>(061) 3287 2111</span>
                                </a>
                                <a
                                    href='mailto:dlcb@usu.ac.id'
                                    className='group flex items-center gap-2 rounded-full bg-white/10 p-6 backdrop-blur-md transition hover:bg-white/20'
                                >
                                    <Mail className='h-7 w-7 text-white transition-transform group-hover:scale-110' />

                                    <span>dlcb@usu.ac.id</span>
                                </a>
                            </div>
                        </motion.div>
                    </section>
                </div>
            </section>

            <section>
                <footer className='w-full bg-neutral-950 p-8 py-6 text-white'>
                    <div className='mx-auto max-w-7xl'>
                        {/* logo */}
                        <div className='flex flex-col items-center justify-between gap-12 md:flex-row'>
                            <Link href={'/'}>
                                <Image src={AssetUsuForDarkBg} className='w-28' alt={'logo-usu'} />
                            </Link>

                            <Image src={AssetUsuGroup} className='w-96' alt={'logo-group'} />
                        </div>

                        {/* contacts */}
                        <div className='my-14'>
                            <ul className='space-y-4'>
                                <li className='flex gap-4'>
                                    <MapPinIcon className='h-6 w-6' />

                                    <div className='w-full space-y-2'>
                                        <span>Gedung Biro Rektor Lantai 1</span>

                                        <div className='space-y-2'>
                                            <ListItem
                                                labelClassName='text-base'
                                                valueClassName='text-base'
                                                label='Senin - Kamis'
                                                value='07.30 - 16.00 WIB'
                                            />

                                            <ListItem
                                                labelClassName='text-base'
                                                valueClassName='text-base'
                                                label='Istirahat'
                                                value='12.00 - 13.00 WIB'
                                            />
                                        </div>

                                        <div className='space-y-2'>
                                            <ListItem
                                                labelClassName='text-base'
                                                valueClassName='text-base'
                                                label='Jumat'
                                                value='07.30 - 16.30 WIB'
                                            />

                                            <ListItem
                                                labelClassName='text-base'
                                                valueClassName='text-base'
                                                label='Istirahat'
                                                value='11.30 - 13.00 WIB'
                                            />
                                        </div>
                                    </div>
                                </li>

                                <li className='flex items-center gap-4'>
                                    <PhoneIcon className='h-6 w-6' />

                                    <span>0812 1111 2222</span>
                                </li>

                                <li className='flex items-center gap-4'>
                                    <MailIcon className='h-6 w-6' />

                                    <span>helpdesk@event.usu.ac.id</span>
                                </li>

                                <li className='flex items-center gap-4'>
                                    <svg
                                        className='h-6 w-6'
                                        fill='currentColor'
                                        role='img'
                                        viewBox='0 0 24 24'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <title>YouTube</title>
                                        <path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' />
                                    </svg>

                                    <span>@eventusu</span>
                                </li>

                                <li className='flex items-center gap-4'>
                                    <svg
                                        className='h-6 w-6'
                                        fill='currentColor'
                                        role='img'
                                        viewBox='0 0 24 24'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <title>Instagram</title>
                                        <path d='M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077' />
                                    </svg>

                                    <span>@eventusu</span>
                                </li>
                            </ul>
                        </div>

                        <span className='block text-center text-white'>
                            Copyright © {new Date().getFullYear()} Universitas Sumatera Utara. All rights reserved.
                        </span>
                    </div>
                </footer>
            </section>
        </main>
    )
}
