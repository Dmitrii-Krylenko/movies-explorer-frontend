fetch('https://api.nomoreparties.co/beatfilm-movies')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    });

const time = (i) => {
   let h = 0
   let m = 0
   while ( i > 60 ) {
    h++
    i = i -60
   }
    m=i
    return [h,m]

}