'use strict';

const Validatephone = (update) =>{
  const container        = $('<div class="container"></div>');
  const row              = $('<div class="row center"></div>');
  const divImgPhone      = $('<div class="img-validate-phone col s4 offset-s4 m12" data-indicators="true"></div>');
  const imgPhone         = $('<img src="assets/img/icons/phone.png" alt="icon-phone">');
  const divText          = $('<div class="text-validate-phone col s11 m12 padding-bottom"></div>');
  const title            = $('<h5>Para comenzar validemos tu número</h5>');
  const description      = $('<p class="">Recibirás un SMS con un código de validación</p>');
  const divValidate      = $('<div class="form-validate-phone col s12 m9 padding-bottom"></div>');
  const pInput           = $('<p></p>');
  const pCheckbox       = $('<p></p>');
  const checkbox         = $('<input type="checkbox" class="filled-in" id="filled-in-box" /><label for="filled-in-box">Acepto los <a>Términos y Condiciones</a></label>');
  const inputPhone       = $('<input class="number-phone" id="number-phone" type="text" class="validate"/>');
  const span             = $('<span><img src="assets/img/icons/phoneandnumber.png"></span>');
  const btnContinuar     = $('<a class="btn-large  col s10 offset-s1 background-yellow waves-effect center white-text darken-text-2">Continuar</a>');
  pCheckbox.append(checkbox);
  pInput.append(span);
  pInput.append(inputPhone);
  divValidate.append(pInput);
  divValidate.append(pCheckbox);
  divText.append(title);
  divText.append(description);
  divImgPhone.append(imgPhone);
  row.append(divImgPhone);
  row.append(divText);
  row.append(divValidate);
  row.append(btnContinuar);
  container.append(row);
  btnContinuar.addClass('disabled');
  const validateDates={
    first:'false',
    secon:"false"
  }
  const ConfirmPhone = (validateDates) =>{
      if(validateDates.first=='true'&& validateDates.second=='true'){
        btnContinuar.removeClass('disabled');
      }
      else{
        btnContinuar.addClass('disabled');
      }
  }

  inputPhone.keydown (function(event){
    const codigoNum = event.which;
    if((inputPhone.val().length)>=8){
      if(checkbox.prop('checked')){
          validateDates.first="true";
          validateDates.second="true";
            ConfirmPhone(validateDates);
        } else {
            validateDates.second="false";
          }
      }else {
            validateDates.first="false";
            }
      ConfirmPhone(validateDates);
    if(codigoNum == 8){//borrar
        validateDates.second="false";
        validateDates.first="false";
        ConfirmPhone(validateDates);
    }

    if(codigoNum>=48 && codigoNum<=57&& this.value.length<9 || codigoNum==8|| codigoNum==116 ){
        validateDates.first="false";
      return true;
    }
    else {
      //validateDates.first="false";
      return false;
    }
  });

  checkbox.on('click',(e) =>{
      if(checkbox.prop('checked')){
        if(inputPhone.val().length==9){
          validateDates.first="true";
          validateDates.second="true";
        } else {
            validateDates.first="false";
          }
      } else {
            validateDates.second="false";
            }
      ConfirmPhone(validateDates);
  });

btnContinuar.on('click',(e) =>{
  e.preventDefault();
  const inputOk=inputPhone.val();
  const checkOk=checkbox.val();
  $.post('api/registerNumber',{
    phone:inputOk,
    terms:checkOk
  },(response)=>{
    console.log(response);
    console.log(response.data.code);
    alert("Tu código es:"+response.data.code+"")
  },'JSON');

});


  return container;
}
