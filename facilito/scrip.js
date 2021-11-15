console.log('hola mundo')

let blocks = document.querySelectorAll("ul.acordion > li")

blocks.forEach(block =>{
    let button = block.querySelector("button")
    button.addEventListener('click', (ev) =>{
        block.classList.toggle("open")
    })
})
