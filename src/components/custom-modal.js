import template from '../templates/custom-modal.html';
import style from '../styles/custom-modal.css';

const templateEl = document.createElement('template');
templateEl.innerHTML = '<style>' + style.toString() + '</style>' + template;

class Modal extends HTMLElement {
    static get observedAttributes () {
        return ['title', 'open', 'button', 'size'];
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'});

        this.shadowRoot.appendChild(
            document.importNode(templateEl.content, true)
          );

        // Elements in Shadow DOM
        this.modalWrapper = this.shadowRoot.querySelector('.modal-wrapper')
        this.modalDialog = this.shadowRoot.querySelector('.modal-dialog')
        this.modalTitle = this.shadowRoot.querySelector('.modal-title')
        this.modalFooter = this.shadowRoot.querySelector('footer')
        this.closeIcon = this.shadowRoot.querySelector('.close');
        this.button = this.shadowRoot.querySelector('.success-btn');

        // Listeners
        this.closeIcon.addEventListener('click', this._dispatchEvent('close'));
        this.button.addEventListener('click', this._dispatchEvent('btn-click'))
    }

    connectedCallback() {
       
    }


    attributeChangedCallback(attr, oldValue, newValue) {
        switch(attr) {
            case 'title':
                this.modalTitle.innerText = newValue;
                break;
            case 'button':
                this.button.classList.add('visible');
                this.button.innerText = newValue ? (newValue.charAt(0).toUpperCase() + newValue.slice(1)) : 'Send'
                this.modalFooter.classList.add('modal-footer')
                break;
            case 'open':
                if (newValue == 'true')
                    this.modalWrapper.classList.add('modal-open');
                else
                    this.modalWrapper.classList.remove('modal-open');
                break;
            case 'size':
                if (attr == 'size' && newValue == 'l') {
                    this.modalDialog.classList.add('modal-size-l')
                }
                break;
        }
    }

    _dispatchEvent (name) {
        return () => {
          const ev = new CustomEvent(name);
          this.dispatchEvent(ev);
        };
    }
}

export default Modal
