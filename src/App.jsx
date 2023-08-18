import { useMemo, useState } from 'react';

import LogoImg from 'assets/logo.png';
import ProductList from 'components/ProductList';
import ProductCart from 'components/ProductCart';
import sampleProducts from 'sampleProducts';

import './App.scss';

function App() {
  const [cartProducts, setCartProducts] = useState([]);

  const cartProductsMap = useMemo(() => {
    return cartProducts.reduce(
      (acc, product) => ({ ...acc, [product.id]: (acc[product.id] ?? 0) + 1 }),
      {}
    );
  }, [cartProducts]);

  const handleChangeQuantity = (product, quantity) => {
    const productId = product.id;
    const currentQuantity = cartProductsMap[productId] ?? 0;
    const totalQuantity = cartProducts.length;

    const newQuantity = currentQuantity + quantity;
    const newTotalQuantity = totalQuantity + quantity;

    if (newQuantity < 0 || newTotalQuantity > 3) {
      // invalid action, so just return
      return;
    }

    if (quantity === 1) {
      setCartProducts([...cartProducts, product]);
    } else if (quantity === -1) {
      // need to find the last matching item before removing
      const newCartProducts = cartProducts.slice();
      const indexToRemove = newCartProducts
        .reverse()
        .findIndex((item) => item.id === product.id);

      newCartProducts.splice(indexToRemove, 1);

      setCartProducts(newCartProducts.reverse());
    }
  };

  return (
    <>
      <header>
        <img className="header-logo" src={LogoImg} alt="Lume Logo" />
      </header>
      <main>
        <section className="content">
          <ProductList
            products={sampleProducts}
            cartProductsMap={cartProductsMap}
            onChangeQuantity={handleChangeQuantity}
            cartFilled={cartProducts.length === 3}
          />
        </section>
        <aside>
          <ProductCart
            cartProducts={cartProducts}
            cartFilled={cartProducts.length === 3}
          />
        </aside>
      </main>
      <footer>© 2023 Bundle Builder by Terry Murphy</footer>
    </>
  );
}

export default App;
