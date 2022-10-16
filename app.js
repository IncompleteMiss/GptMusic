// app.js
App({
  globalData: {
    screenWidth: 375,
    screenHeight: 667,
    statusBarHeight: 20,
    contentHeight: 500
  },
  onLaunch() {
    // 1.获取设备的信息
    wx.getSystemInfo({
      success: (result) => {
        this.globalData.screenWidth = result.screenWidth
        this.globalData.screenHeight = result.screenHeight
        this.globalData.statusBarHeight = result.statusBarHeight
        this.globalData.contentHeight = result.screenHeight - result.statusBarHeight - 44
        console.log(result);
      },
    })
  }
})
