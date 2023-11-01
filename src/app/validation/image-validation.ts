import { AbstractControl, ValidationErrors } from "@angular/forms";
export class ImageValidation {
  static fileValidator(control: AbstractControl): ValidationErrors | null {
    const file = control.value;
    if (file) {
      const allowedExtensions = ['jpg', 'jpeg', 'png'];
      const maxSize = 1048576; // 1 MB in bytes
      const fileName = file.name;
      if (fileName != undefined) {
        const fileExtension = fileName.split('.').pop().toLowerCase();
        if (!allowedExtensions.includes(fileExtension)) {
          return {
            invalidFileType: true,
          };
        }
        if (file.size > maxSize) {
          return {
            invalidFileSize: true,
          };
        }
      }
    }
    return null;
  }
}
