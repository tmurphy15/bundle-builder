import ProductList from 'components/ProductList';
import ProductCart from 'components/ProductCart';

import LogoImg from 'assets/logo.png';

import './App.scss';

function App() {
  return (
    <>
      <header className="bb__header">
        <img className="bb__header-logo" src={LogoImg} alt="Lume Logo" />
      </header>
      <main className="bb__main">
        <section className="bb__content">
          <ProductList />
        </section>
        <aside className="bb__aside">
          <ProductCart />
        </aside>
      </main>
    </>
  );
}

export default App;
