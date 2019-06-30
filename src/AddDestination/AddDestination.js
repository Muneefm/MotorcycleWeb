import React from 'react';
import {Button, Form, Container} from 'react-bootstrap';
// import TagsInput from 'react-tagsinput'

import * as firebase from "firebase/app";
import firebaseConfig from "../Config/FirebaseConf";

const ReactTags = require('react-tag-autocomplete');

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
      status: 0,
      state: "KL",
      country: "IN",
      category: 'onroad',
      tags: [
      
      ],
      photoUrls: [
      
      ]
    }
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    this.handleAdditionPhoto = this.handleAdditionPhoto.bind(this);
    this.handleDeletePhoto = this.handleDeletePhoto.bind(this);

  }

  handleDelete (i) {
    console.log("onDeletetags got - ", this.state.tags);

    const tags = this.state.tags.slice(0)
    tags.splice(i, 1)
    this.setState({ tags })
  }
 
  handleAddition (tag) {
    const tags = [].concat(this.state.tags, tag)
    this.setState({ tags })
    console.log("tags got - ", this.state.tags);
  }


  handleDeletePhoto (i) {
    console.log("onDeletetags Photo got - ", this.state.photoUrls);

    const photoUrls = this.state.photoUrls.slice(0)
    photoUrls.splice(i, 1)
    this.setState({ photoUrls })
  }
 
  handleAdditionPhoto (photoUrl) {
    const photoUrls = [].concat(this.state.photoUrls, photoUrl)
    this.setState({ photoUrls })
    console.log("Photo got - ", this.state.photoUrls);
  }

  handleTagChange = () => {
    console.log("Tag HandleChange is called ");
  }

  onNameChange = (event) => {
    console.log("This is HandleChange - ", event.target.value, event);
    this.setState({
      name: event.target.value
    });
  }

  onPlaceChange = (event) => {
    console.log("onPlaceChange called ",event.target.value );
    this.setState({
      place: event.target.value
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

  onCategoryChange = (event) => {
    console.log("This is onCategoryChange - ", event.target.value);
    this.setState({
      category: event.target.value
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

  onDescChange = (event) => {
    console.log("This is onDescChange - ", event.target.value);
    this.setState({
      description: event.target.value
    });
  }

  handleSubmit = (event) => {
    console.log(" Handel Submitt called event  - ", event);
    firebase.firestore().collection('Destinations').add(this.state).then(() => {
      window.confirm("Success");
    }).catch(() => {
      window.confirm("Error");

    });
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


  <Form.Group controlId="base-place">
    <Form.Label>Base place</Form.Label>
    <Form.Control type="text" placeholder="Base Place"  onChange={this.onPlaceChange} />
  </Form.Group>

  <Form.Group controlId="photo">
    <Form.Label>Photo URL</Form.Label>
    <Form.Control type="text" placeholder="Enter Photo Url" onChange={this.onPhotoUrlChange}/>
  </Form.Group>


  <Form.Label>Additional Photo URL</Form.Label>
  <ReactTags
        tags={this.state.photoUrls}
        handleDelete={this.handleDeletePhoto}
        allowNew
        handleAddition={this.handleAdditionPhoto} />

  <Form.Group controlId="bestRoute">
    <Form.Label>Best Route</Form.Label>
    <Form.Control type="text" placeholder="Enter Best Route to take" onChange={this.onRouteChange} />
  </Form.Group>

  <Form.Group controlId="Category">
    <Form.Label>Category</Form.Label>
    <Form.Control as="select" onChange={this.onCategoryChange}>
    <option value="onroad">OnRoad</option>
      <option value="offroad">Offroad</option>
      <option value="trial">Trial</option>

    </Form.Control>
  </Form.Group>
  <Form.Label>Tags</Form.Label>
  <ReactTags
        tags={this.state.tags}
        handleDelete={this.handleDelete}
        allowNew
        handleAddition={this.handleAddition} />
  <Form.Group controlId="destinationDescription">
    <Form.Label>Description of the place</Form.Label>
    <Form.Control as="textarea" rows="3" onChange={this.onDescChange} />
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
