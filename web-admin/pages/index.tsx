// pages/index.tsx

import React, { useEffect, useState } from "react";
import { db } from "../config/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export default function Home() {
  const [usuarios, setUsuarios] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const querySnapshot = await getDocs(collection(db, "usuarios"));
        const lista = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsuarios(lista);
      } catch (err: any) {
        setError("Error al cargar usuarios: " + err.message);
      }
    }

    fetchData();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>QRingPro WebAdmin</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {usuarios.length > 0 ? (
        <>
          <h2>Usuarios en Firestore</h2>
          <ul>
            {usuarios.map((u) => (
              <li key={u.id}>
                {u.nombre} ({u.email})
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>No hay usuarios cargados aún.</p>
      )}
    </div>
  );
}
