import ProductListItem from 'components/ProductListItem';

import sampleProducts from 'sampleProducts';

import './styles.scss';

const ProductList = () => {
  return (
    <div className="product-list">
      {sampleProducts.map(({ id, title: sectionTitle, products }) => (
        <div key={id} className="product-list__section">
          <h1 className="product-list__section-title">{sectionTitle}</h1>
          <div className="product-list__section-items">
            {products.map((product) => (
              <ProductListItem key={product.id} {...product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
