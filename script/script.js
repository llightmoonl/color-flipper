class Color{
    constructor(container, textColor) {
        this.container = document.querySelector(`.${container}`);
        this.textColor = this.container.querySelector(`.${textColor}`);
    }
    change(){
        const colorChar = ['A','B','C','D','E','F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        let color =  "#";
        for(let i = 0; i < 6; i++){
            color += colorChar[Math.floor(Math.random()*(colorChar.length-1))];
        }

        this.container.style.backgroundColor = color;
        this.textColor.textContent = color;
        this.textColor.style.color = color;
    }
    simple(){
        this.container.style.backgroundColor = '#FFFFFF';
        this.textColor.textContent = '#FFFFFF';
        this.textColor.style.color = '#FFFFFF';
    }
}

const color = new Color('main', 'functional__color');
const functionalColor = document.querySelector('.functional__color');

const headerMenu = document.querySelector('.header__menu');
headerMenu.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        if(event.target.innerHTML === "Simple"){
            color.simple();
        }
        else if(event.target.innerHTML === "Copy Hex"){
            let copiedText = document.createElement("textarea");
            document.body.appendChild(copiedText);

            copiedText.value = functionalColor.textContent;
            copiedText.select();
            document.execCommand("copy");

            document.body.removeChild(copiedText);
        }
    }
})

const functionalContent = document.querySelector('.functional__content');
functionalContent.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
        color.change();
    }
})