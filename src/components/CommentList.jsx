import { Component } from 'react'
// import ListGroup from 'react-bootstrap/ListGroup'
import { ListGroup } from 'react-bootstrap'
import { Spinner } from 'react-bootstrap'
import AddComment from './AddComment'

// for fetching the comments we'll need to contact
// https://striveschool-api.herokuapp.com/api/comments/0316389706

class CommentList extends Component {

    state = {
        comments: [],
        isLoading: true
    }

    // Authorization:
    //   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDkwNzRkMTdmNzQ0NTAwMTU1OGIxMTEiLCJpYXQiOjE2MjAwNzk4MjYsImV4cCI6MTYyMTI4OTQyNn0.THfeqovKBETJeyWfyRVQb2RRHrxlfjdkmAHU3OAV0Ck",

    componentDidMount = async () => {
        this.grabData()
    }

    grabData = async () => {
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + this.props.asin, {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDkwNzRkMTdmNzQ0NTAwMTU1OGIxMTEiLCJpYXQiOjE2MjAwNzk4MjYsImV4cCI6MTYyMTI4OTQyNn0.THfeqovKBETJeyWfyRVQb2RRHrxlfjdkmAHU3OAV0Ck'
                }
            })
            if (response.ok) {
                let data = await response.json()
                console.log(data)
                this.setState({
                    comments: data,
                    isLoading: false
                })
            }
        } catch (error) {

        }
    }

    // componentDidMount for fetching the comments
    // a state for holding them
    // render them through the render method

    render() {
        return (
            <>
                <ListGroup className="text-dark">
                    {
                        this.state.isLoading && <Spinner variant="success" animation="border" role="status" />
                    }
                    {
                        this.state.comments.length === 0 && !this.state.isLoading && <p className="text-light">no comments yet!</p>
                    }
                    {
                        this.state.comments.map(c => (
                            <ListGroup.Item key={c._id}>{c.comment}</ListGroup.Item>
                        ))
                    }
                </ListGroup>
                <AddComment asin={this.props.asin} grabData={this.grabData} />
            </>
        )
    }
}

export default CommentList