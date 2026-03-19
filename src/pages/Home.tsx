import About from "../sections/About";
import Contact from "../sections/Contact";
import Footer from "../layouts/Footer";
import Goal from "../sections/Goal";
import Hero from "../sections/Hero";
import Info from "../sections/Info";
import Interval from "../sections/Interval";
import Reviews from "../sections/Reviews";
import Treatments from "../sections/Treatments";

export default function Home() {
    return (
        <div className="w-full flex flex-col">
            <Hero />
            <About />
            <Info />
            <Interval />
            <Goal />
            <Reviews />
            <Treatments />
            <Contact />
            <Footer />
        </div>
    )
}