/* ==========================================================================
   Dados Fictícios - Prêmio Lumina de Cinema 2026
   ========================================================================== */

const nomineesData = {
    filme: [
        {
            title: "O Horizonte Infinito",
            subtitle: "Direção: Helena Rostova",
            desc: "Uma épica jornada intertemporal sobre a busca da humanidade por um novo lar além das estrelas.",
            image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80"
        },
        {
            title: "Ecos do Silêncio",
            subtitle: "Direção: Marcus Vance",
            desc: "Um thriller psicológico tenso focado no mistério não resolvido de uma pequena vila costeira.",
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80"
        },
        {
            title: "A Úsima Sinfonia",
            subtitle: "Direção: Clara Mendoça",
            desc: "Um emocionante drama biográfico retratando a vida de um compositor em meio às transformações sociais do século XX.",
            image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80"
        },
        {
            title: "Sombras da Metrópole",
            subtitle: "Direção: David Chen",
            desc: "Um noir moderno estilizado que explora a corrupção e os segredos escondidos sob as luzes de neon.",
            image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80"
        }
    ],
    direcao: [
        {
            title: "Helena Rostova",
            subtitle: "Filme: O Horizonte Infinito",
            desc: "Aclamada por sua visão ousada e pelo uso magistral de efeitos visuais aliados a uma narrativa profunda.",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
        },
        {
            title: "Marcus Vance",
            subtitle: "Filme: Ecos do Silêncio",
            desc: "Reconhecido por construir atmosferas sufocantes e extrair atuações viscerais do seu elenco.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
        },
        {
            title: "Clara Mendoça",
            subtitle: "Filme: A Última Sinfonia",
            desc: "Destacada pela sensibilidade estética, enquadramentos poéticos e sincronia perfeita com a trilha sonora.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
        },
        {
            title: "David Chen",
            subtitle: "Filme: Sombras da Metrópole",
            desc: "Elogiado pela inovação na direção de fotografia e pelo ritmo eletrizante conferido ao filme.",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80"
        }
    ],
    ator: [
        {
            title: "Arthur Pendelton",
            subtitle: "Como 'Dr. Gabriel' em O Horizonte Infinito",
            desc: "Uma atuação magnética e vulnerável que carrega o peso emocional de toda a narrativa espacial.",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80"
        },
        {
            title: "Lucas Thorne",
            subtitle: "Como 'Detetive Hayes' em Sombras da Metrópole",
            desc: "Entrega uma performance intensa, retratando a decadência moral com profundidade e carisma.",
            image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80"
        },
        {
            title: "Gabriel Sampaio",
            subtitle: "Como 'Maestro Roberto' em A Última Sinfonia",
            desc: "Sua entrega física e emocional ao papel do compositor foi amplamente celebrada pela crítica.",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80"
        },
        {
            title: "Tomas Andrade",
            subtitle: "Como 'Jonas' em Ecos do Silêncio",
            desc: "Um trabalho sutil e perturbador, capaz de transmitir angústia sem usar palavras.",
            image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80"
        }
    ],
    atriz: [
        {
            title: "Sophia Lorenzi",
            subtitle: "Como 'Elena' em Ecos do Silêncio",
            desc: "Uma performance aterrorizante e humana que domina a tela do primeiro ao último minuto.",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80"
        },
        {
            title: "Beatriz Cavalcanti",
            subtitle: "Como 'Astronauta Sarah' em O Horizonte Infinito",
            desc: "Traz força, resiliência e sensibilidade em um papel desafiador e fisicamente exigente.",
            image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80"
        },
        {
            title: "Isabella Vane",
            subtitle: "Como 'Valéria' em Sombras da Metrópole",
            desc: "Sua interpretação enigmática redefine a clássica figura da mulher fatal do cinema noir.",
            image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80"
        },
        {
            title: "Camila Rios",
            subtitle: "Como 'Sofia' em A Última Sinfonia",
            desc: "Atuação emocionante que traz leveza, suporte e grande peso dramático ao longa.",
            image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
        }
    ]
};

const votingCategories = [
    {
        id: "filme",
        title: "Melhor Filme",
        options: [
            { id: "f1", name: "O Horizonte Infinito", sub: "Helena Rostova", votes: 420 },
            { id: "f2", name: "Ecos do Silêncio", sub: "Marcus Vance", votes: 310 },
            { id: "f3", name: "A Última Sinfonia", sub: "Clara Mendoça", votes: 190 },
            { id: "f4", name: "Sombras da Metrópole", sub: "David Chen", votes: 280 }
        ]
    },
    {
        id: "direcao",
        title: "Melhor Direção",
        options: [
            { id: "d1", name: "Helena Rostova", sub: "O Horizonte Infinito", votes: 380 },
            { id: "d2", name: "Marcus Vance", sub: "Ecos do Silêncio", votes: 290 },
            { id: "d3", name: "Clara Mendoça", sub: "A Última Sinfonia", votes: 210 },
            { id: "d4", name: "David Chen", sub: "Sombras da Metrópole", votes: 150 }
        ]
    },
    {
        id: "ator",
        title: "Melhor Ator",
        options: [
            { id: "a1", name: "Arthur Pendelton", sub: "O Horizonte Infinito", votes: 450 },
            { id: "a2", name: "Lucas Thorne", sub: "Sombras da Metrópole", votes: 310 },
            { id: "a3", name: "Gabriel Sampaio", sub: "A Última Sinfonia", votes: 200 },
            { id: "a4", name: "Tomas Andrade", sub: "Ecos do Silêncio", votes: 180 }
        ]
    },
    {
        id: "atriz",
        title: "Melhor Atriz",
        options: [
            { id: "at1", name: "Sophia Lorenzi", sub: "Ecos do Silêncio", votes: 510 },
            { id: "at2", name: "Beatriz Cavalcanti", sub: "O Horizonte Infinito", votes: 390 },
            { id: "at3", name: "Isabella Vane", sub: "Sombras da Metrópole", votes: 220 },
            { id: "at4", name: "Camila Rios", sub: "A Última Sinfonia", votes: 160 }
        ]
    }
];

const winnersData = [
    { category: "Melhor Filme", winner: "O Horizonte Infinito", sub: "Direção: Helena Rostova" },
    { category: "Melhor Direção", winner: "Helena Rostova", sub: "Filme: O Horizonte Infinito" },
    { category: "Melhor Ator Principal", winner: "Arthur Pendelton", sub: "Papel: Dr. Gabriel" },
    { category: "Melhor Atriz Principal", winner: "Sophia Lorenzi", sub: "Papel: Elena" }
];

/* ==========================================================================
   Funções de Renderização e Lógica Interativa
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    initTabSystem();
    renderNominees("filme");
    renderVotingSection();
    renderWinnersSection();
});

// 1. Alternância entre Abas na seção "Categorias & Indicados"
function initTabSystem() {
    const tabButtons = document.querySelectorAll("#categoryTabs .tab-btn");
    
    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            tabButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            
            const categoryKey = button.getAttribute("data-cat");
            renderNominees(categoryKey);
        });
    });
}

// Renderiza os cards dos indicados conforme a categoria selecionada
function renderNominees(categoryKey) {
    const container = document.getElementById("nomineesContainer");
    const items = nomineesData[categoryKey] || [];
    
    container.innerHTML = items.map(item => `
        <div class="nominee-card">
            <div class="nominee-img-wrap">
                <img src="${item.image}" alt="${item.title}" loading="lazy">
            </div>
            <div class="nominee-info">
                <h3 class="nominee-title">${item.title}</h3>
                <div class="nominee-subtitle">${item.subtitle}</div>
                <p class="nominee-desc">${item.desc}</p>
            </div>
        </div>
    `).join("");
}

// 2. Renderização e Lógica do Sistema de Votação
function renderVotingSection() {
    const container = document.getElementById("votingContainer");
    
    container.innerHTML = votingCategories.map(cat => `
        <div class="voting-block" data-cat-id="${cat.id}">
            <h3 class="voting-title"><i class="fa-solid fa-clapperboard gold-icon"></i> ${cat.title}</h3>
            <div class="vote-options">
                ${cat.options.map(opt => `
                    <div class="vote-card" data-opt-id="${opt.id}" onclick="handleVote('${cat.id}', '${opt.id}')">
                        <h4>${opt.name}</h4>
                        <p>${opt.sub}</p>
                        <div class="progress-bar-bg">
                            <div class="progress-bar-fill" id="bar-${opt.id}"></div>
                        </div>
                        <div class="vote-percent" id="percent-${opt.id}">Clique para votar</div>
                    </div>
                `).join("")}
            </div>
        </div>
    `).join("");
}

// Processa o voto do usuário e atualiza a contagem/porcentagem
function handleVote(categoryId, optionId) {
    const category = votingCategories.find(c => c.id === categoryId);
    if (!category) return;

    // Registra o incremento no item escolhido
    category.options.forEach(opt => {
        if (opt.id === optionId) {
            opt.votes += 1;
        }
    });

    // Calcula total de votos da categoria
    const totalVotes = category.options.reduce((acc, curr) => acc + curr.votes, 0);

    // Atualiza estado visual e barras de progresso
    category.options.forEach(opt => {
        const percentage = Math.round((opt.votes / totalVotes) * 100);
        const cardElem = document.querySelector(`[data-opt-id="${opt.id}"]`);
        const fillElem = document.getElementById(`bar-${opt.id}`);
        const percentTextElem = document.getElementById(`percent-${opt.id}`);

        if (cardElem) {
            if (opt.id === optionId) {
                cardElem.classList.add("selected");
            } else {
                cardElem.classList.remove("selected");
            }
        }

        if (fillElem) {
            fillElem.style.width = `${percentage}%`;
        }

        if (percentTextElem) {
            percentTextElem.innerText = `${percentage}% (${opt.votes} votos)`;
        }
    });
}

// 3. Revelação dos Vencedores (Envelopes Dourados)
function renderWinnersSection() {
    const container = document.getElementById("winnersContainer");

    container.innerHTML = winnersData.map((item, index) => `
        <div class="winner-card">
            <i class="fa-solid fa-envelope gold-icon envelope-icon" id="icon-${index}"></i>
            <h3 class="winner-category">${item.category}</h3>
            <button class="btn btn-primary reveal-btn" onclick="revealWinner(${index})">
                <i class="fa-solid fa-envelope-open"></i> Abrir Envelope
            </button>
            <div class="winner-content" id="winner-${index}">
                <div class="winner-name"><i class="fa-solid fa-trophy"></i> ${item.winner}</div>
                <div class="winner-sub">${item.sub}</div>
            </div>
        </div>
    `).join("");
}

function revealWinner(index) {
    const winnerContent = document.getElementById(`winner-${index}`);
    const icon = document.getElementById(`icon-${index}`);
    const button = winnerContent.previousElementSibling;

    if (winnerContent) {
        winnerContent.classList.add("revealed");
    }

    if (icon) {
        icon.className = "fa-solid fa-envelope-open-text gold-icon envelope-icon";
    }

    if (button) {
        button.style.display = "none";
    }
}