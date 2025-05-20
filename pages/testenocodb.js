
import React from 'react';
export default function TestenocdbPage() {
  React.useEffect(() => {
    async function carregar() {
      const res = await fetch('http://localhost:3333/testenocdb');
      const data = await res.json();
      console.log(data);
    }

    carregar();
  }, []);

  return (
    <div>
      <h1>Teste NocoDB</h1>
    </div>
  );
}
