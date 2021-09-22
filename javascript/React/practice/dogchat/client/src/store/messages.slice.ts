import axios from 'axios'
import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit'

import { Message, MessagesState } from '../utilities/types'

const initialState: MessagesState = {
  messages: [],
  loading: false,
  error: null,
}

const messagesSlice = createSlice({
    name: 'messages',
    initialState, 
    reducers : {

    }
})


export default messagesSlice.reducer