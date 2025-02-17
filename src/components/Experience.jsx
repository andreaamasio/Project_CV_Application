import { useState } from "react"
export default function Experience({ setExperience }) {
  const [experience, setExp] = useState({
    companyName: "",
    role: "",
    responsibilities: "",
    dateFrom: "",
    dateTo: "",
  })
  const [isEditing, setIsEditing] = useState(true)
  function handleSubmit(e) {
    e.preventDefault()
    setExperience(experience)
    setIsEditing(false)
  }

  function handleChange(e) {
    setExp({ ...experience, [e.target.name]: e.target.value })
  }
  return (
    <>
      <h2>Experience</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Company Name: </label>
          <input
            type="text"
            onChange={handleChange}
            value={experience.companyName}
            name="companyName"
            placeholder="Company Name"
          />
          <label htmlFor="name">Role: </label>
          <input
            type="text"
            onChange={handleChange}
            value={experience.role}
            name="role"
            placeholder="Role"
          />
          <label htmlFor="responsibilities">Responsibilities: </label>
          <textarea
            onChange={handleChange}
            value={experience.responsibilities}
            name="responsibilities"
            placeholder="Responsibilities"
          />
          <label htmlFor="name">From Date: </label>
          <input
            type="date"
            onChange={handleChange}
            value={experience.dateFrom}
            name="dateFrom"
            placeholder="Date From"
          />
          <label htmlFor="name">To Date: </label>
          <input
            type="date"
            onChange={handleChange}
            value={experience.dateTo}
            name="dateTo"
            placeholder="Date To"
          />
          <label htmlFor="name">Currently Employed Here: </label>
          <input
            type="checkbox"
            onChange={handleChange}
            value={experience.currentlyEmployed}
            name="currentlyEmployed"
            placeholder="Currently employed Here"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="personal-info">
          <p>Company Name: {experience.companyName}</p>
          <p>Role: {experience.role}</p>
          <p>Date From: {experience.dateFrom}</p>
          <p>Date to: {experience.dateTo}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </>
  )
}
