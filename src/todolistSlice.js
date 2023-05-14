import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    lists: []
}
export const todolistSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.lists = [...state.lists, action.payload];
        },
        removeItem: (state, action) => {
            const id = action.payload
            const Delete = state.lists.filter(item => item.id !== id)
            state.lists = Delete
        }
    }
})
export const { addItem, removeItem } = todolistSlice.actions
export default todolistSlice.reducer