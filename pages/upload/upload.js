// pages/upload/upload.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "比赛类型": "", "比赛场次": "", "队伍角色": "", "队号": "", "自动阶段白线": "", "自动阶段低球": "", "自动阶段高球": "", "手动阶段犯规次数": "", "手动阶段低球": "", "手动阶段高球": "", "爬升横档数": "", "概述": "", "记录员": "", "胜负": "", "aftertrans_json": "", "aftertrans_csv": "", "csv_header": "比赛类型,比赛场次,队伍角色,队号,自动阶段白线,自动阶段低球,自动阶段高球,手动阶段航站楼次数,手动阶段低球,手动阶段高球,爬升横档数,概述,记录员",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    console.log(option)
    this.setData({
      "比赛类型": option.比赛类型,
      "比赛场次": option.比赛场次,
      "队伍角色": option.队伍角色,
      "队号": option.队号,
      "自动阶段白线": option.自动阶段白线,
      "自动阶段低球": option.自动阶段低球,
      "自动阶段高球": option.自动阶段高球,
      "手动阶段犯规次数": option.手动阶段犯规次数,
      "手动阶段低球": option.手动阶段低球,
      "手动阶段高球": option.手动阶段高球,
      "爬升横档数": option.爬升横档数,
      "概述": option.概述,
      "记录员": option.记录员,
      "胜负": option.胜负,
    })
    console.log(this.data)
    var trans = "data:{\n"
    var trans_csv = ""
    var x = ["比赛类型", "比赛场次", "队伍角色", "队号", "自动阶段白线", "自动阶段低球", "自动阶段高球", "手动阶段犯规次数", "手动阶段低球", "手动阶段高球", "爬升横档数", "概述", "记录员", "胜负"]
    var y = [this.data.比赛类型, this.data.比赛场次, this.data.队伍角色, this.data.队号, this.data.自动阶段白线, this.data.自动阶段低球, this.data.自动阶段高球, this.data.手动阶段犯规次数, this.data.手动阶段低球, this.data.手动阶段高球, this.data.爬升横档数, this.data.概述, this.data.记录员, this.data.胜负]
    for (var i = 0; i < x.length; i = i + 1) {
      trans = trans + "\"" + x[i] + "\":" + y[i] + ",\n"
      trans_csv = trans_csv + y[i] + ","
    }
    trans = trans + "}"
    console.log(trans)
    this.setData({
      aftertrans_json: trans,
      aftertrans_csv: trans_csv,
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

  },
  copycsvheader: function () {
    wx.setClipboardData({
      data: this.data.csv_header,
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            wx.showToast({
              title: '复制成功'
            })
          }

        })
      }
    })
  },
  copycsv: function () {
    wx.setClipboardData({
      data: this.data.aftertrans_csv,

      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            wx.showToast({
              title: '复制成功'
            })
          }
        })
      }
    })
  },
  copytext: function () {
    // console.log(e)
    wx.setClipboardData({
      data: this.data.aftertrans_json,
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            wx.showToast({
              title: '复制成功'
            })
          }
        })
      }
    })
  },
  tobrowse: function () {
    wx.switchTab({
      url: '../browse/browse',
    })
  }
})