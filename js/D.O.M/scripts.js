function changeMode() {         //muda o modo
    changeClasses();           //muda as classes
    changeText();             //muda o texto
}

function changeClasses() {                          // quando clicar mudar todos os mencionados para dark-mode, no segundo volta pro light-mode
    button.classList.toggle(darkModeClass);           //toggle coloca se existe no classlist, se não ele tira
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function changeText() {
    const lightMode = 'Light Mode';
    const darkMode = 'Dark Mode';


    if(body.classList.contains(darkModeClass)) {              //se o body conter o darkMode ira alterar o button e o h1
        button.innerHTML = lightMode;                               //innerHTML altera o arquivo html caso necessario
        h1.innerHTML = darkMode + ' ON';
        return;
    }

    button.innerHTML = darkMode;                               //Se o if for falso vai retorna para o antagonista.
    h1.innerHTML = lightMode + ' ON';

}



const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

console.log(body);

button.addEventListener('click', changeMode)