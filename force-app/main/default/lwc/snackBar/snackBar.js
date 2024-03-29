import { LightningElement, api } from 'lwc';

export default class SnackBar extends LightningElement {

    snackbarMessage;

    @api
    showSnackbar(message) {
        // Get the snackbar DIV
        const snackbar = this.template.querySelector('.snackbar');
        
        this.snackbarMessage = message;

        // Add the "show" class to DIV
        //snackbar.className = "show";
        snackbar.classList.add('show');

        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ snackbar.classList.remove('show'); }, 2800);
      }
}