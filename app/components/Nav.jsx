import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaTwitter, FaTiktok, FaPlus } from 'react-icons/fa';


const Nav = () => {
    return (
        <nav className="h-32 bg-white container mx-auto px-32 py-4 flex justify-center">
            <ul className="flex items-center text-xl font-semibold w-full">
                <li className="flex-1 flex justify-evenly space-x-4">
                    <Link href="/about" className="text-black">Memberships</Link>
                    <Link href="/programs" className="text-black">Clinics</Link>
                </li>
                <Link href={"/"}>
                    <Image src="/website-logo.webp" alt="Columbus Kids Sports" width={100} height={100} />
                </Link>
                <li className="flex-1 flex justify-evenly space-x-4">
                    <Link href="/contact" className="text-black">Training</Link>
                    <Link href="/contact" className="text-black">Our Team</Link>
                </li>
            </ul>

            {/* <ul className="grid grid-cols-2 gap-4 border-l-2 pl-8 text-2xl">
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
                    </ul> */}
        </nav>
    );
}

export default Nav;