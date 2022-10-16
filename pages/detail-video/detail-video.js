// pages/detail-video/detail-video.js
import { getMVUrl, getMVInfo, getMVRelate } from "../../services/video"
Page({
  data: {
    id: 0,
    MVUrl: "",
    MVInfo: {},
    relatedVideo: [],
    danmuList: [
      {
        text: "hahaha， 真好听",
        color: "#ff0000",
        time: 3
      },
      {
        text: "hehehe， 还好吧",
        color: "#ffff00",
        time: 9
      }
    ]
  },

  onLoad(options) {
    // 1.获取id
    const id = options.id
    this.setData({id})

    // 2.请求数据
    this.fetchMVUrl()
    this.fetchMVInfo()
    this.fetchMVRelate()
  },

  async fetchMVUrl() {
    const res = await getMVUrl(this.data.id)
    this.setData({
      MVUrl: res.data.url
    })  
  },
  async fetchMVInfo() {
    const res = await getMVInfo(this.data.id)
    this.setData({
      MVInfo: res.data
    })  
  },
  async fetchMVRelate() {
    const res = await getMVRelate(this.data.id)
    console.log(res);
    this.setData({
      relatedVideo: res.data
    })  
  }  
})