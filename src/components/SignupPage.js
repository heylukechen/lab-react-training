import { isDisabled } from '@testing-library/user-event/dist/utils';
import { useState } from 'react';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let [helloWorld, setHelloWorld] = useState('Hello');
  let [isPasswordLegit, setIsPasswordLegit] = useState(null);
  let [isEmailLegit, setIsEmailLegit] = useState(null);

  const checkHelloWorld = (language) => {
    console.log(language);
    if (language === 'fr') {
      setHelloWorld('Bonjour');
    } else if (language === 'de') {
      setHelloWorld('Hallo');
    } else {
      setHelloWorld('Hello');
    }
  };

  const validateEmail = (mail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      setIsEmailLegit(true);
    } else {
      setIsEmailLegit(false);
    }
  };

  const grabEmail = (grabbedEmail) => {
    setEmail(grabbedEmail);
  };

  const checkPassword = (passedPassword) => {
//button can be disbaled
    let regex = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");
    console.log(regex.test(passedPassword));

    if (regex.test(passedPassword)) {
      setIsPasswordLegit(true);
      setPassword(passedPassword);
    } else {
      setIsPasswordLegit(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="card col-8 needs-validation row-gap-3"
      novalidate
    >
      <div class="form-group">
        <label for="inputEmail1">Email address</label>
        <input
          onChange={(e) => {
            grabEmail(e.target.value);
            validateEmail(e.target.value);
          }}
          type="email"
          class="form-control"
          id="inputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        {email.length > 0 &&
          (isEmailLegit ? (
            <small style={{ color: 'green' }}>Your email is legit!</small>
          ) : (
            <small style={{ color: 'red' }}>Your email is invalid!</small>
          ))}
      </div>
      <div class="form-group">
        <label for="inputPassword1">Password</label>
        <input
          onChange={(e) => {
            checkPassword(e.target.value);
          }}
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
        {password.length > 0 &&
          (isPasswordLegit ? (
            <small style={{ color: 'green' }}>Your password is strong</small>
          ) : (
            <small style={{ color: 'red' }}>Your password is too weak</small>
          ))}
      </div>
      <div class="form-group">
        <label for="inputNationality">Nationality</label>
        <select
          onChange={(e) => checkHelloWorld(e.target.value)}
          class="form-control"
          id="inputNationality"
          defaultValue={'en'}
        >
          <option>de</option>
          <option>en</option>
          <option>fr</option>
        </select>
      </div>
      
      <button disabled={(!isPasswordLegit)||(!isEmailLegit)} type="submit" class="btn btn-primary">
        Sign up
      </button>
      <div>
        <p>{helloWorld}</p>
        <p>Your email address is: {email}</p>
        {(isPasswordLegit&&isEmailLegit) && <p>You can legible to sign up!</p> }
      </div>
    </form>
  );
};

export default SignupPage;
