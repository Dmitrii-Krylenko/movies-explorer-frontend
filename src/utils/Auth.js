import { API_SERVER_URL } from "./const";

export const BASE_URL = API_SERVER_URL;

export const register = (name, password, email) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": name,
            "password": password,
            "email": email
        }),
        credentials: 'include'
    })
        .then((response) => {

            if (response.ok) {
                return response.json();
            }
            throw response

        })
    // .then((res) => {
    //     return res;
    //     // {"data":{"_id":"649338df36ce0c001a41c498","email":"ww1w@ww.ru"}}
    // })
    // .catch((err) => {
    //     console.log('catch')
    //     console.log(err)
    // });
};

export const login = (password, email) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "password": password,
            "email": email
        }),
        credentials: 'include'
    })
        .then((response) => {

            if (response.ok) {
                return response.json();
            }
            throw response
        })

};

export const logout = () => {
    return fetch(`${BASE_URL}/users/signout`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

        credentials: 'include'
    })
    // .then((response) => {

    //     if (response.ok) {
    //         return response.json();
    //     }
    //     throw response
    // })
}

export const getToken = () => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    })
        .then((response) => {

            if (response.ok) {
                return response.json();

            }
            throw response

        })
        .catch(
            (err) => {
                console.log(err)
                throw err
            });

};


