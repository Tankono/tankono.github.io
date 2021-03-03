
import Repositoty from './Repositoty'
const resource = "/post";
export default {
	get(){
		return Repositoty.get("${resource}");
	}
}