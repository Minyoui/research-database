
interface HeroProps {
    className?:string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
    return (
        <section className={`${className}`}>

        </section>
    );
};

export default Hero;