import common from "../utils/common.js"
import { NEWSULR } from "../utils/requestUrl.js"

export default {
  getNews(cb) {
    common.api(NEWSULR, {},cb)
  }
}