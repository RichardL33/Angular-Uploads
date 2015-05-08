(function() {
var app = angular.module('store', [ ]);



app.controller("PanelController", function() {
	this.tab = 1;

	this.selectTab = function(setTab) {
		this.tab = setTab;
	};

	this.isSelected = function(checkTab) {
		return this.tab === checkTab;
	};
});

app.controller("ReviewController", function() {
	this.review = {};
	this.addReview = function(product) {
		product.reviews.push(this.review);
		this.review = {};
	};
});



app.controller('StoreController', function() {
	this.products = parts;

	});

var parts = [
	{
		name: 'Handi Andi',
		price: 4.99,
		description: 'Because you are a puss',
		canPurchase: true,
		soldOut: false,
		images: [
			{
				full: 'assets/img/beanie1.png'
			}
		],
		reviews: [
			{
				stars: 5,
				body: "I love this stuff",
				author: "ricky@bobby.com"
			},
			{
				stars: 3,
				body: "wait what?!",
				author: "John@stamos.com"
			}
		]
	 },
	 {
		name: 'Pelvis',
		price: 2.90,
		description: 'Helmet to protect yo dome',
		canPurchase: true,
		soldOut: false,
		images: [
			{
				full: 'assets/img/beanie2.png'
			}
		],
		reviews: [
			{
				stars: 5,
				body: "I love this stuff",
				author: "ricky@bobby.com"
			},
			{
				stars: 3,
				body: "wait what?!",
				author: "John@stamos.com"
			}
		]
	 },
	 {
		name: 'Methmunk',
		price: 33.00,
		description: 'To protect yo fingerprints',
		canPurchase: true,
		soldOut: false,
		images: [
			{
				full: 'assets/img/beanie3.png'
			}
		],
		reviews: [
			{
				stars: 5,
				body: "I love this stuff",
				author: "ricky@bobby.com"
			},
			{
				stars: 3,
				body: "wait what?!",
				author: "John@stamos.com"
			}
		]
	 },
	 {
		name: 'Gettin Leid',
		price: 35.87,
		description: 'Because its cold. Duh',
		canPurchase: true,
		soldOut: false,
		images: [
			{
				full: 'assets/img/beanie4.png'
			}
		],
		reviews: [
			{
				stars: 5,
				body: "I love this stuff",
				author: "ricky@bobby.com"
			},
			{
				stars: 3,
				body: "wait what?!",
				author: "John@stamos.com"
			}
		]
	 },
	 {
		name: 'Dragon Breath',
		price: 12.36,
		description: 'So you can keep going... and going',
		canPurchase: true,
		soldOut: false,
		images: [
			{
				full: 'assets/img/beanie5.png'
			}
		],
		reviews: [
			{
				stars: 5,
				body: "I love this stuff",
				author: "ricky@bobby.com"
			},
			{
				stars: 3,
				body: "wait what?!",
				author: "John@stamos.com"
			}
		]
	 }
 ];

})();


