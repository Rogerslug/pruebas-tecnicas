import React, { useState, useEffect } from 'react'; //Se importan react y dos hooks
import axios from 'axios'; //Se importa axios para las peticiones http

const Pokeapi = () => { //Se define componente Pokeapi como una función
  const [data, setData] = useState(null); //Se define un estado data y una función de llamada setData

  useEffect(() => { //Se usa el hook useEffect para ejecutar una función se monta
    axios.get('https://pokeapi.co/api/v2/pokemon/ditto') //Petición Get en la Url para obtener datos de ditto 
      .then((response) => { // Se resuelve la petición y  actualiza el estado data con la respuesta
        setData(response.data); //Se pasa como array vacío para que se ejecute una vez 
      });
  }, []);

  return ( //Se devuelve el JSX que se va a renderizar en el componente
    <div>
      {data && ( // Operador lógico condicionando el renderizado del contenido 
        <div>
          <h1>{data.name}</h1> //Nombre del Pokemon
          <p>Height: {data.height}</p> //Altura del Pokemon
          <p>Weight: {data.weight}</p> //Peso del Pokemon
        </div>
      )}
    </div>
  );
};

export default Pokeapi; //Exporta Pokeapi
