import Image from "next/image";
import Navbar from "@/components/Navigation/Navbar";

const Hero = () => {
    return (
        <div className="relative w-full h-80 flex items-center justify-center mb-8">
            <div className="absolute top-0 left-0 w-full z-10">
                <Navbar />
            </div>
            <Image
                src="/hero.jpg"
                alt="Hero Image"
                fill
                className="object-cover brightness-50"
                priority
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center"></div>
        </div>
    )
}

export default Hero;