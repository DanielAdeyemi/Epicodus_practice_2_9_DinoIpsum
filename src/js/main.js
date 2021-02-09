import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '.././css/styles.css';
import Dino from './business_logic.js';

$('form').submit(function(event) {
  event.preventDefault();
  $('#par, #words, #output').text("");
  const par = parseInt($('#par').val());
  const words = parseInt($('#words').val());
  let promise = Dino.getDino(par, words);
  promise.then(function(response) {
    const body = JSON.parse(response);
    for (let i = 0; i < par; i++) {
      $('#output').append(`<p>${body[i]}</p>`);
    }
  }, function(error) {
    $('.showErrors').text(`There was an error processing your request: ${error}`);
  });
  $('form')[0].reset();
});