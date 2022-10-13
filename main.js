const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app,{
    loop: true,
    delay: 75
});

typewriter
    .typeString('Provincia de Buenos Aires')
    .pauseFor(200)
    .start();
