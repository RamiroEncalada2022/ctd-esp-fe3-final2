import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";




const Card = ({ dentista }) => {

  const {state, dispatch} = useContextGlobal()

  const addFav = ()=>{
    const findFav = state.favs.find(fav => fav.id = dentista.id)
    // Aqui iria la logica para agregar la Card en el localStorage
    const finDentist=
    dispatch({type: "ADD_FAV", payload: dentista})

    



  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        
        <img src="/images/doctor.jpg" alt="doctor" width={' 100px'}  />        
        <Link to={`/Detalle/${dentista.id}`}>
        <h2>{dentista.name}</h2>
        </Link>
        <h3>{dentista.username}</h3>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">"⭐🌟"</button>
    </div>
  );
};

export default Card;
