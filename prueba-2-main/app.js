'use strict'

//text-decoration: line-through; color: gray;

const to_do = [
    'Alimentar al perro',
    'Estudiar para prueba escrita',
    'Pagar taxes',
    'Pasear a perro',
    'Comprar entradas para el cine',
]

const container = document.querySelector('.ul')

function addTodo() {
    to_do.forEach(todo => {
        const li = document.createElement('li');
        const input = document.createElement('input')
        input.type = 'checkbox';

        //logica
        //añadir al dom
        li.appendChild(input);
        li.append(document.createTextNode(todo))
        container.appendChild(li);


        //agregar decoracion y quitar con evento de cambio en el checkbox
        input.addEventListener('change', () => {
            if(input.checked) {
                li.style.textDecoration = 'line-through'
                li.style.color = 'gray';
            } else {
                li.style.textDecoration = 'none';
                li.style.color = 'black'
            }
        })
    })
}

addTodo()