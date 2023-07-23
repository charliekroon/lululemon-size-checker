"use strict";
var __createBinding =
	(this && this.__createBinding) ||
	(Object.create
		? function (o, m, k, k2) {
				if (k2 === undefined) k2 = k;
				var desc = Object.getOwnPropertyDescriptor(m, k);
				if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
					desc = {
						enumerable: true,
						get: function () {
							return m[k];
						},
					};
				}
				Object.defineProperty(o, k2, desc);
		  }
		: function (o, m, k, k2) {
				if (k2 === undefined) k2 = k;
				o[k2] = m[k];
		  });
var __setModuleDefault =
	(this && this.__setModuleDefault) ||
	(Object.create
		? function (o, v) {
				Object.defineProperty(o, "default", {enumerable: true, value: v});
		  }
		: function (o, v) {
				o["default"] = v;
		  });
var __importStar =
	(this && this.__importStar) ||
	function (mod) {
		if (mod && mod.__esModule) return mod;
		var result = {};
		if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
		__setModuleDefault(result, mod);
		return result;
	};
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
Object.defineProperty(exports, "__esModule", {value: true});
const axios = require("axios");
const cheerio = __importStar(require("cheerio"));
const tshirtUrl = "https://shop.lululemon.com/p/tops-short-sleeve/Swiftly-Tech-Short-Sleeve-2-Race/_/prod9820343?color=35640&sz=8";
function checkAvailability() {
	return __awaiter(this, void 0, void 0, function* () {
		try {
			const response = yield axios.get(tshirtUrl);
			const html = response.data;
			const $ = cheerio.load(html);
			// Replace this selector with the appropriate one that contains the size information on the Lululemon website.
			const sizeElements = $(".size-list .size-item");
			const availableSizes = [];
			sizeElements.each((index, element) => {
				const size = $(element).text().trim();
				availableSizes.push(size);
			});
			const desiredSize = "8";
			const isAvailable = availableSizes.includes(desiredSize);
			if (isAvailable) {
				console.log(`The size ${desiredSize} is available for the T-shirt.`);
				// Implement a notification mechanism here (e.g., send an email or SMS).
			} else {
				console.log(`The size ${desiredSize} is not available for the T-shirt.`);
			}
		} catch (error) {
			console.error("Error fetching or parsing data:", error);
		}
	});
}
checkAvailability();
