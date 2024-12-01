import PropTypes from 'prop-types';
import { useLanguage } from '../hooks/useLanguage';

Section.propTypes = {
  title: PropTypes.string.isRequired,
  dishes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number.isRequired
  })).isRequired
};

export default function Section({ title, dishes }) {
  const { translate } = useLanguage();
  const sectionTitle = translate(title);

  return (
    <section className={'my-8 text-gray-800'}>
      <h2 className="text-2xl font-bold mb-4">{sectionTitle}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ul>
          {dishes.map((dish) => (
            <li key={dish.id}>
              <h3>{translate(dish.id)}</h3>
              {dish.description && <p>{translate(dish.id, true)}</p>}
              <h4>{dish.price}</h4>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}