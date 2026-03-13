import { useState } from "react"
import Home from "./pages/Home"
import Header from "./layouts/Header"
import Menu from "./layouts/Menu"

function App() {

  const [overlay, setOverlay] = useState<boolean | undefined>(false)

  return (
    <div className="size-full relative flex" onClick={() => overlay && setOverlay(false)}>
      <div className={`inset-0 z-10 fixed justify-end transition-all duration-300 bg-zinc-950/15 ${overlay ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <Menu open={overlay} setMenu={setOverlay}/>
      </div>
      <div className="relative flex-1">
        <div className="scroll-container absolute overflow-y-auto overflow-x-hidden inset-0">
          <div className="size-full relative">
            <Header setMenu={setOverlay} />
            <Home />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App