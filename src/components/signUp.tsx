import { useState, type ChangeEvent, type FormEvent } from "react";
import clsx from "clsx";
import styles from "./signUp.module.css"; // ✅ Correct for CSS Modules

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function SignUp() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
    } else {
      setError("");
      console.log("User registered:", formData);
      alert("Signup successful!");
    }
  };

  return (
    <div className={styles.signupContainer}>
      <h2 className={styles.heading}>Sign Up</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          onChange={handleChange}
          className={styles.input}
        />
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
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          required
          onChange={handleChange}
          className={styles.input}
        />

        {error && <p className={clsx(styles.error)}>{error}</p>}

        <button type="submit" className={styles.button}>
          Register
        </button>
      </form>
    </div>
  );
}

export default SignUp;
