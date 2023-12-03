"use client";
import { useState } from 'react';
import { login, LoginRequestBody } from '@/services/Login';
import Layout from "@/components/Layout";

const LoginPage = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const loginData: LoginRequestBody = {
      email,
      password,
    };

    try {
      const tokenResponse = await login(loginData);
      // Use the token as needed (e.g., store it in a state, localStorage, etc.)
      console.log('Token:', tokenResponse.token);
    } catch (error) {
      console.error('Login failed:', error);
      // Handle the error (e.g., show an error message to the user)
    }
  };

  return (
    <Layout>
    <div>
      <h1>Login Page</h1>
      <label>
        email:
        <input type="text" value={email} onChange={(e) => setemail(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
    </Layout>
  );
};

export default LoginPage;

