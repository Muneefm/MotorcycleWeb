import React from 'react';
import {Button, Form, Container} from 'react-bootstrap';
import * as firebase from "firebase/app";
import firebaseConfig from "../Config/FirebaseConf";

require("firebase/firestore");

// const admin = require('firebase-admin');
// const serviceAccount = require('../credentials/firebase_key.json');

firebase.initializeApp(firebaseConfig);


/* admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore(); */

class AddDestination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: "KL",
      country: "IN"
    }
  }

  onNameChange = (event) => {
    console.log("This is HandleChange - ", event.target.value, event);
    this.setState({
      name: event.target.value
    });
  }

  onStateChange = (event) => {
    console.log("This is onStateChange - ", event.target.value);
    this.setState({
      state: event.target.value
    });
  }

  onCountryChange = (event) => {
    console.log("This is onCountryChange - ", event.target.value);
    this.setState({
      country: event.target.value
    });
  }


  onPhotoUrlChange = (event) => {
    console.log("This is onPhotoUrlChange - ", event.target.value);
    this.setState({
      photo: event.target.value
    });
  }


  onRouteChange = (event) => {
    console.log("This is onRouteChange - ", event.target.value);
    this.setState({
      route: event.target.value
    });
  }

  handleSubmit = (event) => {
    console.log(" Handel Submitt called event  - ", event);
    let data = {
      name: 'USA',
      state: 'CA',
      country: 'USA'
    };
    let doc = firebase.firestore().collection('Destinations').add(this.state);
    event.preventDefault();

  }

  render() {
  return (
    <div>
      <Container>
      <Form onSubmit={this.handleSubmit}>
    <Form.Group controlId="country">
    <Form.Label>Country</Form.Label>
    <Form.Control as="select" onChange={this.onCountryChange}>
      <option>India</option>
    </Form.Control>
  </Form.Group>

  <Form.Group controlId="state">
    <Form.Label>State</Form.Label>
    <Form.Control as="select" onChange={this.onStateChange}>
      <option value="KL">Kerala</option>
      <option value="TN">Tamil Nadu</option>

    </Form.Control>
  </Form.Group>

  <Form.Group controlId="name">
    <Form.Label>Location Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name"  onChange={this.onNameChange} />
  </Form.Group>

  <Form.Group controlId="photo">
    <Form.Label>Photo URL</Form.Label>
    <Form.Control type="text" placeholder="Enter Photo Url" onChange={this.onPhotoUrlChange}/>
  </Form.Group>

  <Form.Group controlId="bestRoute">
    <Form.Label>Best Route</Form.Label>
    <Form.Control type="text" placeholder="Enter Best Route to take" onChange={this.onRouteChange} />
  </Form.Group>

  <Form.Group controlId="destinationDescription">
    <Form.Label>Description of the place</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Container>

    </div>
    
  );
  }
}

export default AddDestination;
