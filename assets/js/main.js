const color_box = document.getElementById("color_box");
            
const gray_button = document.getElementById("gray_button");
        
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

const countspan = document.getElementById("countspan");
            
counter_button.addEventListener("click", () => {
    /* TODO 2
     *
     *  A função incrementa 1 em um contador "count", 
     *  atualiza o conteúdo de texto do "countspan" 
     *  e mostra o valor atual de "count".
     */
})




const even_or_odd_button = document.getElementById("even_or_odd_button");

even_or_odd_button.addEventListener("click", () => {
    /* TODO 3
     *
     * A função mostra um "alert dialog" mostrando se o contador 
     * (da segunda tarefa (TODO 2)) é par ou impar.
     */
})