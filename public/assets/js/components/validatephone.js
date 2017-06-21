'use strict';

const Validatephone = (update) =>{
  const container        = $('<div class="container"></div>');
  const row              = $('<div class="row"></div>');
  const divImgPhone      = $('<div class="img-validate-phone center col s12 m12" data-indicators="true"></div>');
  const imgPhone         = $('<img src="assets/img/icons/phone.png" alt="icon-phone">');
  const divText          = $('<div class="text-validate-phone col s12 m12"></div>');
  const title            = $('<h3>Para comenzar validemos tu número</h3>');
  const description      = $('<p class="">Recibirás un SMS con un código de validación</p>');
  const divValidate      = $('<div class="form-validate-phone col s8 m9"></div>');
  const p                = $('<p></p>');
  const checkbox         = $('<input type="checkbox" class="filled-in" id="filled-in-box" checked="checked" /><label for="filled-in-box">Acepto los <a>Términos y Condiciones</a></label>');
  const inputPhone            = $('<input placeholder="Placeholder" id="number-phone" type="tel" val="989999990"class="validate">');
  const span             = $('<span><img src="assets/img/icons/phoneandnumber.png"></span>');
  const btnContinuar     = $('<a class="btn col s10 offset-s1 background-yellow waves-effect center white-text darken-text-2">Continuar</a>');
  p.append(checkbox);
//  input.append(span);
  divValidate.append(inputPhone);
  divValidate.append(p);
  divText.append(title);
  divText.append(description);
  divImgPhone.append(imgPhone);
  row.append(divImgPhone);
  row.append(divText);
  row.append(divValidate);
  row.append(btnContinuar);
  container.append(row);
  inputPhone.keyup= ()=>{
  console.log("de");

}
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
