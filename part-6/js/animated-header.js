// animated header class

class AnimatedHeader {
    constructor(id, wordBreak) {
        this.mainContainer = document.getElementById(id);
        this.textContainer = this.mainContainer.querySelector('.text-reveal');
        this.splitText = this.textContainer.innerText.split(/\s/);
        this.wordBreak = wordBreak;
    }

    // initialize new instance of AnimatedHeader

    init() {
        this._renderSplitText();
        this._animateChildSpans();
    }

    // -----------------------------------------

    // seperate header text into spans and render it

    _renderSplitText() {
        this.textContainer.innerText = '';
        let breakTagWasRendered = false;
        this.splitText.forEach((word, index) => {
            const span = document.createElement('span');
            span.innerText = `${word} `;
            if(index === this.wordBreak) {
                const breakTag = document.createElement('br');
                this.textContainer.appendChild(breakTag);
                breakTagWasRendered = true;
            }
            if(!breakTagWasRendered) span.classList.add('animate-down');
            if(breakTagWasRendered) span.classList.add('animate-up');
            this.textContainer.appendChild(span);
        });
    }

    // -----------------------------------------

    // animate spans inside header

    _animateChildSpans() {
        const downwardSpans = this.textContainer.querySelectorAll('.animate-down');
        const upwardSpans = this.textContainer.querySelectorAll('.animate-up');
        const allSpans = [...downwardSpans, ...upwardSpans];
        allSpans.forEach((span, index) => {
            setTimeout(() => {
                span.classList.remove('animate-down');
                span.classList.remove('animate-up');
            }, index * 200);
        });
    }

    // -----------------------------------------

}

// -----------------------------------------

const animatedHeader = new AnimatedHeader("text-reveal-one", 5);
animatedHeader.init();