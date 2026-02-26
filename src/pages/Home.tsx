import About from "../sections/About";
import Goal from "../sections/Goal";
import Hero from "../sections/Hero";
import Info from "../sections/Info";
import Interval from "../sections/Interval";

export default function Home() {
    return (
        <div className="w-full flex flex-col">
            <Hero />
            <About />
            <Info />
            <Interval />
            <Goal />
        </div>
    )
}