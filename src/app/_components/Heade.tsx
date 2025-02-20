function Heade() {
    return (
        <div className="flex justify-between items-center p-4 bg-gray-900 text-white shadow-lg">
            <h1 className="text-xl font-bold">Logo</h1>
            <ul className="flex gap-5">
                <li className="hover:text-gray-400 cursor-pointer">Log-In</li>
                <li className="hover:text-gray-400 cursor-pointer">Sign-Up</li>
            </ul>
        </div>
    );
}

export default Heade;
