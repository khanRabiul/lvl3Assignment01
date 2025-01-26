import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideo } from "./videoAPI";

export const fetchVideo = createAsyncThunk('/video/fetchVideo', async (id) => {
    const video = await getVideo(id);
    return video;
});

const videoSlice = createSlice({
    name: "video",
    initialState: {
        video: {},
        loading: false,
        error: null,
    },
    reducers: {
        incrementLike(state) {
            state.video.likes += 1;
        },
        incrementDislike(state) {
            state.video.dislikes += 1;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideo.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchVideo.fulfilled, (state, action) => {
                state.video = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(fetchVideo.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { incrementLike, incrementDislike } = videoSlice.actions;
export default videoSlice.reducer;
