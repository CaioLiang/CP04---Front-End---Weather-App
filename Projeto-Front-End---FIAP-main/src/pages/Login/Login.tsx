import { useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";

export default function Login() {

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event?.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event?.target.value);
  };

  const handleClick = () => {

    const params = {
      login: login,
      password: password
    } // API - JSON
    console.log(params)

    console.log(login, password);
  };

  return (
    <Layout>
      <h1>Login</h1>
      <form action="">
        <Input type="text" id="login" label="Login" name="login" onChange={handleLogin} />

        <Input type="password" id="senha" label="senha" name="senha" onChange={handlePassword} />

        <Button type="button" onClick={handleClick}>Logar</Button>
      </form>
    </Layout>
  )
}
