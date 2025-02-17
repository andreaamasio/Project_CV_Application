import { useState } from "react"
export default function Education({ setEducation }) {
  const [education, setEdu] = useState({
    schoolName: "",
    title: "",
    date: "",
    currentlyEmployed: "",
  })
  const [isEditing, setIsEditing] = useState(true)
  function handleSubmit(e) {
    e.preventDefault()
    setEducation(education)
    setIsEditing(false)
  }

  function handleChange(e) {
    setEdu({ ...education, [e.target.name]: e.target.value })
  }
  return (
    <>
      {isEditing ? (
        <div className="education">
          <h2>Your last Education Title</h2>
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
        </div>
      ) : (
        <div className="education">
          <h2>Your last Education Title</h2>
          <p>School Name: {education.schoolName}</p>
          <p>Title: {education.title}</p>
          <p>Date: {education.date}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </>
  )
}
