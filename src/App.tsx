import React from 'react';
import LogInForm from './components/auth/AuthForm/AuthForm';
import './App.scss';



//todo: move the components to its folder

//todo: implement validation and error handling.
const App: React.FC = () => {
  return(
    <div className='d-flex justify-content-center align-items-center main-container'>
      <LogInForm />
    </div>
  )
}

export default App;
