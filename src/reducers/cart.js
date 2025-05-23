const cartReducer = (state = [], action) => {
    let newState = [...state];
    switch (action.type) {
        case "ADD_TO_CART":
            return [
                ...newState,
                {
                    id: action.info.id,
                    info: action.info,
                    quantity: 1
                }
            ];
        case "UPDATE_QUANTITY":
            const itemUpdate = newState.find(item => item.id === action.id);
            itemUpdate.quantity += action.quantity;
            return newState;
        case "DELETE_ITEM":
            newState = newState.filter(item => item.id !== action.id);
            return newState;
        case "DELETE_ALL_ITEM":
            return [];
        default:
            return state;
    }
}

export default cartReducer;