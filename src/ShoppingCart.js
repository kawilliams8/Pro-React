import React, { PropTypes, Component } from 'react';
import { DropTarget } from 'react-dnd';
import constants from './constants';

const ShoppingCartSpec = {
  drop() {
    return { name: 'ShoppingCart'};
  }
}

let collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  }
}

class ShoppingCart extends Component {
  render() {
    const { canDrop, isOver, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;

    let backgroundColor = '#EFEFEF';
    if (isActive) {
      backgroundColor = '#F7F7BD'
    } else if (canDrop) {
      backgroundColor = '#F7F7F7'
    }

    const style={
      backgroundColor: backgroundColor
    };

    return connectDropTarget(
      <div
        className="shopping-cart"
        style={style}
      >
      {isActive ? 'Yumm, snacks!' : 'Drag the snacks here!'}
      </div>
    )
  }
}

ShoppingCart.propTypes = {
  // connectDropTarget: PropTypes.func.isRequired,
  // isOver: PropTypes.bool.isRequired,
  // canDrop: PropTypes.bool.isRequired
}

export default DropTarget(constants.SNACK, ShoppingCartSpec, collect)(ShoppingCart);