import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  currentTheme: {
    mode: "light",
    main: "#f7f7f7",
    second: "#adadad",
    third: "#202124",
    fourth: "#e3e3e3",
    fifth: "white",
    sixth: "#F2F6FC",
    seventh: "#c9c9c9",
    eighth: "#0B57D0",
    ninth: "#C2E7FF",
    tenth: "#3793de"
  }
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState: INITIAL_STATE,
    reducers: {
        setCurrentTheme(state, action) {
            state.currentTheme=action.payload
        }
    }
}
)

export const {setCurrentTheme} = themeSlice.actions
export const themeReducer  = themeSlice.reducer