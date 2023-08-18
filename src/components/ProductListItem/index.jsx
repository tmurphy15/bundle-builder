import { RoundedButton } from 'components/Button';
import Card from 'components/Card';
import { classNames } from 'utils/classNames';

import './styles.scss';

const ProductListItem = ({
  title,
  image,
  quantity = 0,
  onChangeQuantity,
  cartFilled,
}) => {
  return (
    <div className="product-list-item">
      <Card>
        <div className="product-list-item__inner">
          <h3 className="product-list-item__title">{title}</h3>
          <img className="product-list-item__image" src={image} alt={title} />
          <div
            className={classNames(
              'product-list-item__actions',
              cartFilled && !quantity && 'disabled'
            )}
          >
            <RoundedButton onClick={() => onChangeQuantity(-1)}>
              -
            </RoundedButton>
            <div
              className={classNames(
                'product-list-item__quantity',
                quantity && 'filled'
              )}
            >
              {quantity}
            </div>
            <RoundedButton onClick={() => onChangeQuantity(+1)}>
              +
            </RoundedButton>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductListItem;
