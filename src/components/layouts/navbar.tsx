'use client'

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    DropdownItem,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
    Avatar,
} from '@heroui/react'
import { ThemeSwitcher } from '../partials/theme-switcher'

export default function CustomNavbar() {
    return (
        <Navbar isBordered>
            <NavbarContent justify='start'>
                <NavbarBrand className='mr-4'>
                    <p className='hidden font-bold text-inherit sm:block'>LOGOMU</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent as='div' className='items-center' justify='end'>
                <div className='hidden gap-3 sm:flex'>
                    <NavbarItem>
                        <Link color='foreground' href='#'>
                            Home
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link aria-current='page' color='secondary' href='#'>
                            Services
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color='foreground' href='#'>
                            About Us
                        </Link>
                    </NavbarItem>
                </div>

                <ThemeSwitcher />

                <Dropdown placement='bottom-end'>
                    <DropdownTrigger>
                        <Avatar
                            isBordered
                            as='button'
                            className='transition-transform'
                            color='secondary'
                            name='Jason Hughes'
                            size='sm'
                            src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label='Profile Actions' variant='flat'>
                        <DropdownItem key='profile' className='h-14 gap-2'>
                            <p className='font-semibold'>Signed in as</p>
                            <p className='font-semibold'>zoey@example.com</p>
                        </DropdownItem>
                        <DropdownItem key='settings'>My Settings</DropdownItem>
                        <DropdownItem key='team_settings'>Team Settings</DropdownItem>
                        <DropdownItem key='analytics'>Analytics</DropdownItem>
                        <DropdownItem key='system'>System</DropdownItem>
                        <DropdownItem key='configurations'>Configurations</DropdownItem>
                        <DropdownItem key='help_and_feedback'>Help & Feedback</DropdownItem>
                        <DropdownItem key='logout' color='danger'>
                            Log Out
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </Navbar>
    )
}
