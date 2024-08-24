import React, { Component } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap';

export default class LoginComponent extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        }

        this.inputName = React.createRef();
    }


    componentDidMount() {
        this.inputName.current.focus();
    }

    handleChangeName = (e) => {
        this.setState({username: e.target.value,
        } , () => {
        console.log(this.state);     
        })        
    }

    handleChangePassword = (e) => {
        this.setState({password: e.target.value,
        } , () => {
        console.log(this.state);     
        })        
    }

render() {
    return (
    <>
        <Container className='mx-auto'>
            <Row className=' mx-auto'>
                <Col md={12}>
                <Form style={{backgroundColor: "#ccc"}} className=' shadow py-5 px-4 mx-auto rounded'>
                    <h1 className=' text-center text-danger'>Login</h1>
                    <Form.Group controlId="formBasicEmail" className='mb-3'>
                        <Form.Label className='fs-4 text-danger fw-bold'>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Username" className='form-control' value={this.state.username} onChange={this.handleChangeName} ref={this.inputName}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label className='fs-4 text-danger fw-bold'>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Your Password" className='form-control' value={this.state.password} onChange={this.handleChangePassword} />
                    </Form.Group>
                </Form>
                </Col>
            </Row>
            <Row>
            <Col md={12} className='text-start'>
            <div className='user__name ms-2 my-3'>
              <h2 className='text-primary'>Hello, {this.state.username}</h2>
            </div>
            </Col>
          </Row>
        </Container>
    </>
    )
}
}
