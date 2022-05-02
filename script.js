let musica = document.querySelector('audio');

document.querySelector('.botao-play').addEventListener('click', tocarMusica);

function tocarMusica()  {
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
    
}

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);
function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';

}