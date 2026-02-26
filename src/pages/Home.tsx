import About from "../sections/About";
import Footer from "../sections/Footer";
import Goal from "../sections/Goal";
import Hero from "../sections/Hero";
import Info from "../sections/Info";
import Interval from "../sections/Interval";
import Reviews from "../sections/Reviews";

export default function Home() {
    return (
        <div className="w-full flex flex-col">
            <Hero />
            <About />
            <Info />
            <Interval />
            <Goal />
            <Reviews />
            <Footer />
        </div>
    )
}