document.getElementById("price").onblur = function () {
    let tempPrice = +price.value;
    price.innerText = tempPrice;
    if (tempPrice < 0) {
        document.getElementById('tip').innerText = `Please enter correct price`;
        document.getElementById('price').classList.add('redOutline');
    } else {
        document.getElementById('price').classList.remove('redOutline');
        document.getElementById('tip').innerText = ``;
        let spanList = document.getElementById('spanList');
        let spanNode = document.createElement('span');
        spanNode.setAttribute('onclick', `removespan(this);`);
        let textNode = document.createTextNode(`Текущая цена: ${tempPrice}`);
        spanNode.appendChild(textNode);
        spanList.appendChild(spanNode);
        console.log(tempPrice);
    }
};

let removespan = function(span) {
    span.parentNode.removeChild(span);
};