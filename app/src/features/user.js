import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: "user",
    initialState: {value: {firstName: "", lastName: "", email: "", loggedIn: false}},

    // Functions to change the variable values
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        }
    }
})

export default userSlice.reducer