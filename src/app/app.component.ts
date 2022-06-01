import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { TYPE } from './values.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'swal_popup';
  name = 'Angular';

  ngOnInit() {

  }

  show(typeIcon = TYPE.ERROR) {
    Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'Cool'
    });
  }

  warning(typeIcon = TYPE.WARNING) {
    Swal.fire({
      title: 'warning!',
      text: 'Do you want to continue',
      icon: 'warning',
      confirmButtonText: 'Cool'
    });
  }

  question(typeIcon = TYPE.QUESTION) {
    Swal.fire({
      title: 'question!',
      text: 'Do you want to continue',
      icon: 'question',
      confirmButtonText: 'Cool'
    });
  }

  info(typeIcon = TYPE.INFO) {
    Swal.fire({
      title: 'info!',
      text: 'Do you want to continue',
      icon: 'info',
      confirmButtonText: 'Cool'
    });
  }

  success(typeIcon = TYPE.SUCCESS) {
    Swal.fire({
      title: 'success!',
      text: 'Do you want to continue',
      icon: 'success',
      confirmButtonText: 'Cool'
    });
  }


  async data() {
    const { value: formValues } = await Swal.fire({
      title: 'Multiple inputs',
      html:
        '<input id="swal-input1" class="swal2-input">' +
        '<input id="swal-input2" class="swal2-input">',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "Anartz",
      focusConfirm: false, //No poner el foco en el botóón de confirmar
      preConfirm: () => {
        const val1 = (document.getElementById('swal-input1') as HTMLInputElement).value;
        console.log(val1);
        return [
          (document.getElementById('swal-input1') as HTMLInputElement).value,
          (document.getElementById('swal-input2') as HTMLInputElement).value
        ]
      }
    })

    if (formValues) {
      Swal.fire(JSON.stringify(formValues))
    }
  }

  async options() {

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-warning'
      },
      buttonsStyling: true,
    });
    swalWithBootstrapButtons.fire(
      {
        showCloseButton: true,
        title: 'select action',
        text: 'Select the action to perform',
        showCancelButton: true,
        confirmButtonText: 'Control card',
        cancelButtonText: 'Picnic',
        reverseButtons: false
      }
    ).then((result) => {
      if (result.value) {
        console.log('dddd');
        return;
      }
      console.log('cancel');
    });
  }

}