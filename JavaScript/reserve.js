"use strict";

const reserve = (name) => {
  name = name;
  return {name};
 };
 
 let customer = reserve("");

const reserveForm = document.getElementById('reservation-form');
reserveForm.addEventListener('submit', checkReserveForm);


// send an alert if required fields are not filled in reservation form
function checkReserveForm(event){
  event.preventDefault();
  if(this.name.value=== '' || this.phone_number.value ==='' || this.num_cust.value ===''){
  
    alert('PLEASE FILL ALL REQUIRED FIELDS BEFORE BOOKING');
    return;
  }

}
