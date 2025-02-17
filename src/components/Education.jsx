import { useState } from "react"
export default function Education({ setExperience }) {
  const [education, setEdu] = useState({
    schoolName: "",
    title: "",
    date: "",
    currentlyEmployed: "",
  })
  const [isEditing, setIsEditing] = useState(true)
  function handleSubmit(e) {
    e.preventDefault()
    setExperience(education)
    setIsEditing(false)
  }

  function handleChange(e) {
    setEdu({ ...education, [e.target.name]: e.target.value })
  }
  return (
    <>
      <h2>Your last Education title</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">School Name: </label>
          <input
            type="text"
            onChange={handleChange}
            value={education.schoolName}
            name="schoolName"
            placeholder="School Name"
          />
          <label htmlFor="name">Title: </label>
          <input
            type="text"
            onChange={handleChange}
            value={education.title}
            name="title"
            placeholder="Bachelor/Master Title"
          />
          <label htmlFor="name">Date of Completion: </label>
          <input
            type="date"
            onChange={handleChange}
            value={education.date}
            name="date"
            placeholder="Date of Completion"
          />

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="personal-info">
          <p>School Name: {education.schoolName}</p>
          <p>Title: {education.title}</p>
          <p>Date: {education.date}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </>
  )
}
