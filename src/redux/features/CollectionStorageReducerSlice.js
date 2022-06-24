export const collectionStorageReducer = (state={}, action) => {
    if(action.type === "ADD_COLLECTIONS_STORAGE") {
        return {
            ...state,
            collectionStorage: action.payload.collectionStorage,
        }
    }

    return state;
}

export const initialStorageState = {
    collectionStorage: false
}

export const selectCollectionStorageState = (state) => {
    return state.collectionStorage.collectionStorage;
}

export const selectedCollectionStorageState = (status) => {
    return {
        type: "ADD_COLLECTIONS_STORAGE",
        payload: {
            collectionStorage: status,
        }
    }
}