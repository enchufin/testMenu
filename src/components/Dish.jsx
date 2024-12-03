import PropTypes from 'prop-types';
import { useLanguage } from '../hooks/useLanguage';

const Dish = ({ dish }) => {
  const { translate } = useLanguage();

  return (
    <li key={dish.id} className="p-4 border rounded-lg shadow-md bg-white flex justify-between items-center">
      <div>
        <h3 className="text-xl font-semibold mb-2">{translate(dish.id)}</h3>
        {dish.description && <p className="text-gray-600 mb-2 text-sm md:text-base">{translate(dish.id, true)}</p>}
      </div>
      <h4 className="text-lg font-bold text-elBrasesRed text-base md:text-lg">{dish.price.toFixed(2)} €</h4>
    </li>
  );
}

Dish.propTypes = {
  dish: PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number.isRequired
  }).isRequired
}

export default Dish;