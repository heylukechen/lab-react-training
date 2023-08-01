import { useState } from 'react';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('');

  let [helloWorld, setHelloWorld] = useState('Hello');
  let [isPasswordLegit, setIsPasswordLegit] = useState(null);

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

  const grabEmail = (grabbedEmail) => {
    setEmail(grabbedEmail);
  };

  const checkPassword = (passedPassword) => {
    let regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (regex.test(passedPassword)) {
      setIsPasswordLegit(true);
      setPassword(passedPassword);
    } else {
      setIsPasswordLegit(false);
    }
  };

  return (
    <form className="card col-8 needs-validation row-gap-3" novalidate>
      <div class="form-group">
        <label for="inputEmail1">Email address</label>
        <input
          onChange={(e) => grabEmail(e.target.value)}
          type="email"
          class="form-control"
          id="inputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" class="form-text text-muted">
          You typed a valid email!
        </small>
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
      <button type="submit" class="btn btn-primary">
        Sign up
      </button>
      <div>
        <p>{helloWorld}</p>
        <p>Your email address is: {email}</p>
        <p></p>
      </div>
    </form>
  );
};

export default SignupPage;
