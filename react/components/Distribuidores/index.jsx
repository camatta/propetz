import React, { useEffect, useState } from "react";

import "./distribuidores.css";

const Distribuidores = () => {

  const [id, setId] = React.useState([]);

  React.useEffect(() => {
    // getAllUser();
    getUser();
  }, []);

  const getUser = async () => {
    const api_response = await fetch(
      "https://distribuidores.propetz.com.br/distribuidores.json",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const my_user = await api_response.json();
    console.log(my_user);
    setId(my_user);
  };

  return (
    <>
      <div className="main-distribuidores">

        <div className="main-title-distribuidores">
          <h1>Nossos Distribuidores</h1>
        </div>
        
        {/* MAP */}
        {id.map((estados) => (
        <ul key="estados.id" className="estado-wrapper">
          <li className="estado-title">
            <h2>{estados.estado}</h2>
          </li>
          <div className="estado-lojas">
            <ul>
            {estados.pontos.map(ponto => (
              <li key="ponto" className="card-loja">
                <div className="cidade-loja">
                  <h3>{ponto.cidade}</h3>
                </div>
                <div className="nome-loja">
                  <h4>{ponto.nome}</h4>
                </div>
                <div className="endereco-loja">
                  <p>{ponto.end}</p>
                </div>
                <div className="telefone-loja">
                  <p>{ponto.tel}</p>
                </div>
              </li>
              ))}
            </ul>
          </div>
        </ul>
         ))}
      </div>
    </>
  )
}
  
export default Distribuidores