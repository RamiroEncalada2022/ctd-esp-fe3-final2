import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";




const Card = ({ dentista }) => {

  const {state, dispatch} = useContextGlobal()

  const findFav = state.favs.find(fav => fav.id === dentista.id)

  const addFav = ()=>{
    
    // Aqui iria la logica para agregar la Card en el localStorage

  
    
    
    if(findFav){
      const deleteFav = state.favs.filter(fav => fav.id !== dentista.id);
      dispatch({type: "DELETE_FAV", payload: deleteFav})
    }else{
      dispatch({type: "ADD_FAV", payload: dentista})
    }
  
  
  
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
        <button onClick={addFav} className="favButton">{findFav? "🌟 Eliminar de favoritos" : "⭐"}</button>
    </div>
  );
};

export default Card;
