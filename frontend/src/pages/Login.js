import { criarUsuario, auth } from "../services/UsuarioService";
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [usuario, setUsuario] = useState({ email: "", senha: "" });
  const navigate = useNavigate()

  async function autenticarUsuario(event) {
    event.preventDefault();
    await auth(usuario)
    navigate("/")
    return false;
  }

  function handleInput(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setUsuario((informacoesAnteriores) => ({
      ...informacoesAnteriores,
      [name]: value,
    }));
  }

  async function cadastrar(){
    await criarUsuario(usuario)
    await auth(usuario)
    navigate("/")
  }


return (
  <>
  <h2>AUTENTICAR</h2>
    <form onSubmit={autenticarUsuario}>
      <div class="mb-3">
        <label for="email" class="form-label">
          E-mail
        </label>
        <input
          type="email"
          name="email"
          class="form-control"
          onChange={handleInput}
        />
      </div>
      <div class="mb-3">
        <label for="senha" class="form-label">
          Senha
        </label>
        <input
          type="password"
          name="senha"
          class="form-control"
          onChange={handleInput}
        />
      </div>
      <button type="submit" class="btn btn-primary">
        Entrar
      </button>
      <button type="button" class="btn btn-secondary" onClick={cadastrar}>
        Cadastrar
      </button>
    </form>
  </>
);
}