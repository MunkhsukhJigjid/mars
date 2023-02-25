import generateJoke from "./generateJoke";
import './styles/main.scss'
import image from './assets/tree.png'

const treeImage = document.getElementById('treeImage')
treeImage.src = image

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke)

generateJoke()