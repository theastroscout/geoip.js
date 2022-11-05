/*

GEO IP

*/

import request from "@surfy/request";

class GeoIP {

	constructor(conf){
		this.email = conf.email;
		this.key = conf.key;
	}

	async get(IP){
		let result = await request({
			url: `https://api.surfy.one/geoip/${IP}`,
			method: "POST",
			headers: {
				email: this.email,
				key: this.key
			}
		});

		return result;
	}
};

export default GeoIP;