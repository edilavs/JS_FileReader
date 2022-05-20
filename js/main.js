let fileInput = document.getElementById('fileInput');

fileInput.addEventListener('change', function () {
    [...this.files].forEach(file => {
        if (file.type.startsWith('image/')) {
            let fReader = new FileReader();

            fReader.onload = function () {
                let image = document.createElement('img');

                image.setAttribute('src', fReader.result);
                document.body.appendChild(image);

                image.addEventListener('click', function () {
                    let button = document.createElement('button');
                    button.innerText = "X";
                    document.body.appendChild(button);
                    button.addEventListener('click', function () {
                        image.remove();
                        button.remove();
                    })
                })
            }
            fReader.readAsDataURL(file);
        }
        else {
            console.log(`Format duzgun deyil!`);
            this.value = '';
        }

    })
})


let imgBox = document.querySelector('.img-Box');

imgBox.addEventListener('click', function () {
    fileInput.click();
})

