//components
import Card from '../components/Card';

const ListCard = ({ title, cards, urlPrefix }) => {
  return (
    <div className="listcard">
      <h4 className="listcard__title">{title}</h4>
      <div className="listcard__item">
        {/*{cards.map(card => {*/}
        {/*  <Card key={card.id} {...card} urlPrefix={urlPrefix}/>*/}
        {/*})}*/}
      </div>
    </div>
  );
};

export default ListCard;
