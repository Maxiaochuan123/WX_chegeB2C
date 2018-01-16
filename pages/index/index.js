// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 定位
    GPSLocation: {
      city: '正在定位...'
    },
    animationData: {},

    // 轮播
    imgUrls: [
      {
        url: '../../images/7.jpg',
        link: '../shoppingMall/shoppingMall'
      },
      {
        url: '../../images/6.jpg',
        link: '../findCar/findCar'
      },
      {
        url: '../../images/7.jpg',
        link: '../message/message'
      }
    ],

    indicatorDots: true,//显示圆点
    autoplay: true,//自动滚动
    circular: true,//滑动衔接
    interval: 2500,//切换时间间隔
    duration: 500,//滑动时长

    // 搜索栏
    sherchShow: true,
    sherchMaskedShow: false,
    sherchInputVal: "",
    changeOpacity: ""
  },

  /**
   * 页面方法定义
   */
  //点击后 ---搜索栏--- 遮罩层消失
  search_masked_hidden: function () {
    this.setData({
      sherchShow: false,
      sherchMaskedShow: true,
      sherchInputVal: ''
    })

    // 搜索栏渐变动画
    var changeOpacity = wx.createAnimation({
      duration: 200,
      timingFunction: 'linear'
    })
    // this.changeOpacity = changeOpacity
    changeOpacity.width(78 + '%').opacity(0.8).step();
    this.setData({
      animationData: changeOpacity.export()
    })
  },
  // 点击搜索栏 X 按钮
  clear_btn: function () {
    this.setData({
      sherchShow: true,
      sherchMaskedShow: false,
      sherchInputVal: '',
    })
  },
  //轮播图跳转
  bindViewTap: function (event) {
    console.log(event.currentTarget.dataset.link);
    wx.switchTab({
      url: event.currentTarget.dataset.link // 页面跳转地址
    })
  },
  // 打电话 
  callPhone: function () {
    wx.makePhoneCall({
      phoneNumber: '13111866951'
    })
  },
  onPullDownRefresh: function(){
    console.log("下拉了!");
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 网络状态检查
    wx.getNetworkType({
      success: function (res) {
        if (res.networkType == 'none') {
          wx.showToast({
            title: '当前无网络！',
            icon: 'loading',
            duration: 2000
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 定位
    var that = this
    wx.getLocation({
      type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标  
      success: function (res) {
        var longitude = res.longitude//经度
        var latitude = res.latitude//纬度
        wx.request({
          url: 'https://api.map.baidu.com/geocoder/v2/?ak=YLxBXdIF0i6gqzLhdkdScTojexqgLR6n&location=' + res.latitude + ',' + res.longitude + '&output=json&coordtype=wgs84ll',
          data: {

          },
          header: { 'Content-Type': 'application/json' },
          success: function (res) {
            wx.hideNavigationBarLoading(); //关闭标题栏加载状态
            that.setData({
              GPSLocation: {
                city: res.data.result.addressComponent.city
              }
            })
          }
        })

      }
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
    console.log("下拉了!!!!");
    wx.showNavigationBarLoading();
    setTimeout(function(){
      wx.stopPullDownRefresh();
      wx.hideNavigationBarLoading();
    },500);
    //停止下拉刷新效果 wx.stopPullDownRefresh();
    //导航条显示加载效果 wx.showNavigationBarLoading();   停止加载效果 wx.hideNavigationBarLoading()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("到底部了!!!!");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})