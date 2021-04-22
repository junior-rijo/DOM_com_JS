function initTabnav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    if (tabMenu.length && tabContent.length) {

        tabContent[0].classList.add('ativo')

        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('ativo')
            })
            tabContent[index].classList.add('ativo');
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            })
        })
    };
}
initTabnav();//sempre isolar os códigos com função

function initAccordion() {

    const accordionList = document.querySelectorAll('.js-accordion dt');
    const activeClass = 'ativo';
    if (accordionList.length) {
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);
        //adcionando a classe ativo em cada elemento (2)
        function activeAccordion() {
            this.classList.toggle(activeClass)
            this.nextElementSibling.classList.toggle(activeClass)
        }
        //selecionando os dts (1)
        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion)
        })
    }
}
initAccordion();

//scroll suave
function initScrollSuave() {
    const linksIternos = document.querySelectorAll('.js-menu a[href^="#"]')

    //Passo 2 
    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        const topo = section.offsetTop

        window.scrollTo({
            top: topo,
            behavior: 'smooth',
        });
    }

    //Passo 1 - Pegando a listagem ao clicar
    linksIternos.forEach((link) => {
        link.addEventListener('click', scrollToSection)
    })
}

initScrollSuave();
function initAnimaScroll() {
    const section = document.querySelectorAll('.js-scroll')
    const windowMetade = window.innerHeight * 0.6

    function animaScroll() {
        section.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const inSectionVisible = sectionTop - windowMetade < 0;
            if (inSectionVisible) {
                section.classList.add('ativo');
            }
        })
    }

    animaScroll();

    window.addEventListener('scroll', animaScroll);
}

initAnimaScroll();