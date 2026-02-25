import About from "../sections/About";
import Hero from "../sections/Hero";
import Info from "../sections/Info";

export default function Home() {
    return (
        <div className="w-full flex flex-col">
            <Hero />
            <About />
            <Info />
        </div>
    )
}