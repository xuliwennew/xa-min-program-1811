import common from "../utils/common.js"
import { CARTURL} from "../utils/requestUrl.js"

export default {
   checkUser(user,cb){
     common.api(CARTURL,user,cb)
   }
}