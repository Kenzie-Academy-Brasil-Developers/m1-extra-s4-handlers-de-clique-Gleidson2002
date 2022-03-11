let section = document.getElementById("content")
const gray_button = document.getElementById("gray_button");
let color_box = document.createElement("div")
let pinkbutton = document.createElement('button')
pinkbutton.innerText = "Pink"
//Buttons
pinkbutton.addEventListener("click", () => {
    color_box.className = "pink"
})
section.appendChild(pinkbutton)
section.appendChild(color_box)
color_box.id = "color_box"
color_box.classList = "gray"

gray_button.addEventListener("click", () => {
    color_box.className = "gray";
})

const blue_button = document.getElementById("blue_button");

blue_button.addEventListener("click", () => {
    color_box.className = "blue";
})

/* TODO 1
 *
 *  Adicionar um botão e um event handler 
 *  e o botão torna o quadrado rosa.
 */

let count = 0;

const counter_button = document.getElementById("counter_button");

let countspan = document.createElement("p");
countspan.innerText = `Contagem = ${count}`
const content2 = document.getElementById("content2")
content2.appendChild(countspan);

counter_button.addEventListener("click", () => {
    count++
    /* TODO 2
     *
     *  A função incrementa 1 em um contador "count", 
     *  atualiza o conteúdo de texto do "countspan" 
     *  e mostra o valor atual de "count".
     */
    countspan.innerText = `Contagem = ${count} `
})






const even_or_odd_button = document.getElementById("even_or_odd_button");

even_or_odd_button.addEventListener("click", () => {
    /* TODO 3
     *
     * A função mostra um "alert dialog" mostrando se o contador 
     * (da segunda tarefa (TODO 2)) é par ou impar.
     */
    if(count%2===0){
        alert("Even number")
    }
    else {
        alert("Odd number")
    }
})