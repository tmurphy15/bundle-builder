import Card from 'components/Card';
import sampleProducts from 'sampleProducts.js';

import './styles.scss';

const ProductList = () => {
  return (
    <div className="bb__product-list">
      {sampleProducts.map(({ id, title: sectionTitle, products }) => (
        <div key={id} className="bb__product-list-section">
          <h1>{sectionTitle}</h1>
          {products.map(({ id, title: productTitle, image }) => (
            <Card>
              <div key={id} className="bb__product-list-product">
                {productTitle}
                <img src={image} alt={productTitle} />
              </div>
            </Card>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
