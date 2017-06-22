'use strict';
const Registercard = () =>{

  const row              = $('<div class="row center"></div>');
  const divImgPhone      = $('<div class="img-validate-phone col s4 offset-s4 m12" data-indicators="true"></div>');
  const imgPhone         = $('<img src="assets/img/icons/bcp-logo.png" alt="icon-phone">');
  const divText          = $('<div class="text-validate-phone col s11 m12 padding-bottom"></div>');
  const title            = $('<h5>Resgistra tu tarjeta debito BCP</h5>');
  const description      = $('<p class="">por ahora aceptamos cuentas de ahorro y/o corriente en soles</p>');
  const divValidate      = $('<div class="form-validate-code col s12 m9 padding-bottom"></div>');
  const pInput1          = $('<p></p>');
  const pEscanear        = $('<p></p>');
  const pInput2          = $('<p>Fecha de vencimiento</p>');
  const inputCard        = $('<input class="number-phone" id="number-phone" type="text" class="validate" placeholder="Nombre"/>');
  const inputMonth       = $('<input class="number-phone" id="number-phone" type="text" class="validate" placeholder="correo@ejemplo.com"/>');
  const inputYear        = $('"/" <input class="number-phone" id="number-phone" type="text" class="validate" placeholder="Ingresa clave de 6 digitos"/>');
  const span1            = $('<span><img class="form-validate-code" src="assets/img/icons/card.png"></span>');
  const span2            = $('<span><img class="form-validate-code" src="assets/img/icons/scan.png">Escanear tarjeta</span>');
  const span3            = $('<span><img class="form-validate-code" src="assets/img/icons/question.png"></span>');
  const btnContinuar     = $('<a class="btn-large btn-continuar col s10 offset-s1 background-yellow waves-effect center white-text darken-text-2">CREAR CUENTA</a>');

  pEscanear.append(span2);
  pInput1.append(inputCard);
  pInput1.append(span1);
  pInput2.append(inputMonth);
  pInput2.append(inputYear);
  divValidate.append(pInput1);
  divValidate.append(pEscanear);
  divValidate.append(pInput2);
  divText.append(title);
  divText.append(description);
  divImgPhone.append(imgPhone);
  row.append(span3);
  row.append(divImgPhone);
  row.append(divText);
  row.append(divValidate);
  row.append(btnContinuar);
  btnContinuar.addClass('disabled');


  inputCard.keydown (function(event){
    CuentaRegresiva();
    const codigoNum = event.which;
    if(codigoNum == 8){//borrar

    }
    if(codigoNum>=48 && codigoNum<=57&& this.value.length<2 || codigoNum==8|| codigoNum==116 ){
      return true;
    }
    else {
      return false;
    }
  });
  btnContinuar.on('click',(e) =>{
    e.preventDefault();

    const phoneOK = req.body.phone;
    const cardNumberOk = inputCard.val();
    const cardMonthOk = inputMonth.val();
    const cardYearOk = inputYear.val();
    const cardPasswordOK =inputPassword.val();
    $.post('api/createUser',{
      phone:phoneOk,
      cardNumber:cardNumberOk,
      cardMonth:cardMonthOk,
      cardYear:cardYearOk,
      cardPassword:cardPasswordOK
    },(response)=>{
  //    state.user = {"code":response.data.code,"phone":response.data.phone};//creando las propiedades de mi ususario a partir de la respiesta del JSON
//      console.log(state.user.code);
  //    console.log(state.user.phone);
      alert(response.message);
      state.selectedScreen="registerCard";
      container.empty();
      container.append(Validatecard ());
    },'JSON');
  });

  return row;
}
const Validatecard = () =>{

  const row              = $('<div class="row center"></div>');
  const divImgPhone      = $('<div class="img-validate-phone col s4 offset-s4 m12" data-indicators="true"></div>');
  const imgPhone         = $('<img src="assets/img/icons/bcp-logo.png" alt="icon-phone">');
  const divText          = $('<div class="text-validate-phone col s11 m12 padding-bottom"></div>');
  const title            = $('<h5>Ingresa la aclve de tu tarjeta</h5>');
  const description      = $('<p class="">Tajeta ****</p>');
  const divValidate      = $('<div class="form-validate-code col s12 m9 padding-bottom"></div>');
  const pInput1          = $('<p></p>');
  const inputPassword    = $('<input class="number-phone" id="number-phone" type="text" class="validate" placeholder="Nombre"/>');
  const span1            = $('<span><img class="form-validate-code" src="assets/img/icons/lock.png"></span>');
  const span2            = $('<span><img class="form-validate-code" src="assets/img/icons/scan.png">Carga</span>');
  const span3            = $('<span><img class="form-validate-code" src="assets/img/icons/question.png"></span>');
  const btnContinuar     = $('<a class="btn-large btn-continuar col s10 offset-s1 background-yellow waves-effect center white-text darken-text-2">REGSITRAR</a>');

  pInput1.append(inputPassword);
  pInput1.append(span1);
  divValidate.append(pInput1);
  divText.append(title);
  divText.append(description);
  divImgPhone.append(imgPhone);
  row.append(span3);
  row.append(divImgPhone);
  row.append(divText);
  row.append(divValidate);
  row.append(btnContinuar);
  btnContinuar.addClass('disabled');


  inputPassword.keydown (function(event){
    CuentaRegresiva();
    const codigoNum = event.which;
    if(codigoNum == 8){//borrar

    }
    if(codigoNum>=48 && codigoNum<=57&& this.value.length<2 || codigoNum==8|| codigoNum==116 ){
      return true;
    }
    else {
      return false;
    }
  });


  return row;
}
