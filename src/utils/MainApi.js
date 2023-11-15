import { adapter } from "./Adapter"
import { API_SERVER_URL } from "./const"

class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl
        this._headers = options.headers
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json()
        }
        else {
            return Promise.reject(`Ошибка ${res.status}`)
        }

    }

    // async getInitialCards() {
    //     const response = await fetch(`${this._baseUrl}/cards`, {
    //         headers: this._headers,
    //         credentials: 'include'
    //     })

    //     return this._checkResponse(response)
    // }

    async getUserInfo() {
        const response = await fetch(`${this._baseUrl}/users/me `, {
            headers: this._headers,
            credentials: 'include'
        })
        return this._checkResponse(response)
    }

    async editUserInfo(name, email) {
        const response = await fetch(`${this._baseUrl}/users/me `, {
            method: "PATCH",
            credentials: 'include',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                email: email
            })
        })
        return this._checkResponse(response)
    }
    async getMovies() {
        const response = await fetch(`${this._baseUrl}/movies `, {
            headers: this._headers,
            credentials: 'include'
        })

        return this._checkResponse(response)
    }



    async createSaveMovies(movie) {
        const response = await fetch(`${this._baseUrl}/movies `, {
            method: "POST",
            credentials: 'include',
            headers: this._headers,
            body: JSON.stringify(movie)
        })
        return this._checkResponse(response)
    }



    async deleteMovies(movieId) {
        const response = await fetch(`${this._baseUrl}/movies/${movieId}`, {
            method: "DELETE",
            credentials: 'include',
            headers: this._headers
        })
        return this._checkResponse(response)

    }


}

const api = new Api({
    baseUrl: API_SERVER_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})
export default api