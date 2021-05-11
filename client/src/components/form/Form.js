import React, { useState} from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch} from 'react-redux';
import FileBase from 'react-file-base64';


import useStyles from './styles';
import { createPost } from '../../Actions/posts.js';


    
const Form = () => {
    const [postData, setPostData] = useState({ patientName: '', patientAge: '', patientPhone: '', message: '', selctedFile: '' });
    const classes = useStyles();
    const dispatch = useDispatch();
    

    const handleSubmit = async (e) => {
      e.preventDefault();
      dispatch(createPost(postData));
    };
  
    return (
      <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <Typography variant="h6">Patient Info</Typography>
          <TextField name="patientName" variant="outlined" label="Name" fullWidth value={postData.patientName} onChange={(e) => setPostData({ ...postData, patientName: e.target.value })} />
          <TextField name="patientAge" variant="outlined" label="Age" fullWidth value={postData.patientAge} onChange={(e) => setPostData({ ...postData, patientAge: e.target.value })} />
          <TextField name="patientPhone" variant="outlined" label="Phone No" fullWidth value={postData.patientPhone} onChange={(e) => setPostData({ ...postData, patientPhone: e.target.value})} />
          <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
          <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selctedFile: base64 })} /></div>
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        </form>
      </Paper>
    );
  };

export default Form;