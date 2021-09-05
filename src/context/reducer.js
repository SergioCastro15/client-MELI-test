const searchReducer = (state, action) => {
  const appReducerActions = {
    SET_ITEMS: {
      ...state,
      items: action.payload
    },
    SET_SEARCH: {
      ...state,
      currentSearch: action.payload
    },
    SET_ITEM: {
      ...state,
      item: action.payload
    }
  }

  return appReducerActions[action.type] || state
}

export default searchReducer;