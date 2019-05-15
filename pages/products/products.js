import moment from "moment" 
import newsService from "../../apis/newsService.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
     lists:[],
     pageIndex:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let date = moment().format('MMMM Do YYYY, h:mm:ss a');       console.log(date)
    newsService.getNews(data=>{
      console.log(data)
      this.setData({
        lists:data
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
      
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

    // setTimeout(()=>{
    //   this.setData({
    //     lists: [{ title: "第三条新闻"}]
    //   })
    // },3000)
    newsService.getNews(data => {
      console.log(data)
      this.setData({
        lists: data
      })
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
     let { pageIndex,lists}  = this.data
     this.setData({
       pageIndex : ++pageIndex
     })
     console.log(this.data.pageIndex)

    newsService.getNews(data => {
      console.log(data)
      this.setData({
        lists: lists.concat(data)
      })
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("用户点击右上角分享")
    wx.showToast({
      title: 'share success',
    })
  }
})