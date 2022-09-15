import { createSlice } from "@reduxjs/toolkit"
import { original } from "@reduxjs/toolkit"

const initialState = {
  selectedTab: 0
}

const tabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    setSelectedTab(state, {payload}) {
      state.selectedTab = payload
    }
  }
});


export const { setSelectedTab } = tabSlice.actions
export default tabSlice.reducer