import loginService from "../../apis/loginService.js" 

Page({

  /**
   * 页面的初始数据
   */
  data: {
     user:{
       username:"",
       password:""
     },
     num:0
  },

  showMe(){
    loginService.checkUser(this.data.user,data=>{
        if(data.code == 200){
          wx.switchTab({
            url: '/pages/index/index',
          })
        }else{
          wx.showToast({
            title: 'login success',
          })
        }
    })
  },

  getUserName(e){
    console.log(e.detail)
    let {user} = this.data
    user.username = e.detail.value
    this.setData({
      user : user
    })
    console.log(this.data.user)
  },


  getPassword(e) {
    console.log(e.detail)
    let { user } = this.data
    user.password = e.detail.value
    this.setData({
      user: user
    })
    console.log(this.data.user)
  },

  count(){
    console.log(this.data.num)
    let {num} = this.data
    console.log(num)
    this.setData({
      num:++num
    })
  },

  goUrl(){
    wx.redirectTo({
      url: '/pages/reg/reg',
    }) 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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