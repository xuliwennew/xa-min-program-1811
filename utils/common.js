

export default {
  getTitle() {
    return "京东购物"
  },
  api(url,data,cb){
    wx.request({
      url: url,   
      data: data,
      header: {
        'content-type': 'application/json'  
      },
      success(res) {
        cb(res.data)
      }
    })
  }
}