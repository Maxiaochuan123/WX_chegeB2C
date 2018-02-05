// pages/shoppingMall/shoppingMall.js

const util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    charData: []
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
    // wx.request({
    //   url: '',
    //   data: {

    //   },
    //   success: res =>{
    //     console.log(res.data);
    //   }
    // })
    let charData = [{
      brand: '宝马',
      carsModels: '2018款 至上励合  T350L 四驱豪华版 至上励合T350L 四驱豪华版',
      theDateOf: '1516270316662'
    },
    {
      brand: '宝马',
      carsModels: '2018款 至上励合  T350L 四驱豪华版 至上励合T350L 四驱豪华版',
      theDateOf: '1516270416662'
    },
    {
      brand: '宝马',
      carsModels: '2018款 至上励合  T350L 四驱豪华版 至上励合T350L 四驱豪华版',
      theDateOf: '1516270516662'
    }]

    for (var value of charData) {
      let time = parseInt(value.theDateOf);
      value.theDateOf = util.formatDate(time)
    }

    this.setData({
      charData: charData
    })
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