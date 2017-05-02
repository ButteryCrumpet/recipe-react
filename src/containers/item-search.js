import { connect } from 'react-redux';
import itemSearch from '../components/item-search';
import fetchSearch from '../actions/item-search';

const mapStateToProps = (state) => ({
  data: state.searchResults
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSearch: (value) => {
      dispatch(fetchSearch(value))
    }
  }
}

const itemSearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(itemSearch)

export default itemSearchContainer;
