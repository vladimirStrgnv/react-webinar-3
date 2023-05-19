import React, {useCallback, useState} from 'react';
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import Modal from './components/modal/index';
import Basket from './components/basket/index';


/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({store}) {
  const [modalActive, setModalActive] = useState(false);
  const [choosenProducts, setChoosenProduct] = useState(Object.values(store.getChoosenProducts()));
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);
  const list = store.getState().list;
  
  const callbacks = {
    onDeleteProduct: useCallback((product) => {
        store.deleteProduct(product);
        setChoosenProduct(Object.values(store.getChoosenProducts()));
        setCount(store.getProductsCount());
        setPrice(store.getProductsPrice());
      },
      [store]
    ),

    onAddProduct: useCallback((product) => {
        store.addProduct(product);
        setChoosenProduct(Object.values(store.getChoosenProducts()));
        setCount(store.getProductsCount());
        setPrice(store.getProductsPrice());
    }, [store]),
  };

  return (
    <>
      <PageLayout>
        <Head title="Магазин" />
        <Controls setActive={setModalActive} productsCount={count} productsPrice={price}/>
        <List
          list={list}
          btnCallback={callbacks.onAddProduct}
          btnsTitle={'Добавить'}
        />
      </PageLayout>
      <Modal active={modalActive} setActive={setModalActive}><Basket list={choosenProducts} btnCallback={callbacks.onDeleteProduct} btnsTitle={'Удалить'} setActive={setModalActive} price={price}></Basket></Modal>
    </>
  );
}

export default App;