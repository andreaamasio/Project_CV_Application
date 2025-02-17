import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <h1>CV Builder</h1>
    <App />
  </StrictMode>
)
