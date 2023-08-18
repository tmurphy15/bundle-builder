import ProductListItem from 'components/ProductListItem';

import './styles.scss';

const ProductList = ({ products, cartProductsMap, onChangeQuantity, cartFilled }) => {
  return (
    <div className="product-list">
      {products.map(({ id, title: sectionTitle, products }) => (
        <div key={id} className="product-list__section">
          <h1 className="product-list__section-title">{sectionTitle}</h1>
          <div className="product-list__section-items">
            {products.map((product) => (
              <ProductListItem
                key={product.id}
                quantity={cartProductsMap[product.id]}
                onChangeQuantity={(quantity) =>
                  onChangeQuantity(product, quantity)
                }
                cartFilled={cartFilled}
                {...product}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
