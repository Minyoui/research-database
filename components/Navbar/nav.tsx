import { links } from "@/lib/utils";
import Link from "next/link";
import { CircleUserRound } from "lucide-react";

interface NavProps {
    className?: string;
}

const Nav: React.FC<NavProps> = ({ className }) => {
    return (
        <nav className="w-full flex items-center justify-between fixed z-50 bg-white/35 p-6 shadow-md">
            <Link href="/" className="font-inter font-bold text-4xl text-white">
                LOGO
            </Link>
            {/* <ul className="flex items-center gap-5">
                {links.map((link) => (
                    <li key={link.label} className="">
                        <Link href={link.path}>{link.label}</Link>
                    </li>
                ))}
            </ul> */}
            <Link href="/login">
                <CircleUserRound className="text-white w-10 h-10"/>
            </Link>
        </nav>
    );
};

export default Nav;