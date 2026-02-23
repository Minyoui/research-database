import { links } from "@/lib/utils";
import Link from "next/link";

interface NavProps {
    className?: string;
}

const Nav: React.FC<NavProps> = ({ className }) => {
    return (
        <nav className="w-full fixed z-50 bg-white/35 p-6">
            <ul className="flex items-center gap-5">
                {links.map((link) => (
                    <li key={link.label} className="">
                        <Link href={link.path}>{link.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;