function mapArrayToKeyedObject(arr) {
	let obj = {};
	arr.forEach(function (el) {
		obj[el.id] = el;
	});
	return obj;
}

export { mapArrayToKeyedObject };
