import { createRoot } from "react-dom"
import Pet from "./Pet"

const App = () => {
  <>
    <h1>Adopt Me!</h1>
    <Pet name="Levi" animal="dog" breed="Pug" />
    <Pet name="Pepper" animal="bird" breed="Cockatiel" />
    <Pet name="Doink" animal="cat" breed="Mixed" />
  </>
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)
