export const collectionsItemReducer = (state={}, action) => {
    if (action.type === "ADD_COLLECTION") {
      return {
        ...state,
        id: action.payload.id,
      };
    }
  
    return state;
  }
  
  export const selectedItem = (itemData) => {
    return {
      type: "ADD_COLLECTION",
      payload: {
        id: itemData.id,
      },
    };
  }