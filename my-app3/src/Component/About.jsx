import React, { useState } from 'react';

function About() {

    const [formData, setFormData] = useState({ firstname: "", secondname: "", email: "", phonenumber: "" })
    const [data, setData] = useState([])

    function handleSubmit(e) {
        e.preventDefault()
        setData((preval) => [...preval, formData])
        setFormData({ firstname: "", secondname: "", email: "", phonenumber: "" })
    }

    function handleChange(e) {
        setFormData((preval) => ({ ...preval, [e.target.name]: e.target.value }))
    }


    return (
        <div>
            <div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-5 m-auto">
                            <form action="" onSubmit={handleSubmit}>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Firstname" aria-label="Firstname" aria-describedby="basic-addon1" value={formData.firstname} name='firstname' onChange={handleChange} />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Secondname" aria-label="Secondname" aria-describedby="basic-addon1" value={formData.secondname} name='secondname' onChange={handleChange} />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" value={formData.email} name='email' onChange={handleChange} />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="number" className="form-control" placeholder="Phonenumber" aria-label="Phonenumber" aria-describedby="basic-addon1" value={formData.phonenumber} name='phonenumber' onChange={handleChange} />
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
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.length > 0 && data.map((ele, index) => (
                                        <tr key={index}>
                                            <td>{ele.firstname}</td>
                                            <td>{ele.secondname}</td>
                                            <td>{ele.email}</td>
                                            <td>{ele.phonenumber}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;