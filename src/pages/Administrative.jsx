import { helpItems } from '../data';

//components
import Block from '../components/Block';

const Administrative = () => {
  return (
    <section className="administrative">
      <div className="administrative__wrapper">
        <div className="administrative__header">
          <div className="administrative__header__label">Aide Administrative</div>
          <h1 className="administrative__header__title">Les fiches en rapport avec <br/> les aides administratives</h1>
        </div>
        <div className="administrative__posts">
          <div className="administrative__cards">
            {helpItems.map(helpItem => (
              <Block key={helpItem.id} {...helpItem}/>
            ))}
          </div>
          <div className="post">
            <div className="post__inner">
              <h3 className="post__title">Voir toutes les fiches</h3>
              <button className="post__btn">
                <span>Voir plus</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Administrative;
