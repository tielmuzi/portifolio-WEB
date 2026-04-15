// Initialize Lucide icons
// Inicializa os ícones do Lucide
lucide.createIcons();

// Theme toggle function
// Função de alternância de tema
function toggleTheme() {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
    } else {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
    }
}

// Check for saved theme preference or prefer-color-scheme
// Verifica preferência de tema salva ou configuração do sistema
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

// Mobile menu toggle
// Alterna o menu mobile
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// Typing effect
// Efeito de digitação para o texto do hero
const words = ['Martins', 'Developer', 'Full Stack', 'Mobile Dev'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById('typing-text');

function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let typeSpeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
    }
    
    setTimeout(typeEffect, typeSpeed);
}

// Start typing effect
setTimeout(typeEffect, 1000);

// Scroll reveal animation
// Animação de revelação ao rolar a página
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-reveal').forEach((el) => observer.observe(el));

// Navbar scroll effect
// Efeito de sombra no navbar durante o scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('shadow-lg');
    } else {
        navbar.classList.remove('shadow-lg');
    }
    
    lastScroll = currentScroll;
});

// Project details modal
// Modal de detalhes dos projetos
const projectDetails = {
    'conexao': {
        title: 'Conexão Digital Inclusiva',
        content: `
            <p><strong>Descrição completa:</strong> Projeto educativo completo sobre acessibilidade digital, desenvolvido para promover a inclusão de pessoas neurodivergentes e com deficiência (PCDs).</p>
            
            <h4 class="font-semibold text-slate-900 dark:text-white mt-4 mb-2">Funcionalidades Principais:</h4>
            <ul class="list-disc list-inside space-y-1">
                <li>Dashboard avançado com gráficos 3D (Three.js) e visualizações interativas</li>
                <li>Coleta de dados reais sobre acessibilidade digital</li>
                <li>Simulador de dificuldades para conscientização</li>
                <li>Chatbot com integração Gemini AI</li>
                <li>Toolbar de acessibilidade (alto contraste, aumento de fonte, leitor de tela)</li>
                <li>Navegação por teclado e comandos de voz</li>
                <li>Sistema de fallback para localStorage quando offline</li>
            </ul>

            <h4 class="font-semibold text-slate-900 dark:text-white mt-4 mb-2">Tecnologias Avançadas:</h4>
            <ul class="list-disc list-inside space-y-1">
                <li>Three.js e WebGL para visualizações 3D</li>
                <li>D3.js para mapas de calor e correlações</li>
                <li>Chart.js para gráficos estatísticos</li>
                <li>Web Speech API para comandos de voz</li>
                <li>Service Workers para PWA</li>
            </ul>

            <div class="mt-6 flex gap-3">
                <a href="https://github.com/tielmuzi/Conexao-Digital-Inclusiva" target="_blank" class="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg text-sm font-medium">
                    <i data-lucide="github" class="w-4 h-4"></i>
                    Ver Código
                </a>
            </div>
        `
    },
    'direitos-app': {
        title: 'Direitos Digitais - Aplicativo',
        content: `
            <p><strong>Descrição completa:</strong> Aplicação moderna desenvolvida em React 19 para conscientização sobre direitos humanos no ambiente digital, com foco em privacidade e segurança.</p>
            
            <h4 class="font-semibold text-slate-900 dark:text-white mt-4 mb-2">Funcionalidades:</h4>
            <ul class="list-disc list-inside space-y-1">
                <li>Questionário anônimo sobre experiências digitais</li>
                <li>Sistema de relato de violações de direitos</li>
                <li>Dashboard dinâmico com dados em tempo real</li>
                <li>Integração com ODS 16 (Paz, Justiça e Instituições Eficazes)</li>
                <li>Design responsivo com Tailwind CSS</li>
                <li>Componentes UI com shadcn/ui</li>
            </ul>

            <h4 class="font-semibold text-slate-900 dark:text-white mt-4 mb-2">Stack Tecnológico:</h4>
            <ul class="list-disc list-inside space-y-1">
                <li>React 19.1.0 com Vite</li>
                <li>Tailwind CSS para estilização</li>
                <li>shadcn/ui para componentes</li>
                <li>Supabase com PostgreSQL</li>
                <li>Row Level Security (RLS) para proteção de dados</li>
                <li>React Hook Form + Zod para validação</li>
                <li>Recharts para visualização de dados</li>
            </ul>

            <div class="mt-6 flex gap-3">
                <a href="https://github.com/tielmuzi/Direitos-Digitais-APP" target="_blank" class="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg text-sm font-medium">
                    <i data-lucide="github" class="w-4 h-4"></i>
                    Ver Código
                </a>
            </div>
        `
    },
    'snake': {
        title: 'Snake Game MZ92',
        content: `
            <p><strong>Descrição completa:</strong> Jogo da cobrinha moderno e responsivo com múltiplos modos visuais, sistema de níveis progressivos e controles adaptativos para todas as plataformas.</p>
            
            <h4 class="font-semibold text-slate-900 dark:text-white mt-4 mb-2">Recursos:</h4>
            <ul class="list-disc list-inside space-y-1">
                <li>3 modos visuais: Light, Dark e Neon com músicas temáticas</li>
                <li>Controles múltiplos: teclado (setas/WASD), mouse e touch (swipe)</li>
                <li>Sistema inteligente que previne movimentos reversos acidentais</li>
                <li>Sistema de níveis com velocidade progressiva</li>
                <li>Estatísticas persistentes no localStorage</li>
                <li>Efeitos sonoros e música de fundo com Web Audio API</li>
                <li>Recursos de acessibilidade integrados</li>
            </ul>

            <h4 class="font-semibold text-slate-900 dark:text-white mt-4 mb-2">Tecnologias:</h4>
            <ul class="list-disc list-inside space-y-1">
                <li>HTML5 Canvas para renderização</li>
                <li>JavaScript ES6+</li>
                <li>Tailwind CSS para UI</li>
                <li>Web Audio API para som</li>
                <li>LocalStorage API para persistência</li>
            </ul>

            <div class="mt-6 flex gap-3">
                <a href="https://github.com/tielmuzi/snakemz92" target="_blank" class="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg text-sm font-medium">
                    <i data-lucide="github" class="w-4 h-4"></i>
                    Ver Código
                </a>
            </div>
        `
    },
    'direitos-web': {
        title: 'Direitos Digitais - Web',
        content: `
            <p><strong>Descrição completa:</strong> Versão web do projeto acadêmico sobre Direitos Humanos no Universo Digital, desenvolvida com tecnologias vanilla para máxima performance e compatibilidade.</p>
            
            <h4 class="font-semibold text-slate-900 dark:text-white mt-4 mb-2">Funcionalidades:</h4>
            <ul class="list-disc list-inside space-y-1">
                <li>Questionário anônimo sobre direitos digitais</li>
                <li>Relato de violações de forma segura e anônima</li>
                <li>Dashboard com visualização de dados em tempo real</li>
                <li>Modo claro e escuro</li>
                <li>Design responsivo para todos os dispositivos</li>
                <li>Notificações push para atualizações</li>
                <li>Funcionamento offline com Service Workers</li>
            </ul>

            <h4 class="font-semibold text-slate-900 dark:text-white mt-4 mb-2">Tecnologias:</h4>
            <ul class="list-disc list-inside space-y-1">
                <li>HTML5 semântico</li>
                <li>CSS3 moderno</li>
                <li>JavaScript vanilla</li>
                <li>Chart.js para gráficos</li>
                <li>Supabase para backend</li>
                <li>Service Workers para PWA</li>
                <li>Push API para notificações</li>
            </ul>

            <div class="mt-6 flex gap-3">
                <a href="https://github.com/tielmuzi/direitos-digitais-web" target="_blank" class="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg text-sm font-medium">
                    <i data-lucide="github" class="w-4 h-4"></i>
                    Ver Código
                </a>
            </div>
        `
    }
};

function showProjectDetails(projectId) {
    const modal = document.getElementById('project-modal');
    const content = document.getElementById('modal-content');
    const title = document.getElementById('modal-title');
    const body = document.getElementById('modal-body');
    
    const project = projectDetails[projectId];
    if (project) {
        title.textContent = project.title;
        body.innerHTML = project.content;
        modal.classList.remove('hidden');
        setTimeout(() => {
            content.classList.remove('scale-95', 'opacity-0');
            content.classList.add('scale-100', 'opacity-100');
        }, 10);
        lucide.createIcons();
    }
}

function closeProjectDetails() {
    const modal = document.getElementById('project-modal');
    const content = document.getElementById('modal-content');
    
    content.classList.remove('scale-100', 'opacity-100');
    content.classList.add('scale-95', 'opacity-0');
    
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

// Close modal on escape key
// Fecha o modal quando a tecla Escape é pressionada
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProjectDetails();
    }
});