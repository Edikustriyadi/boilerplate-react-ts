import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

// Define a type for the slice state
interface AuthState {
  username:string;
  password:string;
  token?:string | null;
  dataUser:any[];
}

// Define the initial state using that type
const initialState: AuthState = {
  username: '',
  password:'',
  token:null,
  dataUser:[],
}

export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    onLogin: (state, payload) => {
        const {username, password} = payload.payload;
        state.dataUser.filter(el => {
            if(username === el.username && password === el.password){
                el.token = 'auth-123456'
            }else{
                el.token = '';
            }
        })
        
        
    },
    onRegister:(state, payload) => {
        const {username, password} = payload.payload;
        state.dataUser.push({username,password});
    }
  }
})

export const { onLogin, onRegister } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectToken = (state: RootState) => state.auth.token

export default authSlice.reducer