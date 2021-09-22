import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { UsersState } from '../utilities/types'

const initialState: UsersState = {
    users: [],
    onlineUsersByUsername: [],
    loading: false,
    error: null,
    typingUsers: []
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    }
})


export default usersSlice.reducer