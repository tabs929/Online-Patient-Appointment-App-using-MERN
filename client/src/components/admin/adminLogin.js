import React, { useState,useHistory } from 'react';
import { Row, Col, Card, CardBody, CardTitle, Button, CardFooter, FormInput } from 'shards-react';
import dotenv from "dotenv";
import { Redirect,Route } from 'react-router-dom'
import Dash from "../adminDash/adminDash.js";

const initial = {Username : '', Password :''};
dotenv.config();

export default function AdminLogin(){
const [isLoggedIn, setIsLoggedIn] = useState(null);
const [formData,setFormData] = useState(initial);


const handleSubmit = (e) =>{
  e.preventDefault();
  var user = process.env.Username;
  var pass = process.env.Password;
    
  if(pass === formData.Password.value && user === formData.Username.value){
    console.log(formData);
  }
  
  //dispatch(IsSignin(formData,history));
}

    return(
        <Row>
            <Col>
            </Col>
            <Col>
                <Card style={{margin: '20%', textAlign: 'center'}}>
                    <CardTitle>Admin Login</CardTitle>
                    <CardBody>
                        <Row name="Username" value={formData.Username} onChange={(e) => setFormData({ ...formData, Username: e.target.value })} style={{margin: '10px'}}><FormInput placeholder="Username" /></Row>
                        <Row name="Password" value={formData.Password} onChange={(e) => setFormData({ ...formData, Password: e.target.value })} style={{margin: '10px'}}><FormInput placeholder="Password" type="password"/></Row>
                    </CardBody>
                    <CardFooter onClick={handleSubmit}><Button >Login</Button></CardFooter>
                </Card>
            </Col>
            <Col>
            </Col>
        </Row>
    );
}