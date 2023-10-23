import {atom} from "recoil" ; 


export const userState = atom({
    key: 'userState', 
    default: {
        UID: '',
        fname: '',
        lname: '',
        email: '',
        phone: '',
        password: '',
        retype: '',
        isMatched: true
    },
  });