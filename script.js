const fieldSetContenedor = document.querySelector("fieldset");

const IMG_BASE = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hyde-park-royalty-free-image-1658405636.jpg";

function agregarSigImg(){
    fieldSetContenedor.innerHTML += `
        <img src="${IMG_BASE}" alt="test">
    `;
}