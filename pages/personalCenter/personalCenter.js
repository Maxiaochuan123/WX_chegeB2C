// pages/personalCenter/personalCenter.js
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    wxUserInfoData: {
      wxUserName: '点击头像登陆',
      wxUserHeadPortrait: ''
    }
  },
  // 页面跳转
	  //登录
	go_login:function(){
		wx.navigateTo({
			url: '../login/login'
		})
	},
    // 我收藏的车辆
  go_myCollectionCar: function () {
    wx.navigateTo({
      url: '../myCollectionCar/myCollectionCar'
    })
  },
    // 我预约的车辆
  go_myReservationVehicle: function() {
    wx.navigateTo({
      url: '../myReservationVehicle/myReservationVehicle'
    })
  },
    // 我的找车
  go_myFindCar: function () {
    wx.navigateTo({
      url:'../myFindCar/myFindCar'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getUserInfo({
      success: res => {
        this.setData({
          wxUserInfoData : {
            wxUserName: res.userInfo.nickName,
            wxUserHeadPortrait: res.userInfo.avatarUrl
          }
        })
      }
    })
  }
  ,

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