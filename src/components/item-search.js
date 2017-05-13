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
      <div id='search'>
        <form id='search-bar'>
          <input type='text' ref={(input) => {this.search = input}} onChange={this.handleOnChange}></input>
        </form>
        {this.props.loading && <h3>Loading..</h3>}
        {this.props.loading === false &&
          <ul id='search-list'>
            {this.props.data.map((item, i) => {
              return <ListItem
                key={i}
                item={item}
                onClick={() => this.props.selectItem(item)}
                />
            })}
          </ul>
        }
      </div>
    )
  }
}

const ListItem = (props) => {
  return (
    <li>
      <Link to={`${props.item.name}`} >
        <div className='flexWrapper'>
          <img src={props.item.image} alt='Not Available' />
          <h4>{props.item.name.replace(/_/g, " ")}</h4>
        </div>
      </Link>
    </li>
  )
}

export default ItemSearch;
