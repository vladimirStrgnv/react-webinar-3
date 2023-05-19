import React from "react";
import PropTypes from 'prop-types';
import './style.css';

function Controls({setActive, productsCount, productsPrice}){

  return (
    <div className='Controls'>
      <p>{`В корзине: ${productsCount} / ${productsPrice}₽`}</p>
      <button onClick={() => setActive(true)}>Перейти</button>
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
