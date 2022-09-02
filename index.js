const input = document.querySelector('.input');
const placeholder = document.querySelector('.placeholder');
const button = document.querySelector('.btn');

button.addEventListener('click', ()=>{
    const inputValue = input.value;
    
    const message = document.createElement('h2');
    message.textContent = `Hi ${inputValue}, thank you very much for visiting my GitHub repository and if you don't mind, connect with me on twitter at https://twitter.com/KELVINMKENYA3, thank you once again.`;
    message.classList.add('para');
    placeholder.appendChild(message);
    setBackToDefault();
})

function setBackToDefault(){
    input.value = '';
}