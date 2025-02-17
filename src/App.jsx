import { useState } from "react"
import PersonalInfo from "./components/PersonalInfo"
import Experience from "./components/Experience"
import Education from "./components/Education"
import "./style.css"

export default function App() {
  const [personalInfo, setPersonalInfo] = useState({})
  const [education, setEducation] = useState({})
  const [experience, setExperience] = useState({})

  return (
    <>
      <div className="main">
        <h1>CV Builder</h1>
        <PersonalInfo setPersonalInfo={setPersonalInfo} />
        <Education setEducation={setEducation} />
        <Experience setExperience={setExperience} />
      </div>
    </>
  )
}
