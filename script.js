// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    // Cacher le loader après chargement de la page
    setTimeout(function(){
      document.querySelector('.loader').classList.add('hidden');
    }, 1000);

    // Navigation
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.page-section');
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    // Gestion du menu hamburger
    menuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Navigation entre les sections
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Fermer le menu mobile si ouvert
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        
        // Récupérer la section cible
        const targetSection = this.getAttribute('data-section');
        
        // Mettre à jour la navigation active
        navLinks.forEach(navLink => {
          navLink.classList.remove('active-nav');
        });
        this.classList.add('active-nav');
        
        // Afficher la section cible
        sections.forEach(section => {
          section.classList.remove('active');
        });
        document.getElementById(targetSection).classList.add('active');
        
        // Faire défiler vers le haut de la page
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    });

    // Slider automatique
    const slider = document.querySelector('.slider');
    let slideIndex = 0;
    
    function nextSlide() {
      slideIndex = (slideIndex + 1) % 3;
      slider.style.transform = `translateX(-${slideIndex * 33.333}%)`;
    }
    
    setInterval(nextSlide, 5000);
    
    // Créer des particules pour l'arrière-plan
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
      createParticle();
    }
    
    function createParticle() {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Position aléatoire
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      
      // Taille aléatoire
      const size = Math.random() * 10 + 5;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Animation aléatoire
      const duration = Math.random() * 10 + 10;
      const direction = Math.random() > 0.5 ? 1 : -1;
      
      particle.style.animation = `float ${duration}s infinite ease-in-out`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      
      particlesContainer.appendChild(particle);
    }
    
    // Effet de défilement pour la barre de progression
    window.addEventListener('scroll', function() {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      document.getElementById("progressBar").style.width = scrolled + "%";
    });
    
    // Animation au défilement
    const revealElements = document.querySelectorAll('.reveal');
    
    function checkReveal() {
      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    }
    
    window.addEventListener('scroll', checkReveal);
    checkReveal(); // Vérifier les éléments visibles au chargement
  });