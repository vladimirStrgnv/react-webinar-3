import React from "react";
import PropTypes from 'prop-types';
import './style.css';

function Controls({setActive, productsCount, productsPrice}){

  return (
    <div className='Controls'>
      <p className='Controls__backet-info'>
        В корзине:{productsCount?<span className='Controls__price'>{`${productsCount} товара / ${productsPrice}₽`}</span>:  <span className='Controls__price'>{`пусто`}</span>}
      </p>
      <button className="Controls__close-btn" onClick={() => setActive(true)}>Перейти</button>
    </div>
  )
}

Controls.propTypes = {
  onAdd: PropTypes.func
};

Controls.defaultProps = {
  onAdd: () => {}
}

export default React.memo(Controls);
