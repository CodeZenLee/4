import Image from "next/image";


export default function Header() {
    return(
        <header className="bg-black h-16 flex justify-between items-center">
            <div>
                <Image src="" alt="Logo" height={12} width={12} />
            </div>
            <nav>
                <ul className="flex items-center gap-x-8 px-8">
                    <li className="text-white"><a href="/home">Home</a></li>
                    <li className="text-white"><a href="/home">About</a></li>
                    <li className="text-white"><a href="/home">Services</a></li>
                    <button className="bg-white px-4 py-2 rounded-md"><a href="">Call Us!</a></button>
                </ul>
            </nav>
        </header>
    );

}