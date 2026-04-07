import axios from 'axios'
export const Card =() => {

    axios.get("https://rickandmortyapi.com/api/character")
        .then(res => console.log(res))
        .then(err => console.log(err))

    return(
        <h1>Card</h1>
        
    )
}