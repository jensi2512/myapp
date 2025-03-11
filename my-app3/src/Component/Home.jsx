import React, { useState } from 'react';

function Home() {
  const [firstname, setFirstname] = useState("")
  const [secondname, setSecondname] = useState("")
  const [email, setEmail] = useState("")
  const [phonenumber, setPhonenumber] = useState("")
  const [address, setAddress] = useState("")
  const [data, setData] = useState([])
 
  function handleSubmit(e) {
    e.preventDefault()
    setData((preval) => [...preval, { firstname, secondname, email, phonenumber }])
    setEmail("")
    setSecondname("")
    setFirstname("")
    setPhonenumber("")
    setAddress("")
  }

  function handleFirstname(e) {
    setFirstname(e.target.value)
  }
  function handleSecondname(e) {
    setSecondname(e.target.value)
  }

  function handleEmail(e) {
    setEmail(e.target.value)
  }

  function handlePhonenumber(e) {
    setPhonenumber(e.target.value)
  }

  function handleAddress(e) {
    setAddress(e.target.value)
  }

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-5 m-auto">
            <form action="" onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Firstname" aria-label="Firstname" aria-describedby="basic-addon1" value={firstname} onChange={handleFirstname} />
              </div>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Secondname" aria-label="Secondname" aria-describedby="basic-addon1" value={secondname} onChange={handleSecondname} />
              </div>
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" value={email} onChange={handleEmail} />
              </div>
              <div className="input-group mb-3">
                <input type="number" className="form-control" placeholder="Phonenumber" aria-label="Phonenumber" aria-describedby="basic-addon1" value={phonenumber} onChange={handlePhonenumber} />
              </div>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Address" aria-label="Address" aria-describedby="basic-addon1" value={address} onChange={handleAddress} />
              </div>
              <button type="submit" className="btn btn-success">Submit</button>
            </form>
          </div>
        </div>

        <hr />
        <div className="row">
          <div className="col-5 m-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Firstname</th>
                  <th>Secondname</th>
                  <th>Email</th>
                  <th>Phonenumber</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                {data.length > 0 && data.map((ele, index) => (
                  <tr key={index}>
                    <td>{ele.firstname}</td>
                    <td>{ele.secondname}</td>
                    <td>{ele.email}</td>
                    <td>{ele.phonenumber}</td>
                    <td>{ele.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home;