import { links } from "@/lib/utils";
import Link from "next/link";

interface NavProps {
    className?: string;
}

const Nav: React.FC<NavProps> = ({ className }) => {
    return (
        <nav className="w-full">
            <ul className="flex items-center gap-5">
                {links.map((link) => (
                    <li key={link.label}>
                        <Link href={link.path}>{link.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;