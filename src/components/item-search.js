import React from 'react';
import debounce from 'lodash.debounce';
import { Link } from 'react-router-dom';

class ItemSearch extends React.Component {

  constructor(){
    super();
    this.handleOnChange = debounce(this.handleOnChange.bind(this), 500);
  }

  handleOnChange(e){
    const searchTerm = this.search.value;
    console.log(searchTerm);
    this.props.fetchSearch(this.search.value);
  }

  render() {
    return (
      <div>
        <form>
          <input type='text' ref={(input) => {this.search = input}} onChange={this.handleOnChange}></input>
        </form>
        <div>
          {this.props.data.map((item, i) => {
            return <ListItem
              key={i}
              item={item}
              onClick={() => this.props.selectItem(item.name)}
              />
            })}
        </div>
      </div>
    )
  }
}

const ListItem = (props) => {
  return (
    <Link to={`${props.item.name}`} onClick={props.onClick}>
      <img src={props.item.image} alt='Not Available' />
      <h4>{props.item.name.replace(/_/g, " ")}</h4>
    </Link>
  )
}

export default ItemSearch;
