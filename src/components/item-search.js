import React from 'react';
import ListItem from './list-item';

class ItemSearch extends React.Component {

  handleOnChange(e){
    const search = this.refs.search.value;
    this.props.fetchSearch(search)
  }

  render() {
    return (
      <div>
        <input type='text' ref='search' onChange={this.handleOnChange.bind(this)}></input>
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
