const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const id = action.payload[0];
      let newState = [];
      let flag= false;
      state.forEach(item => {
        if(item[0] === id){
          newState.push(action.payload);
          flag = true;
        }
        else{
          newState.push(item);
        }
      })

      if(!flag){
        newState.push(action.payload);
      }

      return newState;

    case "REMOVE_ITEM":
      const ItemId = action.payload;
      let newItemState = [];
      
      state.forEach(item => {
        if(item[0] !== ItemId){
          newItemState.push(item);
        }   
      })
      return newItemState;

    default:
      return state;
  }
};

export default cartReducer;
