import Button from 'components/Button';
import Card from 'components/Card';

import './styles.scss';

const ProductCart = ({ cartProducts, cartFilled }) => {
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
          {[...Array(3)].map((_, index) => (
            <div key={index} className="product-cart__products-item">
              {cartProducts[index] && (
                <img
                  className="product-cart__products-image"
                  src={cartProducts[index].image}
                  alt={cartProducts[index].title}
                />
              )}
            </div>
          ))}
        </div>
        <div className="product-cart__actions">
          <Button disabled={!cartFilled}>Add to Cart</Button>
        </div>
      </Card>
    </div>
  );
};

export default ProductCart;
