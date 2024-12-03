import PropTypes from 'prop-types';
import { useLanguage } from '../hooks/useLanguage';
import Dish from './Dish';

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
    <section className="my-8 text-gray-800">
      <h2 className="text-3xl font-bold mb-4 text-center text-elBrasesRed">{sectionTitle}</h2>
      <div className="grid grid-cols-1 gap-4">
        {dishes.map((dish) => (
          <Dish key={dish.id} dish={dish} />
        ))}
      </div>
    </section>
  );
}