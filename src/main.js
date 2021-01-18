import Modal from './components/custom-modal.js'

customElements.define('custom-modal', Modal);

const modal = document.querySelector('custom-modal')
modal.addEventListener('close', event => modal.removeAttribute('open'));
modal.addEventListener('send', event => console.log(event, 'sent'));
document.querySelector('#open').addEventListener('click', event => modal.setAttribute('open', true));
