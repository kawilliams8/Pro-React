import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class AnimatedShoppingList extends Component {
  constructor() {
    super()
    this.state = {
      items: [
        { id: 1, name: 'milk' },
        { id: 2, name: 'yogurt' },
        { id: 3, name: 'bananas' }
      ]
    }
  }

  handleChange(e) {
    if (e.key === 'Enter') {
      let newItem = {id: Date.now(), name: e.target.value}
      let newItems = this.state.items.concat(newItem);
      e.target.value = "";
      this.setState({items: newItems})
    }
  }

  handleRemove(i) {
    let newItems = this.state.items;
    newItems.splice(i, 1);
    this.setState({items: newItems});
  }

  render() {
    let shoppingItems = this.state.items.map((item, i) => (
      <div
        key={item.id}
        className="item"
        onClick={this.handleRemove.bind(this, i)}   
        >
        {item.name}
        </div>
    ));

    return (
      <div>
        {shoppingItems}
        <input 
          type="text"
          value={this.state.newItem}
          onKeyDown={this.handleChange.bind(this)} />
      </div>
    );
  }
};