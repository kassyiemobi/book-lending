//using an array
var store = [
	'smart money woman',
	'the alchemist',
	'the outliers',
	'richest man in babylon',
	'rich dad poor dad',
	'the confident woman',
	'born a crime',
	'city of townsville',
	'dexters lab',
	'cramp twins'
];

var bin = [];

function Books(title) {
	this.title = title;
}

// Add the method to prototype
Books.prototype.addbook = function() {
	store.push(this.title);
};

Books.prototype.lendbook = function() {
	var pip = store.pop(this.title);
	bin.push(pip);
};

Books.prototype.keepTrack = function() {
	console.log(`${bin.length} book has been given out`);
};
// Usage:
let book = new Books('eloquent javascript');

book.addbook();
console.log(store);

book.lendbook();
console.log(store);

book.keepTrack();
