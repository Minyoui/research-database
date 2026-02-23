import Image from "next/image";
import { homeLink } from "@/lib/utils";
import Link from "next/link";

interface HeroProps {
    className?:string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
    return (
        <div className={`relative h-screen w-full flex items-center justify-center ${className}`}>
            <div className="flex flex-col z-20">
                <h1 className="font-inter text-4xl text-white font-bold text-center">Institute Research Library</h1>
                <ul className="flex flex-col items-center space-y-5 my-3">
                    {homeLink.map((list) => (
                        <li key={list.label} className="text-white text-center font-montserrat">
                            <Link href={list.path}>{list.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="bg-black/30 absolute z-10 inset-0"/>
            <Image 
                src="/images/university.png"
                alt="university"
                fill
                className="object-cover"
            />
        </div>
    );
};

export default Hero;