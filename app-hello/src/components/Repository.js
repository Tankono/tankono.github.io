
import axios from "axios"

const baseDomain = "https://uat.gotadi.com";
const baseUrl = `${baseDomain}/api`;

export default axios.create({
	baseUrl,
	header:{"Authorization":""}
})
