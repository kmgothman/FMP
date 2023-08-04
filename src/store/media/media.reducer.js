import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  currentMedia: {isMobile: false}
};

export const mediaSlice = createSlice({
    name: 'media',
    initialState: INITIAL_STATE,
    reducers: {
        setCurrentMedia(state, action) {
            state.currentMedia=action.payload
        }
    }
}
)

export const {setCurrentMedia} = mediaSlice.actions
export const mediaReducer  = mediaSlice.reducer