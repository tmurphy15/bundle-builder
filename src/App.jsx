import ProductList from 'components/ProductList';
import ProductCart from 'components/ProductCart';

import LogoImg from 'assets/logo.png';

import './App.scss';

function App() {
  return (
    <>
      <header>
        <img className="header-logo" src={LogoImg} alt="Lume Logo" />
      </header>
      <main>
        <section className="content">
          <ProductList />
        </section>
        <aside>
          <ProductCart />
        </aside>
      </main>
      <footer>© 2023 Bundle Builder by Terry Murphy</footer>
    </>
  );
}

export default App;
