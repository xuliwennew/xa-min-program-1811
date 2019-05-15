 import newsService from "../../apis/newsService.js"


Page({

  /**
   * 页面的初始数据
   */
  data: {
     title:"最新的新闻",
     cources:[
       {title:"angular",tags:["mvvm","pc"]},
       {title:"react", tags:["vnode","redux"]}
       ],
       newsList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     newsService.getNews(data=>{
         this.setData({
           newsList:data
         })
     })
  },

  delItem(e){
     let {newsList} = this.data;
     newsList.splice(e.detail.id,1)
     console.log("page -news",e.detail.id)
     this.setData({
       newsList: newsList
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})