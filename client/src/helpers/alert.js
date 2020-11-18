import swal from 'sweetalert';

// for showing alert
export function showAlert(title, detail, type) {
  swal({
    title: title,
    text: detail,
    icon: type,
    button: 'Ok',
  });
}
