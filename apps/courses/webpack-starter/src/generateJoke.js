import axios from 'axios'

function generateJoke() {
    const config = {
        header: {
            Accept: 'application/json'
        }
    }

    axios.get('https://icanhazdadjoke.com', config).then(res => {
        console.log(`%c>>> res >>>`, 'color: red', res)
        document.getElementById('joke').innerHTML = res.data.joke || 'no joke'
    })
}

export default generateJoke