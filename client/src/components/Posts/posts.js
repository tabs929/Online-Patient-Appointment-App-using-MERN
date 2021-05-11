import React from "react";
import { useSelector } from "react-redux";
import Post from "./post/post.js";
import { Grid, CircularProgress} from "@material-ui/core";
import useStyles from './styles';

const Posts = () => {
    const posts =useSelector((state) => state.posts)
    const classes = useStyles();

    console.log(posts);
    return (
        !posts.length ? <CircularProgress /> :(
            <Grid className={classes.container} container alignItems="stretch" spacing ={3}>
                {posts.map((post) => (
                    <Grid key={post._id} ite xs={12} sm={6}>
                        <Post post={post}/>
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default Posts;