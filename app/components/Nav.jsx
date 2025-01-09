'use client'
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaTwitter, FaTiktok, FaPlus } from 'react-icons/fa';
import { usePathname } from "next/navigation";

const Nav = () => {
    const pathname = usePathname();
    const isActive = (path) => pathname === path;

    return (
        <nav className="h-32 bg-white container mx-auto px-32 py-4 flex justify-between">
            <Link href={"/"}>
                <Image src="/website-logo.webp" alt="Columbus Kids Sports" width={100} height={100} />
            </Link>
            <div className="flex justify-between items-center w-1/2">
                <ul className="flex items-center justify-between text-xl font-semibold w-full pr-8">
                    <li>
                        <Link href="/memberships" className={`text-black ${isActive('/memberships') ? 'border-b-2 border-red-600 font-bold' : ''} hover:text-red-600 transition-all duration-300`}>Memberships</Link>
                    </li>
                    <li>
                        <Link href="/clincs" className={`text-black ${isActive('/clincs') ? 'border-b-2 border-red-600 font-bold' : ''} hover:text-red-600 transition-all duration-300`}>Clinics</Link>
                    </li>
                    <li>
                        <Link href="/training" className={`text-black ${isActive('/training') ? 'border-b-2 border-red-600 font-bold' : ''} hover:text-red-600 transition-all duration-300`}>Training</Link>
                    </li>
                    <li>
                        <Link href="/team" className={`text-black ${isActive('/team') ? 'border-b-2 border-red-600 font-bold' : ''} hover:text-red-600 transition-all duration-300`}>Our Team</Link>
                    </li>
                </ul>

                <ul className="grid grid-cols-2 gap-4 border-l-2 pl-8 text-2xl">
                    <li>
                        <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-black" />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="text-black" />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="text-black" />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                            <FaTiktok className="text-black" />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;