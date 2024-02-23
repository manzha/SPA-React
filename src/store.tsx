import { configureStore, createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [
            {id: 1, name: "John Doe", email: "john.doe@example.com"}
        ],
        id: 2 // This can be changed and generate an UUID for each new user
    },
    reducers: {
        addUserStore(state, action) {
            action.payload.id = state.id++;
            state.users.push(action.payload);
        },
        updateUserStore(state, action) {
            let user = state.users.find(user => user.id == action.payload.id);
            if (user) {
                user.name = action.payload.name;
                user.email = action.payload.email;
            }
        },
        deleteUserStore(state,action){
            const index = state.users.findIndex(user => user.id === action.payload);
            if (index !== -1) {
                state.users.splice(index, 1);
            }
        }
    },
    })

    
const reducer = {
    users: usersSlice,
  }

const store = configureStore({
    reducer: {
        users: usersSlice.reducer
    }
});



export const { addUserStore, deleteUserStore, updateUserStore} = usersSlice.actions;
export default store;