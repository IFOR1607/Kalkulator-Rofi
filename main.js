const angka1 = document.getElementById('angka1');
const angka2 = document.getElementById('angka2');
const body = document.body
const refresh = document.getElementById('refreshCuy')
let hasill = document.getElementById('hasill')




function startText() {
    
    const value = angka1.value;
    const value2 = angka2.value;

    let hasil = value * value2 ;
    hasill.append(hasil)

}


function ref() {
    angka1.value = '';
    angka2.value = '';
    hasill.textContent = '';
}


