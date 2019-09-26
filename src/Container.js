import React, {Component} from 'react';
import ShoppingCart from './ShoppingCart';
import Snack from './Snack';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class Container extends Component {
  render() {
    return (
      <div>
        <Snack name="chips" />
        <Snack name="cupcake" />
        <Snack name="apple" />
        <Snack name="coffee" />
        <Snack name="granola" />
        <ShoppingCart />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Container);