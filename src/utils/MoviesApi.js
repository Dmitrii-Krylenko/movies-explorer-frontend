
class MoviesApi {
    _checkResponse(res) {
        if (res.ok) {
            return res.json()
        }
        else {
            return Promise.reject(`Ошибка ${res.status}`)
        }

    }

    async getMovies() {
        const response = await fetch(`https://api.nomoreparties.co/beatfilm-movies`, {
            headers: this._headers,
        })

        return this._checkResponse(response)
    }
}
export default MoviesApi;