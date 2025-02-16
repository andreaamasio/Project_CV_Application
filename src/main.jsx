import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import PersonalInfo from "./components/PersonalInfo"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <h1>CV Builder</h1>
    <PersonalInfo />
  </StrictMode>
)
