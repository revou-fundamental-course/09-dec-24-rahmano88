//ini javascript
console.log('Javascript berhasil tersambung');

//fungsi untuk memvalidasi
function validateForm(){
    const usernameInput = document.getElementById('username-input').Value;
    console.log(usernameInput);

    //validasi jika nama user tidak kosong
    if (usernameInput == '') {
        alert('Inputan tidak boleh kosong');
    } else {
        document.getElementById('username-result').innerHTML = usernameInput;
    }

    console.log('validateForm executed');
}

function getImageList() {
    const ImageList = document.get
}