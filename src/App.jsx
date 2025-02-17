import { useState } from "react"
import PersonalInfo from "./components/PersonalInfo"
import Experience from "./components/Experience"
import Education from "./components/Education"

export default function App() {
  const [personalInfo, setPersonalInfo] = useState({})
  const [education, setEducation] = useState({})
  const [experience, setExperience] = useState({})

  return (
    <>
      <PersonalInfo setPersonalInfo={setPersonalInfo} />
      <Education setEducation={setEducation} />
      <Experience setExperience={setExperience} />
    </>
  )
}
