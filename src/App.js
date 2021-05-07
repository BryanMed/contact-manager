import { useEffect, useState } from "react";
import firebase from "firebase";
import "./App.css";
import { db } from "./firebase_config";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Alert,
} from "react-bootstrap";

const App = () => {
  // user data
  const [allUsers, setAllUsers] = useState([]);
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [success, setSuccess] = useState(false);

  // validation
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [emailValidMsg, setEmailValidMsg] = useState("");

  const [firstNameIsValid, setFirstNameIsValid] = useState(false);
  const [firstNameValidMsg, setFirstNameValidMsg] = useState("");

  const [lastNameIsValid, setLastNameIsValid] = useState(false);
  const [lastNameValidMsg, setLastNameValidMsg] = useState("");

  const [companyIsValid, setCompanyIsValid] = useState(false);
  const [companyValidMsg, setCompanyValidMsg] = useState("");

  const [phoneIsValid, setPhoneIsValid] = useState(false);
  const [phoneValidMsg, setPhoneValidMsg] = useState("");

  const emailRegex = /\S+@\S+\.\S+/;
  const onlyTextRegex = /^[a-z]+$/i;
  const onlyNumberRegex = /^\d+$/;
  const alphanumericalRegex = /^[a-z0-9]+$/i;

  //tengo que hacerlo funcion/componente
  const validateEmail = (event) => {
    const email = event.target.value;
    if (emailRegex.test(email)) {
      setEmailIsValid(true);
      setEmailValidMsg("Your email looks good");
    } else {
      setEmailIsValid(false);
      setEmailValidMsg("Please enter a valid email");
    }
  };

  const validateFirstName = (e) => {
    const firstName = e.target.value;
    if (onlyTextRegex.test(firstName)) {
      setFirstNameIsValid(true);
      setFirstNameValidMsg("Valid text");
    } else {
      setFirstNameIsValid(false);
      setFirstNameValidMsg("Please enter only text");
    }
  };

  const validateLastName = (e) => {
    const lastName = e.target.value;
    if (onlyTextRegex.test(lastName)) {
      setLastNameIsValid(true);
      setLastNameValidMsg("Valid text");
    } else {
      setLastNameIsValid(false);
      setLastNameValidMsg("Please enter only text");
    }
  };

  const validateCompany = (e) => {
    const company = e.target.value;
    if (alphanumericalRegex.test(company)) {
      setCompanyIsValid(true);
      setCompanyValidMsg("Valid text");
    } else {
      setCompanyIsValid(false);
      setCompanyValidMsg("Please enter only alphanumerical values");
    }
  };

  const validatePhone = (e) => {
    const phone = e.target.value;
    if (onlyNumberRegex.test(phone)) {
      setPhoneIsValid(true);
      setPhoneValidMsg("Valid number");
    } else {
      setPhoneIsValid(false);
      setPhoneValidMsg("Please enter only number characters");
    }
  };

  useEffect(() => {
    getUsers();
  }, [firstName]);

  const addUser = (e) => {
    e.preventDefault();
    db.collection("users").add({
      firstName,
      lastName,
      company,
      phone,
      email,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setfirstName("");
    setLastName("");
    setCompany("");
    setPhone("");
    setEmail("");

    setSuccess(true);
  };

  const getUsers = () => {
    db.collection("users").onSnapshot(function (querySnapshot) {
      setAllUsers(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          firstName: doc.data().firstName,
          lastName: doc.data().lastName,
          company: doc.data().company,
          phone: doc.data().phone,
          email: doc.data().email,
        }))
      );
    });
  };

  const deleteContact = (id) => {
    // db.collection("users").doc(id).delete();
    console.log(id);
  };

  return (
    <div className="App">
      <div id="form-format">
        <Container>
          <Row>
            <Col xs={4}>
              <h3>👤 Create a new contact</h3>
              <Form>
                <Form.Group>
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    type="text"
                    required="true"
                    placeholder="first name"
                    value={firstName}
                    onChange={(e) => {
                      validateFirstName(e);
                      setfirstName(e.target.value);
                    }}
                  />
                  <div
                    className={`message ${
                      firstNameIsValid ? "success" : "error"
                    }`}
                  >
                    {firstNameValidMsg}
                  </div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="last name"
                    value={lastName}
                    onChange={(e) => {
                      validateLastName(e);
                      setLastName(e.target.value);
                    }}
                  />
                  <div
                    className={`message ${
                      lastNameIsValid ? "success" : "error"
                    }`}
                  >
                    {lastNameValidMsg}
                  </div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Company</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="company"
                    value={company}
                    onChange={(e) => {
                      validateCompany(e);
                      setCompany(e.target.value);
                    }}
                  />
                  <div
                    className={`message ${
                      companyIsValid ? "success" : "error"
                    }`}
                  >
                    {companyValidMsg}
                  </div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="phone number"
                    value={phone}
                    onChange={(e) => {
                      validatePhone(e);
                      setPhone(e.target.value);
                    }}
                  />
                  <div
                    className={`message ${phoneIsValid ? "success" : "error"}`}
                  >
                    {phoneValidMsg}
                  </div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email Adress</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="example@email.com"
                    value={email}
                    onChange={(e) => {
                      validateEmail(e);
                      setEmail(e.target.value);
                    }}
                  />
                  <div
                    className={`message ${emailIsValid ? "success" : "error"}`}
                  >
                    {emailValidMsg}
                  </div>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={addUser}>
                  Add new contact
                </Button>
              </Form>
            </Col>

            <Col xs={8}>
              <h1>Contactos</h1>

              {allUsers.map((user) => (
                <Card style={{ color: "black" }}>
                  <Card.Body>
                    <Card.Title>
                      {user.firstName} {user.lastName}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {user.company}
                    </Card.Subtitle>
                    <Card.Text>
                      <ul>
                        <li>{user.phone}</li>
                        <li>{user.email}</li>
                      </ul>
                    </Card.Text>
                    <Button variant="danger" onClick={deleteContact(user.id)}>
                      Delete
                    </Button>
                  </Card.Body>
                </Card>
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default App;
