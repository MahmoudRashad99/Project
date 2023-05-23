import React, {useState, useEffect} from 'react';
import { Card, Form, InputGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './AuthForm.scss';

interface data{
    email: string
    password: string
}
  
const initialState: data = {
    email: "",
    password: ""
} 

const LoginForm: React.FC = () => {
  const [data, setData] = useState<data>(initialState)
  const [errors, setErrors] = useState<data>(initialState)
  const [errorystate, setErrorystate] = useState<boolean>(false);
  const [passwordVissble, setPasswordVissble] = useState<boolean>(false)

  useEffect(() => {
    if(errorystate){
      setErrors(initialState);
      setErrorystate(false);
    }
  }, [data])
  const LogInHandler = () => {

    //todo: implement the handler 
    console.log("attempted log in with credentials:- ");
    console.log(data.email);
    console.log(data.password);
  }

  //todo: make the function responsive to keyboard enter clicks
  return (
    
      <Card className='authentication-form'>
        <Card.Title className='authentication-form-title'>
          Log in
        </Card.Title>
        <Card.Body>
          <InputGroup className='authentication-form-group'>
            <InputGroup.Text className='authentication-form-input-icon email'>
              <FontAwesomeIcon icon={faEnvelope} />
            </InputGroup.Text>
            <Form.Control
              color='blue'
              className='authentication-form-input'
              type='text'
              placeholder='Email'
              onChange={(e) => {
                setData(old => ({...old, email: e.target.value}))
              }}
              value={data.email}
              autoFocus
            />
            
          </InputGroup>
          <InputGroup className='authentication-form-group'>
            <InputGroup.Text className='authentication-form-input-icon password'>
              <FontAwesomeIcon icon={faLock} />
            </InputGroup.Text>
            <div 
              className='authentication-form-input-visibility' 
              onClick={() => {
                setPasswordVissble(old => !old)
              }}
            >
              <FontAwesomeIcon icon={passwordVissble ? faEye : faEyeSlash} />
            </div>
            <Form.Control
              type={passwordVissble? 'text' : 'password'}
              placeholder='Password'
              className='authentication-form-input password'
              onChange={(e) => {
                setData(old => ({...old, password: e.target.value}))
              }}
              value={data.password}
            />
          </InputGroup>
          <div className='d-flex justify-content-end'>
            <Button className='authentication-form-button'
              onClick={LogInHandler}
            >
              Submit
            </Button>
          </div>
        </Card.Body>
      </Card>
  )
}

export default LoginForm;