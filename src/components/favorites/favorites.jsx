import { useSelector, useDispatch } from "react-redux";
import style from './favorites.module.css';
import { Link } from "react-router-dom";
import { orderCards, filterCards } from "../../redux/actions/actions";



const Favorites = () => {

    const { myFavorites } = useSelector(state => state)
    const dispatch = useDispatch ();

    const handleOrder = (event)=> {
        dispatch(orderCards(event.target.value))
    }

    const handleFilter = (event)=> {
        dispatch(filterCards(event.target.value))
    }

    return (

        <div>
            <div>
                <select onChange={handleOrder}>
                    <option value="order" disabled="disabled">Order By</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select onChange={handleFilter}>
                    <option value="filter" disabled="disabled">Filter By</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
            </div>
            {
                myFavorites.map((character) => {
                    return (
                        <div className={style.container} > 
                            <img className={style.img} src={character.image} alt={character.name} />
                            <Link to={`/detail/${character.id}`}>
                            <h2 className={style.name}>{character.name}</h2>
                            </Link>
                            <div className={style.genderSpecies}>
                            <h2 >{character.species}</h2>
                            <h2 >{character.gender}</h2>
                            </div>
                        </div>

                    )
                })
            }

        </div>
    )
}

export default Favorites;