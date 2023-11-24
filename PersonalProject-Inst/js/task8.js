'use strict';

(function () {
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

  var fileChooser = document.querySelector('#upload-file');
  var preview = document.querySelector('.img-upload__preview img');
  const previewMin = document.querySelectorAll('.effects__preview');
  let previewMinValue;

  fileChooser.addEventListener('change', function () {
    var file = fileChooser.files[0];
    var fileName = file.name.toLowerCase();

    var matches = FILE_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });

    if (matches) {
      var reader = new FileReader();

      reader.addEventListener('load', function () {
        preview.src = reader.result;
        previewMinValue = reader.result;

        previewMin.forEach((el) => {
          el.style.backgroundImage = `url(${previewMinValue})`;
        });
      });

      reader.readAsDataURL(file);
    }
  });
})();
