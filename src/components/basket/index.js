import React from 'react';
import './style.css';
import Head from '../head/index';
import List from '../list/index';

const Basket = ({list, btnsTitle, btnCallback, setActive, price}) => {
  return (
    <section className='basket'>
        <div className='basket__header'>
            <Head title={'Корзина'}></Head>
            <button className='basket__close-btn' onClick={()=> {setActive(false)}}>Закрыть</button>
        </div>
        <List
          list={list}
          btnCallback={btnCallback}  
          btnsTitle={btnsTitle}
        />
        <div className='basket__total-price'>
            <h2>Итого</h2>
            <span>{price}₽</span>
        </div>
    </section>    
  )
}

export default Basket;