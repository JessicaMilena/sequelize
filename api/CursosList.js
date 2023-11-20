// src/CursosList.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const CursosList = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    const fetchCursos = async () => {
      const response = await axios.get("http://localhost:3000/cursos");
      setCursos(response.data);
    };

    fetchCursos();
  }, []);

  return (
    <div>
      <h2>Lista de Cursos</h2>
      <ul>
        {cursos.map((curso) => (
          <li key={curso.id}>{curso.curso}</li>
        ))}
      </ul>
    </div>
  );
};

export default CursosList;
