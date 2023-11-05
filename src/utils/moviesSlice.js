import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState: {
        nowPlayinMovies: null,
        trailerVideo: null,
    },
    reducers: {
        addNowPlayinMovies: (state, action) => {
            state.nowPlayinMovies = action.payload;
        },
        addTrailerVideo : (state, action) => {
            state.trailerVideo = action.payload;
        }
    }
});

export const { addNowPlayinMovies, addTrailerVideo } = moviesSlice.actions;

export default moviesSlice.reducer;
