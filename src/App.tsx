import Home from "./pages/Home"

function App() {
  return (
    <div className="size-full relative flex">
      <div className="relative flex-1">
        <div className="absolute overflow-y-auto inset-0">
          <div className="min-h-full w-full relative flex">
            <Home />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App