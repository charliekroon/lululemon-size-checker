// lululemon-bot.ts

import axios from "axios";

const cheerio = require("cheerio");

const tshirtUrl = "https://shop.lululemon.com/p/tops-short-sleeve/Swiftly-Tech-Short-Sleeve-2-Race/_/prod9820343?color=28854&sz=8";
const headers = {
	"User-Agent": "Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
};

function delay(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function checkAvailability() {
	try {
		await delay(1000);

		const response = await axios.get(tshirtUrl, {headers});
		const html: string = response.data;
		const $ = cheerio.load(html);

		// Replace this selector with the appropriate one that contains the size information on the Lululemon website.
		const sizeElements = $(".size-selector");

		const availableSizes: string[] = [];

		sizeElements.each((index: number, element: cheerio.Element) => {
			const size: string = $(element).text().trim();
			availableSizes.push(size);
		});

		const desiredSize: string = "8";
		const isAvailable: boolean = availableSizes.includes(desiredSize);

		if (isAvailable) {
			console.log(`The size ${desiredSize} is available for the T-shirt.`);
			// Implement a notification mechanism here (e.g., send an email or SMS).
		} else {
			console.log(`The size ${desiredSize} is not available for the T-shirt.`);
		}
	} catch (error) {
		console.error("Error fetching or parsing data:", error);
	}
}

checkAvailability();
