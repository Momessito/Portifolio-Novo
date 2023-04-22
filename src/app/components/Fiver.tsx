"use client"; // this is a client component 👈🏽

function Five() {
  const imagens = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      titulo: "HTML5",
      descricao: "É uma linguagem de marcação usada para estruturar e exibir conteúdo na web. É a versão mais recente do HTML e permite adicionar recursos avançados, como áudio e vídeo, gráficos em 2D e 3D e aplicativos da web.",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      titulo: "CSS3",
      descricao: "É uma linguagem de estilo usada para estilizar conteúdo na web. Ela permite definir a aparência e o layout de páginas da web e aplicativos da web, incluindo cores, fontes, margens, bordas e muito mais.",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      titulo: "JavaScript",
      descricao: "É uma linguagem de programação usada para criar interatividade e dinamismo na web. É uma das principais linguagens de programação para desenvolvimento web e permite a criação de animações, validação de formulários, carregamento dinâmico de conteúdo e muito mais.",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      titulo: "TypeScript",
      descricao: "É um superset do JavaScript que adiciona tipagem estática à linguagem. Ele é projetado para ajudar a criar aplicativos maiores e mais complexos, fornecendo recursos como verificação de tipos durante a compilação e a criação de uma API mais clara e autodocumentada.",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg",
      titulo: "Tailwind CSS",
      descricao: "É um framework de CSS utilitário que permite criar designs rapidamente. Ele fornece uma biblioteca de classes CSS pré-definidas que podem ser usadas para definir rapidamente a aparência e o layout de elementos da página.",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      titulo: "React",
      descricao: "É uma biblioteca JavaScript para criar interfaces de usuário. Ele permite a criação de aplicativos web altamente interativos e dinâmicos, usando componentes reutilizáveis e atualizações de interface do usuário baseadas em estado.",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      titulo: "Next.js",
      descricao: "É um framework de React para construir aplicativos web escaláveis. Ele fornece recursos avançados, como renderização do lado do servidor, rotas dinâmicas, geração estática de conteúdo e muito mais, tornando-o uma opção popular para aplicativos da web em escala empresarial.",
    },
  ];

  function atualizarTexto(imagem) {
    document.getElementById("titulo").innerText = imagem.titulo;
    document.getElementById("descricao").innerText = imagem.descricao;
  }

  function restaurarTexto() {
    document.getElementById("titulo").innerText = "Competencias";
    document.getElementById("descricao").innerText = "Passe o mouse em cima dos icones para ver sobre o que se trata";
  }

  return (
    <div className="Five">
      <div className="skills">
        {imagens.map((imagem, index) => (
          <img
            key={index}
            src={imagem.src}
            onClick={() => atualizarTexto(imagem)}
          />
        ))}
      </div>
      <div className="textsS">
        <h1 id="titulo">Competencias</h1>
        <p id="descricao">Passe o mouse em cima dos icones para ver sobre o que se trata</p>
            </div>
        </div>
     );
}

export default Five;