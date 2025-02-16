import { useState } from "react"
export default function PersonalInfo() {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  return (
    <>
      <label>
        Full Name{" "}
        <input
          type="text"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
        />{" "}
      </label>
      <label>
        Email{" "}
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />{" "}
      </label>
      <label>
        Phone Number{" "}
        <input
          type="phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />{" "}
      </label>
    </>
  )
}
