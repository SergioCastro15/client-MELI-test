import React, { useReducer } from 'react'
import searchReducer from './reducer'
import searchContext from './context'
import { apiRepository } from '../api/apiRepository'

const SearchState = ({ children }) => {
  const initialState = {
    items: [],
    item: {},
    currentSearch: '',
  }

  const [state, dispatch] = useReducer(searchReducer, initialState)

  const getAllitems = async (query) => {
    try {
      const items = await apiRepository.get(`/items?q=${query}`)
      const { data } = items;
      dispatch({ type: 'SET_ITEMS', payload: data })
      return data
    } catch (error) {
      return error
    }
  }

  const getCurrentItem = async (params) => {
    try {
      const item = await apiRepository.get(`/items/${params}`)
      const { data } = item
      dispatch({ type: 'SET_ITEM', payload: data })
      return data;
    } catch (error) {
      return error
    }
  }

  const getCurrentSearch = (query) => {
    dispatch({ type: 'SET_SEARCH', payload: query })
  }

  return(
    <searchContext.Provider
      value={{
        items: state.items,
        currentSearch: state.currentSearch,
        getAllitems,
        getCurrentItem,
        getCurrentSearch
      }}
    >
      {children}
    </searchContext.Provider>
  )
}

export default SearchState;