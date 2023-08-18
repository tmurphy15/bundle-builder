import { RoundedButton } from 'components/Button';
import Card from 'components/Card';

import './styles.scss';

const ProductListItem = ({ title, image }) => {
  return (
    <div className="product-list-item">
      <Card>
        <div className="product-list-item__inner">
          <h3 className="product-list-item__title">{title}</h3>
          <img className="product-list-item__image" src={image} alt={title} />
          <div className="product-list-item__actions">
            <RoundedButton>-</RoundedButton>
            <div className="product-list-item__quantity">0</div>
            <RoundedButton>+</RoundedButton>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductListItem;
