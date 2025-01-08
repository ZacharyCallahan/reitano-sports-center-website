const Footer = () => {
    return (
        <footer className="bg-slate-700 py-4 mt-24 text-white">
            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center md:flex-row md:justify-between">
                <p className="mb-2 md:mb-0">© 2023 Reitano Sports Center</p>
                <nav className="flex gap-4">
                    <a href="/about" className="hover:underline">About Us</a>
                    <a href="/contact" className="hover:underline">Contact</a>
                </nav>
            </div>
            <div className="max-w-7xl mx-auto px-4 mt-4 text-center md:text-left">
                <p className="mb-2">123 Sports Center Road, YourCity</p>
                <p className="mb-2">Open Daily: 8 AM - 10 PM</p>
                <p className="mb-2">Phone: (123) 456-7890</p>
                <p className="mt-4 text-sm text-gray-400">
                    All team names and logos are trademarks of their respective owners.
                </p>
            </div>
        </footer>
    );
}

export default Footer;