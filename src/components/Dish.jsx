import  PropTypes  from 'prop-types';
import { useLanguage } from '../hooks/useLanguage';



const Dish = ({ dish }) => {  
      const {translate} = useLanguage(); 

      return(
            <li key={dish.id}>
              <h3>{translate(dish.id)}</h3>
              {dish.description && <p>{translate(dish.id, true)}</p>}
              <h4>{dish.price}</h4>
            </li>
      )
}

Dish.propTypes = {
      dish: PropTypes.shape({
      id: PropTypes.string.isRequired,
      description: PropTypes.string,
      price: PropTypes.number.isRequired
      }).isRequired
}

export default Dish;