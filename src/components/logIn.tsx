import { useState, type ChangeEvent, type FormEvent } from "react";
import clsx from "clsx";
import styles from "./logIn.module.css";

interface LoginData {
  email: string;
  password: string;
}

function Login() {
  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
  });

  const [error, setError] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simple validation example
    if (!loginData.email || !loginData.password) {
      setError("Please enter both email and password.");
      return;
    }

    setError("");
    // You can add authentication logic here

    console.log("Logging in with:", loginData);
    alert("Login successful!");
  };

  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.heading}>Login</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={handleChange}
          className={styles.input}
        />

        {error && <p className={clsx(styles.error)}>{error}</p>}

        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
