const products = [
    {name:"Cat 1","category":"cat1","price":10,"quantity":20, image: './cat.jpg'},
    {name:"Cat 2","category":"cat1","price":12,"quantity":17, image: './cat.jpg'},
    {name:"Cat 3","category":"cat1","price":7,"quantity":25,  image: './cat.jpg'},
    {name: "Cat 4","category":"cat2","price":19,"quantity":35, image: './cat.jpg'},
    {name: "Cat 5","category":"cat2","price":53,"quantity":34, image: './cat.jpg'},
    {name: "Cat 6","category":"cat2","price":11,"quantity":32, image: './cat.jpg'},
    {name: "Cat 7","category":"cat3","price":55,"quantity":44, image: './cat.jpg'},
    {name: "Cat 8","category":"cat3","price":57,"quantity":43, image: './cat.jpg'},
    {name: "Cat 9","category":"cat3","price":22,"quantity":19, image: './cat.jpg'},
];

function renderProducts(productsToRender) {
    let html = '<div class="row gx-5 gy-5">';

    for(let i = 0; i < productsToRender.length; i++) {
        let p = productsToRender[i];
        html += '<div class="col-12 col-md-6">';
            
        html += `<img src="${p.image}" class="img-fluid" />`;
        html += `<h5 class="text-center">${p.name}</h5>`;
        html += `<div class="text-center">${p.category}, Size: ${p.quantity}, ${p.price}$</div>`;

        html += '</div>';
    }    

    html += '</div>';

    $('#products').html(html);
}

function init() {
    renderProducts(products);
}

function filter() {
    let category = $('input[name="category"]:checked').val();
    let priceFrom = $('input[name="priceFrom"]').val();
    let priceTo = $('input[name="priceTo"]').val();
    let prods = products;

    if(category !== undefined) {
        prods = prods.filter(prod => prod.category === category);
    }

    if(priceFrom.length > 0) {
        prods = prods.filter(prod => prod.price >= priceFrom);
    }

    if(priceTo.length > 0) {
        prods = prods.filter(prod => prod.price <= priceTo);
    }

    renderProducts(prods);
}

$(function() {
    init();
});
