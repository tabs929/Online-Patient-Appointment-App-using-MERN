import { Container } from '@material-ui/core'
import React from 'react'
import Posts from "../Posts/posts.js"

function adminDash() {
    return (
        <div>
            <Container style={{
                marginTop:'200px',
            }}>
            </Container>
            <Posts />
        </div>
    )
}

export default adminDash
