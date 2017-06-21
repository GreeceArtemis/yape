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
  inputPhone.keypress (function(event){
    const codigoNum = event.which;
    console.log(codigoNum);

    if(codigoNum>=48 && codigoNum<=57&& this.value.length<9){
        btnContinuar.addClass('disabled');
      return true;
    }
    else {
      return false;
    }

  });
  checkbox.on('click',(e) =>{
    if(inputPhone.val().length==9){
      validateDates.first="true";
      if(checkbox.prop('checked')){
        console.log(checkbox.prop('checked'));
        validateDates.second="true";
        if(validateDates.first=='true'&&validateDates.second=='true'){
          btnContinuar.removeClass('disabled');
        }
        else{
          alert('noes');
        }
      }else{
        validateDates.second="false";
        btnContinuar.addClass('disabled');
      }
      console.log(validateDates.second);
    }



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



  //console.log(inputOk);
//console.log(checkOk);

  return container;
}
