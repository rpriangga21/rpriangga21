const mainMenu = document.querySelector('.links')
    const openMenu = document.querySelector('.open')
    const closeMenu = document.querySelector('.close')

    openMenu.addEventListener('click', show)
    closeMenu.addEventListener('click', close)

    function show(){
        mainMenu.style.display = 'flex'
        mainMenu.style.right = '0'
    }
    function close(){
        mainMenu.style.right = '-60%'
    }
    

const login = document.querySelector('.daftar');
// const nama = document.querySelector('#nama');

login.addEventListener('submit', (e)=> {
   e.preventDefault();
   const nama = login.nama.value;
   const umur = login.umur.value;
   const tinggi = login.tinggi.value;
   const berat = login.berat.value;
   console.log(nama, umur, tinggi, berat);
})
