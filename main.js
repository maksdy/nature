	cartCount = 1;
function addToCart(){
	alert('Добавлено в корзину');
	n = document.getElementById('total-cart-count');
	n.innerHTML = cartCount;
	cartCount++;
}