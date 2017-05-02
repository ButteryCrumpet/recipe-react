import React from 'react';
import ListItem from './list-item';
import debounce from 'lodash.debounce';

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
              />
            })}
        </div>
      </div>
    )
  }
}

export default ItemSearch;
