// components/nav-bar/nav-bar.js
const app = getApp()

Component({
  // 设置多插槽
  options: {
    multipleSlots: true
  },

  properties: {
    title: {
      type: String,
      value: "导航标题"
    }
  },

  data: {
    statusHeight: 20
  },

  lifetimes: {
    attached() {
      this.setData({
        statusHeight: app.globalData.statusBarHeight
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLeftClick() {
      this.triggerEvent("leftClick")
    }
  }
})
