import { createSlice } from "@reduxjs/toolkit";

const favouritesSlice = createSlice({
    name: 'favourites',
    initialState: {
        ids: []
    },
    reducers: {
        addFavourite: (state, action) => {
            state.ids.push(action.payload.id)
        },
        removeFavourite: (state, action) => {
            // remove the id at idex of user selected item. thereby removing the item from the array
            state.ids.splice(state.ids.indexOf(action.payload.id, 1)) // second parameter lets you choose only one item (the number of indexes to remove)
        },
    }
});

export const favouriteAction = favouritesSlice.actions;
export default favouritesSlice;

// export const addFavourite = favouritesSlice.actions.addFavourite;
// export const removeFavourite = favouritesSlice.actions.removeFavourite;
// export default favouritesSlice.reducer;  // if youd prefer to export the ruducer directly