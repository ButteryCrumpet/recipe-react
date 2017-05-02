import { connect } from 'react-redux';
import itemSearch from '../components/item-search';
import { fetchSearch, selectItem } from '../actions/item-search';

const mapStateToProps = (state) => ({
  data: state.search.searchResults
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSearch: (value) => {
      dispatch(fetchSearch(value))
    },
    selectItem: (item) => {
      dispatch(selectItem(item))
    }
  }
}

const itemSearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(itemSearch)

export default itemSearchContainer;
