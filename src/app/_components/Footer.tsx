function Footer() {
    return (
        <div className="w-full flex justify-between items-center p-4 bg-gray-900 text-white">
            <ul className="flex gap-5">
                <li className="hover:text-gray-400 cursor-pointer">Home</li>
                <li className="hover:text-gray-400 cursor-pointer">About</li>
                <li className="hover:text-gray-400 cursor-pointer">Services</li>
                <li className="hover:text-gray-400 cursor-pointer">Contact</li>
            </ul>
        </div>
    );
}

export default Footer;
