const cartReducer = (state = [], action) => {
    const newState = [...state];
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
            itemUpdate.quantity += 1;
            return newState;
        default:
            return state;
    }
}

export default cartReducer;