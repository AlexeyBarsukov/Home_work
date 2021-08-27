import React from 'react';
import "../styles/itemsWrapper.css";
import Item from "./Item";

const Items = function ({beers}) {
  return <div className="items">
      {beers.map(item => <Item beer={item} key={item.id}></Item>)}
  </div>;
};

export default Items;