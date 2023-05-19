import React, {useState} from "react";
import PropTypes from "prop-types";
import {plural} from "../../utils";
import './style.css';

function Item(props){
  
  return (
    <div className={"Item"} >
      <div className="Item-code">{props.item.code}</div>
      <div className="Item-title">{props.item.title}</div>
      <div className="Item-actions">
        <div className="Item-price">{`${props.item.price} ₽`}</div>
        {props.item.count && <div className="Item-counts">{`${props.item.count} шт`}</div>}
        <button className="Item-btn" onClick={()=> props.btnCallback(props.item)}>{props.btnsTitle}</button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    selected: PropTypes.bool,
    count: PropTypes.number
  }).isRequired,
  onDelete: PropTypes.func,
  onSelect: PropTypes.func
};

Item.defaultProps = {
  onDelete: () => {},
  onSelect: () => {},
}

export default React.memo(Item);
