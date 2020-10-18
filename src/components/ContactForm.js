import React, { useState, useEffect } from 'react'

const ContactForm = ({ addOrEdit, currentId, contacts }) => {
  const initialFieldValues = {
    fullname: '',
    mobile: '',
    email: '',
    address: ''
  };

  const [values, setValues] = useState(initialFieldValues);

  useEffect(() => {
    if (currentId)
      setValues(contacts[currentId]);

  }, [currentId, contacts]);

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  }

  const handleClick = event => {
    event.preventDefault();
    addOrEdit(values);
  }

  return (
    <>
      <form autoComplete="off">
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user" ></i>
            </div>
          </div>
          <input className="form-control" name="fullname" placeholder="username" onChange={handleChange} value={values.fullname} />
        </div>
        <div className="form-row">
          <div className="form-group input-group col-md-6">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fas fa-mobile" ></i>
              </div>
            </div>
            <input className="form-control" name="mobile" placeholder="phone" onChange={handleChange} value={values.mobile} />
          </div>
          <div className="form-group input-group col-md-6">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fas fa-envelope" ></i>
              </div>
            </div>
            <input className="form-control" name="email" placeholder="email" onChange={handleChange} value={values.email} />
          </div>
        </div>
        <div className="form-group">
          <label>Address</label>
          <textarea className="form-control" name="address" onChange={handleChange} value={values.address}></textarea>
        </div>
        <button className="btn btn-primary btn-block" onClick={handleClick}>{currentId ? 'update' : 'save'}</button>
      </form></>
  )
}

export default ContactForm
