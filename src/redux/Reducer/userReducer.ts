import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: false
  },
  reducers: {
    setLogin: (state) => {
      state.value = true
    },
    setLoguot: (state) => {
      state.value = false
    }
  }
})
export const { setLogin, setLoguot } = userSlice.actions
export default userSlice.reducer
