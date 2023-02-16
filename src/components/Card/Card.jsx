import style from './Card.module.css';
import { Link } from 'react-router-dom';
import {addFavorite, deleteFavorite} from "../../redux/actions/actions"
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';


export default function Card({name, species, gender, image, onClose, id}) {

   const dispatch = useDispatch ();
   const myFavorites = useSelector(state => state.myFavorites)

   const [isFav, setIsFav] = useState (false);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav (false);
         dispatch(deleteFavorite(id))
      }
      else {
         setIsFav (true);
         dispatch(addFavorite({name, species, gender, image, onClose, id}))
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.container}>

         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }

         <button className={style.boton} onClick={onClose}>X</button>
         <img className={style.img} src={image} alt="" />
         <Link to={`/detail/${id}`}>
         <h2 className={style.name}>{name}</h2>
         </Link>
         <div className={style.genderSpecies}>
         <h2 >{species}</h2>
         <h2 >{gender}</h2>
         </div>
      </div>

   );
}
