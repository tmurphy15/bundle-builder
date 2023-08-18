import Button from 'components/Button';
import Card from 'components/Card';

import './styles.scss';

const ProductCart = () => {
  return (
    <div className="product-cart">
      <Card>
        <div className="product-cart__heading">
          <h3 className="product-cart__heading-title">Build Your Pack</h3>
          <div className="product-cart__heading-price">
            <s>$41.97</s> $33.99
          </div>
        </div>
        <div className="product-cart__products">
          <div className="product-cart__products-item"></div>
          <div className="product-cart__products-item"></div>
          <div className="product-cart__products-item"></div>
        </div>
        <div className="product-cart__actions">
          <Button>Add to Cart</Button>
        </div>
      </Card>
    </div>
  );
};

export default ProductCart;
