class ValidadorFormulario {
    constructor(formId){
        this.form = document.getElementById(formId);
        // Seleccionar inputs
        this.username = document.getElementById('username');
        this.emailImput = document.getElementById('email');
        this.floatingTextarea = document.getElementById('Deja tu mensaje');

        //Seleccionar span de error
        this.usernameError = document.getElementById('usernameError');
        this.emailImputError = document.getElementById('emailError');
        this.floatingTextareaError = document.getElementById('Deja tu mensajeError');
    
        //Escuchar eventos del usuario
        this.form.addEventListener('submit', (Event) =>{
            Event.preventDefault(); //Evitar el envio de formulario 

            if(this.ValidarFormulario()) {
                alert('Enviando informacion')
            }

        })
    }

    ValidarFormulario(){
        console.log('Inglreso al metodo')
    }

}


