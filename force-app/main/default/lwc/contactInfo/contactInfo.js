import { LightningElement } from 'lwc';
import createLead from '@salesforce/apex/ContactController.createLead';

export default class ContactInfo extends LightningElement {

    dialog;
    firstname;
    lastname;
    company;
    email;
    description;

    snackbar;

    renderedCallback() {
        this.dialog = this.template.querySelector('.myClass');
        this.firstname = this.template.querySelector('.firstname');
        this.lastname = this.template.querySelector('.lastname');
        this.company = this.template.querySelector('.company');
        this.email = this.template.querySelector('.email');
        this.description = this.template.querySelector('.description');
        this.snackbar = this.template.querySelector('c-snack-bar');
    }

    showDialog() {
        this.dialog.showModal();
    }

    closeDialog() {
        this.dialog.close();
    }

    handleSubmit(event){
        event.preventDefault();

        const firstnamevalue = this.firstname.value;
        const lastnamevalue = this.lastname.value;
        const companyvalue = this.company.value;
        const emailvalue = this.email.value;
        const descriptionvalue = this.description.value;

        createLead({
            firstName: firstnamevalue,
            lastName: lastnamevalue,
            company: companyvalue,
            email: emailvalue,
            description: descriptionvalue
        }).then(()=> { this.snackbar.showSnackbar('your message has been received.')});

        this.closeDialog();
    }


}