import React from "react";
import {Button, Row, Col} from 'shards-react';
import DeleteIcon from "@material-ui/icons/Delete";
import { Container } from "@material-ui/core";
import {useDispatch} from "react-redux";
import {deletePost} from "../../../Actions/posts.js";

import useStyles from './styles';

const Post = ({ post }) => {

    const dispatch = useDispatch();
    const classes = useStyles();
    
    return (
        <div>
            <Container className={classes.card}>
            <Row>
                <Col style={{width: '100%', marginBottom: '5%'}}>
                    <Row style={{padding: '20px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                        <Col sm="12" md="4" lg="3">
                        <img src={post.selctedFile} style={{
                            width : "100px",
                        }} />           
                        </Col>
                        <Col sm="12" md="4" lg="3">
                            <Row>
                                <Col>
                                    <h4>Patient Details</h4>
                                    Name: {post.patientName} <br/>
                                    Age: {post.patientAge} <br/>
                                    Phone No: {post.patientPhone}<br/>
                                    Message: {post.message} <br/>
                                </Col>
                                <p></p>
                                <Col className={classes.cardActions}>
                                    <Button color="primary" size="small" onClick={() => dispatch(deletePost(post._id))}>
                                    <DeleteIcon /> 
                                    Delete
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            </Container>             
        </div>
    )
}

export default Post;