"use client";

import { useEffect, useState } from "react";
import Login from "../components/login";
import MembeAreas from "../components/membeArea";
import { parseCookies } from "nookies";

export default function Home() {
  const [validationUser, setValidationUser] = useState();

  useEffect(() => {
    const user = parseCookies();
    
    if (user.usuario) {
      const userArray = JSON.parse(user.usuario);
      setValidationUser(userArray[0].name);
    }
  }, []);

  return (
    <div>
      {validationUser ? <MembeAreas name={validationUser} /> : <Login />}
    </div>
  );
}
