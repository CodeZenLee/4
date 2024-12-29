import Image from "next/image";
import Link from "next/link";


export default function Header() {
    return(
        <header className="bg-black h-16 flex justify-between items-center fixed top-0 left-0 w-full z-50">
            <div>
                <Image src="logo.svg" alt="Logo" height={48} width={48} className="bg-white m-8 fill-white" />
            </div>
            <nav>
                <ul className="flex items-center gap-x-8 px-8">
                    <li className="text-white cursor-pointer"><a href="/.">Home</a></li>
                    <li className="text-white cursor-pointer"><a href="/About">About</a></li>
                    <li className="text-white cursor-pointer"><a href="/Services">Services</a></li>
                    <button className="bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-3 text-white text-lg font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800 transition-transform transform hover:scale-105">
                        <Link href="/#contact-form">Schedule A Call</Link>
                    </button>
                </ul>
            </nav>
        </header>
    );

}