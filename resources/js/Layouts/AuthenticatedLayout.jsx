import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Head } from '@inertiajs/inertia-react';
import styles from '@css/layout.module.css'
import { Link } from '@inertiajs/inertia-react';

export default function Authenticated({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="flex flex-row min-h-screen">
            <Head><script src="https://kit.fontawesome.com/7e91af3ffb.js" crossorigin="anonymous"></script></Head>
            <nav className="bg-indigo-50/50 w-1/6 min-w-min">
                <div className=" max-w-7xl mx-auto sm:px-6 lg:px-8">

                    <div className="flex flex-col items-left gap-y-5 justify-between h-auto py-6 ">

                        <div className="shrink-0 flex items-center my-3">
                            <Link href="/">
                                <ApplicationLogo className="block h-9 w-auto fill-current" />
                             </Link>
                        </div>

                        <div className="hidden sm:flex sm:items-center">
                            <div className="relative grow">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md w-full">
                                            <button
                                                type="button"
                                                className="flex flex-row items-center gap-x-5 grow text-left px-3 py-2 bg-green-500 border border-transparent text-lg leading-5 font-medium rounded-md text-white bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                <i class="fa-solid fa-user text-2xl"></i>
                                                <div>
                                                    <h2>{auth.user.name}</h2>
                                                    <h3 className="text-sm text-grey-500 font-light">{auth.user.role}</h3>
                                                </div>

                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="flex flex-col gap-y-5">
                            <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                                <div className="flex flex-row gap-x-3 items-center">
                                    <i className="fa-solid fa-gauge-high w-6 text-center"></i>
                                    <h2>Dashboard</h2>
                                </div>
                            </NavLink>
                            <NavLink href={route('vehicles')} active={route().current('vehicles')}>
                                <div className="flex flex-row gap-x-3 items-center">
                                    <i className="fa-solid fa-car w-6 text-center"></i>
                                    <h2>Vehicles</h2>
                                </div>
                            </NavLink>
                            <NavLink href={route('request')}>
                                <div className="flex flex-row gap-x-3 items-center">
                                    <i className="fa-solid fa-clipboard w-6 text-center"></i>
                                    <h2>Requests</h2>
                                </div>
                            </NavLink>
                        </div>

                        

                        
                    </div>
                </div>

                
            </nav>

            <div className="grow py-4">
                {header && (
                    <header className="bg-white w-full py-6 px-8">
                        <div>{header}</div>
                    </header>
                )}

                <main className='py-5 px-8 '>{children}</main>
            </div>
            
        </div>
    );
}
