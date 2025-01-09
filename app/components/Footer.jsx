import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-slate-700 py-4 mt-24 text-white">
            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center md:flex-row md:justify-between">
                <p className="mb-2 md:mb-0">© 2025 Reitano Sports Center</p>
                <nav className="flex gap-4">
                    <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
                    <Link href="/terms" className="hover:underline">Terms of Service</Link>
                </nav>
            </div>
            <div className="max-w-7xl mx-auto px-4 mt-4 text-center md:text-left">
                <p className="mb-2">13260 National Road SW, Etna, Ohio 43068 </p>
                <p className="mb-2">Open Daily: 8 AM - 10 PM</p>
                <p className="mb-2">Phone: (614) 551-8259</p>
                <p className="mt-4 text-sm text-gray-400">
                    All team names and logos are trademarks of their respective owners.
                </p>
            </div>
        </footer>
    );
}

export default Footer;