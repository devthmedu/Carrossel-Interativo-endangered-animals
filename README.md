
# Carrossel Interativo

Este projeto é um carrossel de slides interativo com transições suaves, navegação automática e manual, e uma barra de tempo para indicar a progressão dos slides. O carrossel é responsivo e oferece uma experiência visual atraente com suporte a botões e miniaturas para navegação.

## Recursos

- Transições suaves entre slides
- Navegação automática com intervalo configurável
- Navegação manual por botões e miniaturas
- Barra de tempo que indica o progresso do slide atual
- Estilo responsivo para diferentes tamanhos de tela

## Estrutura do Projeto

### HTML

O HTML define a estrutura básica do carrossel, incluindo slides, miniaturas, botões de navegação e a barra de tempo.

```html
<div class="carousel">
    <div class="list">
        <!-- Slides -->
        <div class="item">
            <img src="slide1.jpg" alt="Slide 1">
            <div class="content">
                <div class="author">Author 1</div>
                <div class="title">Title 1</div>
                <div class="topic">Topic 1</div>
                <div class="des">Description 1</div>
                <div class="buttons">
                    <button>Button 1</button>
                    <button>Button 2</button>
                </div>
            </div>
        </div>
        <!-- Adicione outros slides conforme necessário -->
    </div>
    <div class="thumbnail">
        <!-- Miniaturas -->
        <div class="item">
            <img src="thumb1.jpg" alt="Thumbnail 1">
            <div class="content">
                <div class="title">Thumb 1</div>
                <div class="description">Description</div>
            </div>
        </div>
        <!-- Adicione outras miniaturas conforme necessário -->
    </div>
    <div class="arrows">
        <button class="prev">←</button>
        <button class="next">→</button>
    </div>
    <div class="time"></div>
</div>
```

### CSS

O CSS estiliza o carrossel, incluindo transições, botões e a barra de tempo.

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

/* Estilos gerais */
html, body {
    overflow: hidden;
    margin: 0;
    padding: 0;
}

body {
    background-color: #000;
    color: #fff;
    font-family: 'Poppins', sans-serif;
}

/* Estilo do carrossel */
.carousel {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    position: relative;
}

.carousel .list .item {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
}

.carousel .list .item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.carousel .list .item .content {
    position: absolute;
    top: 20%;
    width: 80%;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    text-shadow: 0 5px 10px #000;
}

/* Estilo dos botões */
.carousel .list .item .buttons button {
    border: none;
    background: linear-gradient(145deg, #6ab577, #5a9d5e);
    color: #fff;
    border-radius: 12px;
    padding: 10px 20px;
    cursor: pointer;
}

.carousel .list .item .buttons button:hover {
    background: linear-gradient(145deg, #5a9d5e, #6ab577);
}

/* Estilo das miniaturas */
.thumbnail {
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.thumbnail .item {
    width: 120px;
    height: 160px;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
}

.thumbnail .item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Estilo dos botões de navegação */
.arrows {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    width: 80%;
}

.arrows button {
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    border: none;
    font-size: 24px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
}

.arrows button:hover {
    background: rgba(0, 0, 0, 0.9);
}
```

### JavaScript

O JavaScript controla a navegação e a animação do carrossel.

```javascript
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const slides = carousel.querySelectorAll('.list .item');
    const thumbnails = carousel.querySelectorAll('.thumbnail .item');
    const prevButton = carousel.querySelector('.arrows .prev');
    const nextButton = carousel.querySelector('.arrows .next');
    const timeBar = carousel.querySelector('.time');

    let currentIndex = 0;
    let timer;

    const showSlide = index => {
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? '1' : '0';
            slide.style.zIndex = i === index ? '1' : '0';
        });

        thumbnails.forEach((thumb, i) => {
            thumb.style.opacity = i === index ? '1' : '0.5';
        });

        timeBar.style.width = '0%';
        timeBar.style.transition = 'none';
        requestAnimationFrame(() => {
            timeBar.style.transition = 'width 3s linear';
            timeBar.style.width = '100%';
        });
    };

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
        resetTimer();
    };

    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
        resetTimer();
    };

    const resetTimer = () => {
        clearInterval(timer);
        timer = setInterval(nextSlide, 3000); // Intervalo dos slides
    };

    // Event listeners para os botões
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Evento de clique nas miniaturas
    thumbnails.forEach((thumb, i) => {
        thumb.addEventListener('click', () => {
            currentIndex = i;
            showSlide(currentIndex);
            resetTimer();
        });
    });

    // Configuração inicial
    showSlide(currentIndex);
    resetTimer();
});
```

## Configuração e Uso

1. **Clone o repositório**:
    ```bash
    git clone <URL_DO_REPOSITORIO>
    cd <NOME_DO_REPOSITORIO>
    ```

2. **Abra o arquivo `index.html` em seu navegador** para visualizar o carrossel.

3. **Personalize o carrossel**:
   - Edite os slides e miniaturas no HTML.
   - Ajuste o estilo no CSS conforme necessário.
   - Modifique o comportamento no JavaScript, se necessário.

## Contribuição

Se você quiser contribuir para o projeto, por favor, siga estas etapas:

1. **Fork o repositório**.
2. **Crie uma branch** para suas alterações:
    ```bash
    git checkout -b minha-nova-funcionalidade
    ```
3. **Faça commit das suas alterações**:
    ```bash
    git commit -am 'Adicionei uma nova funcionalidade'
    ```
4. **Envie suas alterações**:
    ```bash
    git push origin minha-nova-funcionalidade
    ```
5. **Crie um Pull Request** no GitHub.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
