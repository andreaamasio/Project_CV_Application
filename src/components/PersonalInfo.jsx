import { useState } from "react"
import "../../src/index.css"
export default function PersonalInfo({ setPersonalInfo }) {
  const [info, setInfo] = useState({ name: "", email: "", phone: "" })
  const [isEditing, setIsEditing] = useState(true)
  function handleSubmit(e) {
    e.preventDefault()
    setPersonalInfo(info)
    setIsEditing(false)
  }

  function handleChange(e) {
    setInfo({ ...info, [e.target.name]: e.target.value })
  }
  return (
    <>
      {isEditing ? (
        <div className="personal-info">
          <h2>Personal Information</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name: </label>
            <input
              type="text"
              onChange={handleChange}
              value={info.name}
              name="name"
              id="name"
              placeholder="Full Name"
            />
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              onChange={handleChange}
              value={info.email}
              name="email"
              id="email"
              placeholder="Email"
            />
            <label htmlFor="phone">Phone: </label>
            <input
              type="text"
              onChange={handleChange}
              value={info.phone}
              name="phone"
              id="phone"
              placeholder="Phone"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <div className="personal-info">
          <h2>Personal Information</h2>
          <p>Name: {info.name}</p>
          <p>Email: {info.email}</p>
          <p>Phone: {info.phone}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </>
  )
}
