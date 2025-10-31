// Animation des pages (ouverture)
anime({
    targets: '.left-page',
    rotateY: [-180, 0],  // commence fermée, s'ouvre
    duration: 2000,
    easing: 'easeOutQuad'
});

anime({
    targets: '.right-page',
    rotateY: [180, 0],
    duration: 2000,
    easing: 'easeOutQuad'
});

// Couvertures animées (optionnel pour effet réaliste)
anime({
    targets: '.left-cover',
    rotateY: [-180, -160],
    duration: 2000,
    easing: 'easeOutQuad'
});

anime({
    targets: '.right-cover',
    rotateY: [180, 160],
    duration: 2000,
    easing: 'easeOutQuad'
});

// Création d'une particule magique
function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    document.querySelector('.particles').appendChild(particle);

    const startX = window.innerWidth / 2;
    const startY = window.innerHeight / 2;

    particle.style.left = `${startX}px`;
    particle.style.top = `${startY}px`;

    anime({
        targets: particle,
        translateX: () => anime.random(-150, 150),
        translateY: () => anime.random(-200, -50),
        scale: [
            { value: 0, duration: 0 },
            { value: 1, duration: 200 }
        ],
        opacity: [
            { value: 1, duration: 0 },
            { value: 0, duration: 1200 }
        ],
        duration: 1200,
        easing: 'easeOutQuad',
        complete: () => particle.remove()
    });
}

// Génération de particules toutes les 80ms
setInterval(createParticle, 80);
