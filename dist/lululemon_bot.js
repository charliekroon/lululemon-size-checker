"use strict";
var __awaiter =
	(this && this.__awaiter) ||
	function (thisArg, _arguments, P, generator) {
		function adopt(value) {
			return value instanceof P
				? value
				: new P(function (resolve) {
						resolve(value);
				  });
		}
		return new (P || (P = Promise))(function (resolve, reject) {
			function fulfilled(value) {
				try {
					step(generator.next(value));
				} catch (e) {
					reject(e);
				}
			}
			function rejected(value) {
				try {
					step(generator["throw"](value));
				} catch (e) {
					reject(e);
				}
			}
			function step(result) {
				result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
			}
			step((generator = generator.apply(thisArg, _arguments || [])).next());
		});
	};
var __generator =
	(this && this.__generator) ||
	function (thisArg, body) {
		var _ = {
				label: 0,
				sent: function () {
					if (t[0] & 1) throw t[1];
					return t[1];
				},
				trys: [],
				ops: [],
			},
			f,
			y,
			t,
			g;
		return (
			(g = {next: verb(0), throw: verb(1), return: verb(2)}),
			typeof Symbol === "function" &&
				(g[Symbol.iterator] = function () {
					return this;
				}),
			g
		);
		function verb(n) {
			return function (v) {
				return step([n, v]);
			};
		}
		function step(op) {
			if (f) throw new TypeError("Generator is already executing.");
			while ((g && ((g = 0), op[0] && (_ = 0)), _))
				try {
					if (((f = 1), y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)) return t;
					if (((y = 0), t)) op = [op[0] & 2, t.value];
					switch (op[0]) {
						case 0:
						case 1:
							t = op;
							break;
						case 4:
							_.label++;
							return {value: op[1], done: false};
						case 5:
							_.label++;
							y = op[1];
							op = [0];
							continue;
						case 7:
							op = _.ops.pop();
							_.trys.pop();
							continue;
						default:
							if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
								_ = 0;
								continue;
							}
							if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
								_.label = op[1];
								break;
							}
							if (op[0] === 6 && _.label < t[1]) {
								_.label = t[1];
								t = op;
								break;
							}
							if (t && _.label < t[2]) {
								_.label = t[2];
								_.ops.push(op);
								break;
							}
							if (t[2]) _.ops.pop();
							_.trys.pop();
							continue;
					}
					op = body.call(thisArg, _);
				} catch (e) {
					op = [6, e];
					y = 0;
				} finally {
					f = t = 0;
				}
			if (op[0] & 5) throw op[1];
			return {value: op[0] ? op[1] : void 0, done: true};
		}
	};
Object.defineProperty(exports, "__esModule", {value: true});
var axios_1 = require("axios");
var cheerio = require("cheerio");
var tshirtUrl = "https://shop.lululemon.com/p/tops-short-sleeve/Swiftly-Tech-Short-Sleeve-2-Race/_/prod9820343?color=28854&sz=8";
var headers = {
	"User-Agent": "Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
};
function delay(ms) {
	return new Promise(function (resolve) {
		return setTimeout(resolve, ms);
	});
}
function checkAvailability() {
	return __awaiter(this, void 0, void 0, function () {
		var response, html, $_1, sizeElements, availableSizes_1, desiredSize, isAvailable, error_1;
		return __generator(this, function (_a) {
			switch (_a.label) {
				case 0:
					_a.trys.push([0, 3, , 4]);
					return [4 /*yield*/, delay(1000)];
				case 1:
					_a.sent();
					return [4 /*yield*/, axios_1.default.get(tshirtUrl, {headers: headers})];
				case 2:
					response = _a.sent();
					html = response.data;
					$_1 = cheerio.load(html);
					sizeElements = $_1(".size-selector");
					availableSizes_1 = [];
					sizeElements.each(function (index, element) {
						var size = $_1(element).text().trim();
						availableSizes_1.push(size);
					});
					desiredSize = "8";
					isAvailable = availableSizes_1.includes(desiredSize);
					if (isAvailable) {
						console.log("The size ".concat(desiredSize, " is available for the T-shirt."));
						// to do: create notification mailer
					} else {
						console.log("The size ".concat(desiredSize, " is not available for the T-shirt."));
					}
					return [3 /*break*/, 4];
				case 3:
					error_1 = _a.sent();
					console.error("Error fetching or parsing data:", error_1);
					return [3 /*break*/, 4];
				case 4:
					return [2 /*return*/];
			}
		});
	});
}
checkAvailability();
