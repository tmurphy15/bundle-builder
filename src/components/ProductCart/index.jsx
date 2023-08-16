import Button from 'components/Button';
import Card from 'components/Card';

import './styles.scss';

const ProductCart = () => {
  return (
    <Card>
      <div className="bb__product-cart">
        <div className="bb__product-cart-heading">
          <p>Build Your Pack</p>
          <p>
            <s>$41.97</s> $33.99
          </p>
        </div>
        <div className="bb__product-cart-products"></div>
        <Button>Add to Cart</Button>
      </div>
    </Card>
  );
};

export default ProductCart;
