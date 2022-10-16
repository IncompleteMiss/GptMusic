// components/area-header/area-header.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: "String",
      value: "默认标题"
    },
    hasMore: {
      type: Boolean,
      value: true
    }
  },
  methods: {
    onMoreTap() {
      this.triggerEvent("moreClick")
    }
  }
})
