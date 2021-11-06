import { login, logout } from "../features/User";

import React from "react";
import styles from "./Login.module.css";
import { useAppDispatch } from "../app/hooks";

interface Props {}

const Login: React.FC<Props> = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.login}>
      <button
        onClick={() =>
          dispatch(login({ name: "Deez", age: 69, email: "email@gmail.com" }))
        }
      >
        Log In
      </button>
      <button onClick={() => dispatch(logout())}>Log Out</button>
    </div>
  );
};

export default Login;
