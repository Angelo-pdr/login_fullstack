import { destroyCookie } from "nookies";

const MembeAreas = ({ name }) => {
  const logutUser = () => {
    destroyCookie(null, "usuario");
  };

  return (
    <div>
      <h1>{name.toUpperCase()}</h1>
      <button onClick={logutUser}>Sair</button>
    </div>
  );
};

export default MembeAreas;
