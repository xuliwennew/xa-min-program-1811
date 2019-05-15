 
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     data:{
       type:Object
     }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
     delNews(e){
        console.log("del event ",e.detail.id)
       this.triggerEvent("del", { id: e.detail.id},{})
     }
  }
})
