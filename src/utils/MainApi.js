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



    async deleteCard(id) {
        const response = await fetch(`${this._baseUrl}/cards/${id}`, {
            method: "DELETE",
            credentials: 'include',
            headers: this._headers
        })
        return this._checkResponse(response)

    }

    async setLike (id){
        const response = await fetch(`${this._baseUrl}/cards/${id}/likes`,{
            method: "PUT",
            credentials: 'include',
            headers: this._headers
        })
        return this._checkResponse(response)

    }

    async deleteLike (id){
        const response = await fetch(`${this._baseUrl}/cards/${id}/likes`,{
            method: "DELETE",
            credentials: 'include',
            headers: this._headers
        })
        return this._checkResponse(response)

    }
    // async changeLikeCardStatus(id,iSLiked) {
    //     if (!iSLiked) {
    //         return await this.setLike(id)
    //     } 
    //     return await this.deleteLike(id)
    // }  



}

const api = new Api({
    baseUrl: 'https://api.korolekdiplom.nomoredomainsicu.ru/',
    headers: {
        // authorization: '16cddbd8-a5a0-4ea8-ba7a-4e06d4944e1a',
        'Content-Type': 'application/json'
    }
})
export default api