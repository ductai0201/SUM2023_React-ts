
const initialState:{count:number} = {
    count: 0
}

export const counterReducer = (state = initialState, action: any) => {
        
        switch (action.type) {
            case "INCREMENT":
               return {count : state.count + 1} 
            case "DECREMENT":
                return {count : state.count - 1} 
            case "INCREASE":
                return {count : state.count += action.payload} 
            default:
                return state;
        }
};

export default counterReducer