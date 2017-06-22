'use strict';
const Validateuser = () =>{

  const row              = $('<div class="row center"></div>');
  const divImgPhone      = $('<div class="img-validate-phone col s4 offset-s4 m12" data-indicators="true"></div>');
  const imgPhone         = $('<img src="assets/img/icons/lockone.png" alt="icon-phone">');
  const divText          = $('<div class="text-validate-phone col s11 m12 padding-bottom"></div>');
  const title            = $('<h5>Crea tu usuario Yape</h5>');
  const description      = $('<p class="">Ingresa un nombre , email y clave d eusuario</p>');
  const divValidate      = $('<div class="form-validate-code col s12 m9 padding-bottom"></div>');
  const pInput1          = $('<p></p>');
  const pInput2          = $('<p></p>');
  const pInput3          = $('<p></p>');
  const inputName        = $('<input class="number-phone" id="number-phone" type="text" class="validate" placeholder="Nombre"/>');
  const inputEmail       = $('<input class="number-phone" id="number-phone" type="text" class="validate" placeholder="correo@ejemplo.com"/>');
  const inputPassword    = $('<input class="number-phone" id="number-phone" type="text" class="validate" placeholder="Ingresa clave de 6 digitos"/>');
  const span1            = $('<span><img class="form-validate-code" src="assets/img/icons/user.png"></span>');
  const span2            = $('<span><img class="form-validate-code" src="assets/img/icons/message-gray.png"></span>');
  const span3            = $('<span><img class="form-validate-code" src="assets/img/icons/lock.png"></span>');
  const span4            = $('<span class="cuenta-regresiva">Cuida esta clave como oro, es tu acceso a Yape</span>');
  const btnContinuar     = $('<a class="btn-large btn-continuar col s10 offset-s1 background-yellow waves-effect center white-text darken-text-2">CREAR CUENTA</a>');

  pInput3.append(span3);
  pInput3.append(inputPassword);
  pInput3.append(span4);
  pInput2.append(span2);
  pInput2.append(inputEmail);
  pInput1.append(span1);
  pInput1.append(inputName);
  divValidate.append(pInput1);
  divValidate.append(pInput2);
  divValidate.append(pInput3);
  divText.append(title);
  divText.append(description);
  divImgPhone.append(imgPhone);
  row.append(divImgPhone);
  row.append(divText);
  row.append(divValidate);
  row.append(btnContinuar);
  btnContinuar.addClass('disabled');


  inputName.keydown (function(event){
    //CuentaRegresiva();
    const codigoNum = event.which;
    if((inputPhone.val().length)<=6){
      const codeForReview=inputPhone.val();
      if(codeForReview == state.user.code){
        alert('dson iguales NEXT');
      }
      else{
        alert('Error otro coddigo');
      }
      }else {
            console.log('menos de 6');
            }

    if(codigoNum == 8){//borrar

    }

    if((codigoNum>=97 && codigoNum<=122)&&||(codigoNum>=65 && codigoNum<=90)||codigoNum==39 || codigoNum==32 || this.value.length<30 || codigoNum==8|| codigoNum==116 ){
      return true;
    }
    else {
      return false;
    }
  });
  btnContinuar.on('click',(e) =>{
    e.preventDefault();
    const phoneOk=state.user.phone;
    const nameOk=inputName.val();
    const emailOk=inputEmail.val();
    const passwordOk=inputPassword.val();
    $.post('api/createUser',{
      phone:phoneOk,
      name:nameOk,
      email:emailOK,
      password:passwordOk
    },(response)=>{
  //    state.user = {"code":response.data.code,"phone":response.data.phone};//creando las propiedades de mi ususario a partir de la respiesta del JSON
//      console.log(state.user.code);
  //    console.log(state.user.phone);
      alert(response.message);
      state.selectedScreen="creandoUsuario";
      container.empty();
      container.append(Bienyape ());
    },'JSON');
  });

  return row;
}
const CorrectRegister = () =>{
//Mostrar por 3segundos
  const row              = $('<div class="row center"></div>');
  const divImgPhone      = $('<div class="img-validate-phone col s4 offset-s4 m12" data-indicators="true"></div>');
  const imgPhone         = $('<img src="assets/img/icons/check.png" alt="icon-phone">');
  const divText          = $('<div class="text-validate-phone col s11 m12 padding-bottom"></div>');
  const pInput1          = $('<p></p>');
  const span1            = $('<span>!Bien!<br>Ahora puedes usar Yape</span>');

  pInput1.append(span1);
  divText.append(pInput1);
  divImgPhone.append(imgPhone);
  row.append(divImgPhone);
  row.append(divText);

return row;
}
