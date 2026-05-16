// Adiciona um efeito visual sutil ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
    console.log("Página do Daniel carregada e pronta!");

    // Você pode adicionar animações mais complexas aqui se desejar
    // Por exemplo, fazer os links aparecerem um por um
    
    const links = document.querySelectorAll('.link-card');
    
    links.forEach((link, index) => {
        // Adiciona um pequeno delay na animação de entrada de cada link
        link.style.opacity = '0';
        link.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            link.style.transition = 'all 0.5s ease-out';
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, 300 + (index * 200)); // Delay inicial + 200ms por item
    });
});
