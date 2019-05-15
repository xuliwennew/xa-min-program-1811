// components/news/news.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     data:{
        type:Object
     },
     idx: {
        type:Number
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
     del(e){
       console.log(e.target.dataset.idx)
       this.triggerEvent("delEvent",{id:e.target.dataset.idx},{})
     }
  }
})
