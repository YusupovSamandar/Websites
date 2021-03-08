let products = [];

$(document).ready(function(){
    $.get("http://5.182.26.97:3000/api/v1/product/client", function(data){
       products = data;
       buildProductView(products);
    })
});

function buildProductView(elements){
    elements.map(element => {
        let proHtml = '<div class="col-md-6 col-lg-3">'+
        '<div class="volunteer">' +
            '<div class="img" style="background-image: url('+ element.image_url +');>' +'</div>' +
            '<div class="text text-1">'+
				'<h3>'+element.name+'</h3>'+
				'<span>'+'</span>'+
				'</div>'+ 
    '</div>';
    $(".abb").append(proHtml);
    });
}