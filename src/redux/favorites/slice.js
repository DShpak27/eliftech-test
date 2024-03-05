import { createSlice } from "@reduxjs/toolkit";

const initialFavoritesState = {
    favorites: [],
};

export const favoritesSlice = createSlice({
    name: "favorite",
    initialState: initialFavoritesState,
    reducers: {
        changeFavoritesStatus: (state, { payload }) => {
            if (state.favorites.length) {
                const isInFavorites = state.favorites.some((product) => product.id === payload.id);
                if (isInFavorites) {
                    state.favorites = [
                        ...state.favorites.filter((product) => product.id !== payload.id),
                    ];
                    return;
                }
            }
            state.favorites.push(payload);
        },
    },
});

export const { changeFavoritesStatus } = favoritesSlice.actions;
export default favoritesSlice.reducer;
