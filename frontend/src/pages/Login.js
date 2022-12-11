import { criarUsuario } from "../../services/usuarioService";

export default function Login() {
  const [usuario, setUsuario] = useState({ email: "", senha: "" });

  function autenticarUsuario(event) {
    event.preventDefault();

    console.log(usuario);
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

  function cadastrar(){
    criarUsuario(usuario)
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