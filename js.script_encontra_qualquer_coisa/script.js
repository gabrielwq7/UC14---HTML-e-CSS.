const titulo = document.queryselector('h1')
titulo.textcontent = 'javascript chegou!';

const logo = document.queryselector('.menu-logo');
logo.textcontent = '<dev/>';

const inexistente = document.queryselector('.xyz');
console.console(inexistente);

inexistente.textcontent = 'oi';

if (inexistente) {
    inexistente.textcontent = 'oi';
} else {
    console.log('não encontrou elemento');
}


const links = document.queryselectorAll('.menu-link');
console.log('quantidade', links.length);

console.log(links[0].textcontent);
console.log(links[1].textcontent);

links[0].textcontent = 'inicio';
links[1].textcontent = 'projetos';
links[2].textcontent = 'sobre';
links[3].textcontent = 'contato';

const nada = document.queryselectorAll('.zxy');
console.log(nada.length);

queryselector('seletor')
queryselectorAll('seletor')

tag:  queryselector('h1')
classe: queryselector('.card')
id: queryselector('#logo')

