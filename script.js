document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.querySelector('.splash-screen');
    const mainContent = document.querySelector('.main-content');
    const gundamSidebar = document.getElementById('gundamSidebar');
    const materiasSidebar = document.getElementById('materiasSidebar');
    const btnGundam = document.getElementById('btnGundam');
    const btnMaterias = document.getElementById('btnMaterias');
    const closeButtons = document.querySelectorAll('.close-btn');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Cargar la preferencia del tema guardada
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
        if (currentTheme === 'light-mode') {
            themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        }
    }

    // Datos de ejemplo para los sidebars
    const gundamData = [
        {
            nombre: "RX-78-2 Gundam",
            serie: "Mobile Suit Gundam",
            descripcion: "El icónico Mobile Suit piloteado por Amuro Ray.",
            imagen: "https://static.wikia.nocookie.net/gundam/images/c/c7/RX-78-02_Gundam_%28CDI%29_Front.png/revision/latest/scale-to-width/360?cb=20220531210940"
        },
        {
            nombre: "ZGMF-X10A Freedom Gundam",
            serie: "Mobile Suit Gundam SEED",
            descripcion: "Mobile Suit de alta movilidad, piloteado por Kira Yamato.",
            imagen: "https://static.wikia.nocookie.net/gundam/images/d/d1/Freedom_gundam_front_lineart_color.png/revision/latest?cb=20230708045100"
        },
        {
            nombre: "Wing Zero EW",
            serie: "Mobile Suit Gundam Wing EW",
            descripcion: "Mobile Suit transformable con una poderosa armadura. Piloteado por Heero Yuy.",
            imagen: "https://static.wikia.nocookie.net/gundam/images/2/2a/Wing_gundam_zero_EW_front.png/revision/latest?cb=20250614005028"
        },
        {
            nombre: "GNT-0000 00 Qan[T]",
            serie: "Mobile Suit Gundam 00 The Movie -A wakening of the Trailblazer",
            descripcion: "El GNT-0000 00 Qan[T] (también conocido como 00 Qan[T] (pronunciado Doble-Oh Quanta) es el sucesor del GN-0000+GNR-010 00 Raiser. Está pilotado por Setsuna F. Seiei.",
            imagen: "https://static.wikia.nocookie.net/gundam/images/5/5b/00_Qan%28T%29_GN_Sword_IV.jpg/revision/latest/scale-to-width-down/1000?cb=20100610042811"
        },
        {
            nombre: "XVX-016RN Gundam Aerial Rebuild",
            serie: " Mobile Suit Gundam the Witch de Mercury",
            descripcion: "es un mobile suit introducido en Mobile Suit Gundam the Witch de Mercury. Es una actualización del XVX-016 Gundam Aerial pilotado inicialmente por Suletta Mercury y brevemente por Prospera Mercury",
            imagen: "https://static.wikia.nocookie.net/gundam/images/f/f0/Gundam_Aerial_Rebuild_Front.png/revision/latest?cb=20230108103719"
        }
    ];

    const materiasData = [
        {
            nombre: "Redes",
            descripcion: "Fundamentos de las redes y auditoria de Redes."
        },
        {
            nombre: "Diseño Web",
            descripcion: "Diseño web desde cero con uso de IA."
        },
        {
            nombre: "Desarrollo Económico",
            descripcion: "Historia y analisis del Desarrollo Ecnómico."
        },
        {
            nombre: "Auditoria",
            descripcion: "Conceptos básicos y detallados sobre las auditorias."
        },
        {
            nombre: "Trabajo Espcial de Grado",
            descripcion: "Orientación y tutoria para la elaboración del TEG."
        }
    ];

    // Función para renderizar los datos de Gundam
    function renderGundamList() {
        const gundamList = document.getElementById('gundamList');
        gundamList.innerHTML = '';
        gundamData.forEach(item => {
            const gundamItem = document.createElement('div');
            gundamItem.classList.add('gundam-item');
            gundamItem.innerHTML = `
                <div class="gundam-header">
                    <h3>${item.nombre}</h3>
                </div>
                <div class="gundam-content">
                    <div class="gundam-img">
                        <img src="${item.imagen}" alt="${item.nombre}">
                    </div>
                    <div class="gundam-info">
                        <p class="gundam-series">${item.serie}</p>
                        <p>${item.descripcion}</p>
                    </div>
                </div>
            `;
            gundamList.appendChild(gundamItem);
        });
    }

    // Función para renderizar los datos de Materias
    function renderMateriasList() {
        const materiasList = document.getElementById('materiasList');
        materiasList.innerHTML = '';
        materiasData.forEach(item => {
            const materiaItem = document.createElement('div');
            materiaItem.classList.add('materia-item');
            materiaItem.innerHTML = `
                <h3>${item.nombre}</h3>
                <p>${item.descripcion}</p>
            `;
            materiasList.appendChild(materiaItem);
        });
    }

    // Función para mostrar/ocultar los sidebars
    function toggleSidebar(sidebar) {
        sidebar.classList.toggle('active');
        document.body.classList.toggle('no-scroll'); // Opción para deshabilitar el scroll del cuerpo
    }

    // Event listeners para los botones del navbar
    btnGundam.addEventListener('click', (e) => {
        e.preventDefault();
        toggleSidebar(gundamSidebar);
        if (gundamSidebar.classList.contains('active')) {
            renderGundamList();
        }
    });

    btnMaterias.addEventListener('click', (e) => {
        e.preventDefault();
        toggleSidebar(materiasSidebar);
        if (materiasSidebar.classList.contains('active')) {
            renderMateriasList();
        }
    });

    // Event listener para cerrar los sidebars
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            gundamSidebar.classList.remove('active');
            materiasSidebar.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });
    
    // Event listener para el botón de cambio de tema
    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        if (body.classList.contains('light-mode')) {
            themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('theme', 'light-mode');
        } else {
            themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('theme', 'dark-mode');
        }
    });

    // Función para la animación de las partículas
    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        document.getElementById('particles').appendChild(particle);

        const size = Math.random() * 8 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;

        const duration = Math.random() * 10 + 5;
        const delay = Math.random() * 5;
        particle.style.animation = `move ${duration}s linear infinite ${delay}s`;
        particle.style.opacity = Math.random() * 0.5 + 0.3;

        setTimeout(() => {
            particle.remove();
        }, duration * 1000);
    }

    setInterval(createParticle, 500);

    // Animaciones al hacer scroll
    const sections = document.querySelectorAll('.section, .card, .timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Deshabilitar el scroll de la página al abrir un sidebar
    // Se corrige el bug añadiendo y quitando una clase al body
    // en lugar de cambiar directamente el estilo de overflow.
    // Esto previene un posible parpadeo.
    function toggleBodyScroll(enable) {
        if (enable) {
            document.body.classList.remove('no-scroll');
        } else {
            document.body.classList.add('no-scroll');
        }
    }

    // Transición de la pantalla de inicio
    splashScreen.addEventListener('click', () => {
        splashScreen.style.opacity = '0';
        setTimeout(() => {
            splashScreen.style.display = 'none';
        }, 1000);
    });
});

// Corrección de los enlaces de anclaje para que el scroll sea suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Ajusta 80px para compensar el navbar fijo
                behavior: 'smooth'
            });
        }
         // Agregar keyframes para la animación de sacudida
            const styleSheet = document.styleSheet || (function() {
                const style = document.createElement('style');
                document.head.appendChild(style);
                return style.sheet;
            })();
            
            const shakeKeyframes = `
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    20%, 60% { transform: translateX(-8px); }
                    40%, 80% { transform: translateX(8px); }
                }
            `;
            
            if (styleSheet.insertRule) {
                styleSheet.insertRule(shakeKeyframes, styleSheet.cssRules.length);
            }
            
            // Inicializar partículas flotantes
            createParticles();
    });
});
