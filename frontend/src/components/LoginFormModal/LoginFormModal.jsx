import { useState } from "react";
import { thunkLogin } from "../../redux/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import * as sessionActions from '../../redux/session';
import "./LoginForm.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  const handleSubmit = async (e, demoEmail = email, demoPassword = password) => {
    e.preventDefault();

    const serverResponse = await dispatch(thunkLogin({ email: demoEmail, password: demoPassword }));
  
    if (serverResponse?.errors) {
      setErrors(serverResponse.errors);
    } else {
      closeModal();
    }
  };
  

  return (
    <div className="login-modal">
      <h1>Log In</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        {errors.email && <p>{errors.email}</p>}
        <label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {errors.password && <p>{errors.password}</p>}
        <button type="submit">Log In</button>
        <button
          className='demo-user'
          type="button" 
          onClick={(e) => handleSubmit(e, 'freestyle@user.io', 'password')}
        >
          Demo Admin
        </button>
      </form>
      <p>*For admin, use Demo</p>
    </div>
  );
}

export default LoginFormModal;