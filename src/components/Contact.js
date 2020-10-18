import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import firebaseDatabase from '../firebase';

const Contact = () => {

  const [contacts, setContact] = useState({});
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    firebaseDatabase.child('contacs').on('value', snapshot => {
      if (snapshot.val() != null) {
        setContact({
          ...snapshot.val()
        })
      } else {
        setContact({})
      }
    })
  }, []);

  const addOrEdit = (object) => {
    if (currentId) {
      firebaseDatabase.child(`contacs/${currentId}`).set(
        object,
        error => {
          if (error) console.log(error);
        }
      )
    } else {
      firebaseDatabase.child('contacs').push(
        object,
        error => {
          if (error) console.log(error);
        }
      )
    }
    setCurrentId(null);
  }

  const handleRemove = (contact) => {
    if (window.confirm('U sure want to delete this record??')) {
      firebaseDatabase.child(`contacs/${contact}`).remove(
        error => {
          if (error) console.log(error);
        }
      )
    }
  }

  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="text-center">Contact</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <ContactForm {...({ addOrEdit, contacts, currentId })} />
        </div>
        <div className="col-md-7">
          <table className="table table-borderless table-stripped">
            <thead className="thead-light">
              <tr>
                <th>FullName</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(contacts).map((contact) => {
                return (
                  <tr key={contact} >
                    <td>{contacts[contact].fullname}</td>
                    <td>{contacts[contact].mobile}</td>
                    <td>{contacts[contact].email}</td>
                    <td>
                      <div className="row">
                        <button className="btn text-success" onClick={() => { setCurrentId(contact) }}>
                          <i className="fas fa-pencil-alt" />
                        </button>
                        <button className="btn text-danger" onClick={() => handleRemove(contact)} >
                          <i className="fas fa-trash-alt" />
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Contact
