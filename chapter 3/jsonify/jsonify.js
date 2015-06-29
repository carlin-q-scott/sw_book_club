function toJson(obj) {
	return JSON.stringify(obj);
}

function fromJson(json) {
	return JSON.parse(json);
}

exports.toJson = toJson;
exports.fromJson= fromJson;