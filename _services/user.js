import axios from 'axios';
import { domain } from './domain'

export const login = (data) => {
    const requestOptions = {
        method : 'POST',
        headers : { 'Content-type' : 'application/json' },
        data
    }
    return axios(domain+'/login',requestOptions)
        .then( response => { 
            if(response.data.code){
                return response
            }else{
                throw new Error('Bağlantı hatası!')
            }})
        .catch( error => { return error })
}

export const logout = (id,token) => {
    const requestOptions = {
        method : 'POST',
        headers : { 'Authorization' : 'Bearer ' + token,
                    'Content-type' : 'application/json' 
        },
        data : {id}
    }
    return axios(domain+'/logout',requestOptions)
        .then( response => {
            if(response.data.code){
                return response
            }else{
                throw new Error('Bağlantı hatası!')
            }})
        .catch( error => { return error })
}

export const update = (token,data) =>{
    const requestOptions = {
        method : 'PUT',
        headers : { 'Authorization' : 'Bearer ' + token,
                    'Content-type' : 'application/json' 
        },
        data
    }
    return axios(domain+'/user',requestOptions)
    .then( response => { 
        if(response.data.code){
            return response
        }else{
            throw new Error('Bağlantı hatası!')
        }})
    .catch( error => { return error })
}

export const auth = token => {
    const requestOptions = {
        method : 'GET',
        headers : { 'Authorization' : 'Bearer ' + token },
    }
    return axios(domain+'/token',requestOptions)
    .then( response => { return response })
    .catch( error => { return error })
}

export const register = (data) => {
    const requestOptions = {
        method : 'POST',
        headers : { 'Content-type' : 'application/json' },
        data
    }

    return axios(domain+'/register', requestOptions)
        .then( response => { return response })
        .catch( error => { return error })
}

export const getForgotPasswordCode = phone => {
    const requestOptions = {
        method : 'GET',
        headers : { 'Content-type' : 'application/json' },
    }

    return axios(domain+'/forgotpassword/'+phone, requestOptions)
        .then( response => { return response })
        .catch( error => { return error })
}

export const setPassword = (code, phone, password) => {
    const requestOptions = {
        method : 'POST',
        headers : { 'Content-type' : 'application/json' },
        data : { code, phone, password }
    }

    return axios(domain+'/forgotpassword', requestOptions)
        .then( response => { return response })
        .catch( error => { return error }) 
}
