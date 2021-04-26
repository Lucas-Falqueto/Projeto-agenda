export default class CadastraContato {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }
    init() {
        this.events();
    }

    events() {
        if (!this.form) return;
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e) {
        const el = e.target; // 'e' aqui ta recebendo o formulario
        const nomeInput = el.querySelector('input[name="nome"]');
        let error = false;

        if (!nomeInput.value) {
            alert('Campo nome não pode está vazio');
            error = true;
        }

        if (!error) el.submit();
    }
}