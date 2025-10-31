// Animation d'ouverture du livre
anime({
    targets: '.page.left',
    rotateY: [-180, 0],
    duration: 2000,
    easing: 'easeInOutQuad'
});

anime({
    targets: '.page.right',
    rotateY: [180, 0],
    duration: 2000,
    easing: 'easeInOutQuad'
});

// Création de particules
function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    document.querySelector('.particles').appendChild(particle);
    particle.style.left = '50%';
    particle.style.top = '50%';

    anime({
        targets: particle,
        translateX: () => anime.random(-100, 100),
        translateY: () => anime.random(-150, -50),
        scale: [
            { value: 0, duration: 0 },
            { value: 1, duration: 200 }
        ],
        opacity: [
            { value: 1, duration: 0 },
            { value: 0, duration: 1000 }
        ],
        duration: 1000,
        easing: 'easeOutQuad',
        complete: () => particle.remove()
    });
}

// Générer des particules régulièrement
setInterval(createParticle, 100);
