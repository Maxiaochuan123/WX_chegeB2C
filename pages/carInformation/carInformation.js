// pages/shoppingMall/shoppingMall.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播
    indicatorDots: false,//显示圆点
    autoplay: true,//自动滚动
    circular: true,//滑动衔接
    interval: 2500,//切换时间间隔
    duration: 500,//滑动时长

    imgUrls: [
      {
        url: '../../images/indexBannerCar1.jpg',
        link: '../shoppingMall/shoppingMall',
        text:'意欲争夺GL8市场 试驾广汽传祺GM8'
      },
      {
        url: '../../images/indexBannerCar1.jpg',
        link: '../findCar/findCar',
        text: '试驾广汽传祺GM8 意欲争夺GL8市场'
      },
      {
        url: '../../images/indexBannerCar1.jpg',
        link: '../message/message',
        text: '意欲争夺GL8市场 试驾广汽传祺GM8'
      }
    ],
    swiperCurrent: 0
    
  },
  swiperChange: function (res) {
    this.setData({
      swiperCurrent: res.detail.current
    })
  },

  /**
   * 自定义方法
   * 
   */
  //跳转到资讯详情`
  go_informationForDetails: function () {
    wx.navigateTo({
      url: '../informationForDetails/informationForDetails'
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