import PostMessage from '../models/postMessage.js';
import mongoose from 'mongoose';
import express from 'express';

const router = express.Router();

export const getPosts = async (req,res) => {
    try {
        const postMessages = await PostMessage.find();

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message : error.message});
    }
}

export const createPosts = async(req ,res) => {

    const {patientName, patientAge, patientPhone, message, selctedFile } = req.body;

    const newPost = new PostMessage({patientName, patientAge, patientPhone, message, selctedFile });

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message:error.message});
    }
}

export const deletePost = async (req,res) => {
    const {  id  } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("no post match!1");

    await PostMessage.findByIdAndRemove(id);

    res.json({message : "Post deleted successsfully!!!" });

}

export default router;