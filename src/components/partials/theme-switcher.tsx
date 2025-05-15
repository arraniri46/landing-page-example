'use client'

import { Button } from '@heroui/react'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Button
      onPress={() => {
        if (theme === 'light') {
          setTheme('dark')

          return
        }

        setTheme('light')
      }}
      variant='light'
      startContent={theme === 'light' ? <SunIcon className='w-5' /> : <MoonIcon className='w-5' />}
      size='sm'
      isIconOnly
    ></Button>
  )
}
