import template from './template.html';
import style from './style.css';

const templateEl = document.createElement('template');
templateEl.innerHTML = '<style>' + style.toString() + '</style>' + template;

class Modal extends HTMLElement {
    static get observedAttributes () {
        return ['title', 'open', 'closable', 'right-btn'];
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'});

        this.shadowRoot.appendChild(
            document.importNode(templateEl.content, true)
          );

        // Elements in Shadow DOM
        this.modalWrapper = this.shadowRoot.querySelector('.modal-wrapper')
        this.modalTitle = this.shadowRoot.querySelector('.modal-title')
        this.closeIcon = this.shadowRoot.querySelector('.close');
        this.leftBtn = this.shadowRoot.querySelector('.left-btn');
        this.rightBtn = this.shadowRoot.querySelector('.right-btn');

        // Listeners
        this.closeIcon.addEventListener('click', this._dispatchEvent('close'));
        this.leftBtn.addEventListener('click', this._dispatchEvent('close'));
        this.rightBtn.addEventListener('click', this._dispatchEvent('send'))
    }

    connectedCallback() {
       
    }


    attributeChangedCallback(attr, oldValue, newValue) {
        switch(attr) {
            case 'title':
                this.modalTitle.innerText = newValue;
            case 'closable':
                if (attr == 'closable') {
                    this.leftBtn.classList.add('visible');
                }
            case 'right-btn':
                this.rightBtn.classList.add('visible');
                this.rightBtn.innerText = newValue ? (newValue.charAt(0).toUpperCase() + newValue.slice(1)) : 'Send'
            case 'open':
                if (attr == 'open') {
                    if (newValue == 'true')
                        this.modalWrapper.classList.add('modal-open');
                    else
                        this.modalWrapper.classList.remove('modal-open');
                }
        }
    }

    _dispatchEvent (name) {
        return () => {
          const ev = new CustomEvent(name);
          this.dispatchEvent(ev);
        };
    }
}

customElements.define('custom-modal', Modal);

const modal = document.querySelector('custom-modal')
modal.addEventListener('close', event => modal.removeAttribute('open'));
modal.addEventListener('send', event => console.log(event, 'sent'));
document.querySelector('#open').addEventListener('click', event => modal.setAttribute('open', true));
