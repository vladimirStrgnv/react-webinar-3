import React, {useCallback, useState} from 'react';
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import Modal from './components/modal/index';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({store}) {
  const [modalActive, setModalActive] = useState(false);
  const list = store.getState().list;

  const callbacks = {
    onDeleteItem: useCallback(
      (code) => {
        store.deleteItem(code);
      },
      [store]
    ),

    onSelectItem: useCallback(
      (code) => {
        store.selectItem(code);
      },
      [store]
    ),

    onAddItem: useCallback(() => {
      store.addItem();
    }, [store]),

    onAddProduct: useCallback((product) => {
        store.addProduct(product);
    }, [store]),
  };

  return (
    <>
      <PageLayout>
        <Head title="Приложение на чистом JS" />
        <Controls setActive={setModalActive} />
        <List
          list={list}
          onDeleteItem={callbacks.onDeleteItem}
          onAddProduct={callbacks.onAddProduct}
        />
      </PageLayout>
      <Modal active={modalActive} setActive={setModalActive}></Modal> 
    </>
  );
}

export default App;