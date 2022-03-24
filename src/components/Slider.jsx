import { slideItems } from '../data';
import { useGlobalContext } from '../context/AppContext';

const Slider = ({ name, category, quote, slideItemIndex }) => {
  const { index } = useGlobalContext();

  let position = 'nextSlide';

  if (slideItemIndex === index) {
    position = 'activeSlide';
  }
  if (slideItemIndex === index - 1 || (index === 0 && slideItemIndex === slideItems.length)) {
    position = 'lastSlide';
  }

  return (
    <article className={`pres__slider__content ${position}`}>
      <div className="pres__slider__content__top">
        <h5 className="pres__slider__content__title">{name}</h5>
        <span className="pres__slider__content__subtitle">{category}</span>
      </div>
      <p className="pres__slider__content__text">{quote}</p>
    </article>
  );
};

export default Slider;
