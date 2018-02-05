// pages/index/index.js

// 基础变量
let page = 0

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
        url: '../../images/indexBannerCar1.jpg',
        link: '../shoppingMall/shoppingMall'
      },
      {
        url: '../../images/indexBannerCar1.jpg',
        link: '../findCar/findCar'
      },
      {
        url: '../../images/indexBannerCar1.jpg',
        link: '../message/message'
      }
    ],

    indicatorDots: false,//显示圆点
    autoplay: true,//自动滚动
    circular: true,//滑动衔接
    interval: 2500,//切换时间间隔
    duration: 500,//滑动时长

    // 搜索栏

    sherchBoxBackColor: '',
    sherchInputColor: 'rgba(255, 255, 255, 0.33)',
    sherchShadow: '',
    sherchCallImage: false,

    // tab页
      winWidth: 0,
      currentTab: 0, 
    
    //好车推荐列表
      goodCarRecommendedData: {},

    // lodding
      contentText: '↑上拉加载更多车辆...',
      isShowLoddingImage: false
  },

  /**
   * 页面方法定义
   */
  // 好车推荐数据请求
  getGoodCarRecommendedData: function (page) {
    console.log(page)
    // wx.request({
    //   url: '',
    //   data: {
    //     page: page,
    //     pageSize: 4
    //   },
    //   success: function(res){
    //     // 1.关闭 lodding
    //     this.lodding.loddingHidden()
          //  wx.stopPullDownRefresh();
          //  wx.hideNavigationBarLoading();

    //     // 2.填充数据
    //     this.setData({
    //        goodCarRecommendedData: res.goodCarRecommendedData
              // contentText: '↑上拉加载更多...',
              // isShowLoddingImage: false
    //     })
    //   }
    // })
  },

  // 滑动切换tab 
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },
  // 点击tab切换 
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  
  //轮播图跳转
  bindViewTap: function (event) {
    console.log(event.currentTarget.dataset.link);
    wx.switchTab({
      url: event.currentTarget.dataset.link // 页面跳转地址
    })
  },
  // 汽车资讯跳转
  go_CarInformation: function(){
    wx.navigateTo({
      url: '../carInformation/carInformation'
    })
  },
  
  // 跳转到寻车
  go_findCar: function () {
    wx.switchTab({
      url: '../findCar/findCar'
    })
  },

  // 跳转到商城
  go_shoppingMall: function () {
    wx.switchTab({
      url: '../shoppingMall/shoppingMall'
    })
  },

  // 打电话 
  callPhone: function () {
    wx.makePhoneCall({
      phoneNumber: '13111866951'
    })
  },

  // 搜索栏渐变
  onPageScroll: function(res){
    if (res.scrollTop > 30 && res.scrollTop < 40) {
      this.setData({
        sherchBoxBackColor: 'rgba(255, 255, 255, 0.1)'
      })
    }
    if (res.scrollTop > 40 && res.scrollTop < 50){
      this.setData({
        sherchBoxBackColor: 'rgba(255, 255, 255, 0.2)'
      })
    } else if (res.scrollTop > 50 && res.scrollTop < 60){
      this.setData({
        sherchBoxBackColor: 'rgba(255, 255, 255, 0.3)'
      })
    } else if (res.scrollTop > 60 && res.scrollTop < 70){
      this.setData({
        sherchBoxBackColor: 'rgba(255, 255, 255, 0.4)'
      })
    }else if (res.scrollTop > 70 && res.scrollTop < 80) {
      this.setData({
        sherchBoxBackColor: 'rgba(255, 255, 255, 0.5)'
      })
    } else if (res.scrollTop > 80 && res.scrollTop < 90){
      this.setData({
        sherchBoxBackColor: 'rgba(255, 255, 255, 0.6)'
      })
    } else if (res.scrollTop > 90 && res.scrollTop < 100) {
      this.setData({
        sherchBoxBackColor: 'rgba(255, 255, 255, 0.7)'
      })
    } else if (res.scrollTop > 100 && res.scrollTop < 110) {
      this.setData({
        sherchBoxBackColor: 'rgba(255, 255, 255, 0.8)'
      })
    } else if (res.scrollTop > 110 && res.scrollTop < 120) {
      this.setData({
        sherchBoxBackColor: 'rgba(255, 255, 255, 0.9)'
      })
    } else if (res.scrollTop > 120) {
      this.setData({
        sherchBoxBackColor: '#FFF',
        sherchShadow: '0 4rpx 10rpx rgba(231, 231, 231, 0.65)'
      })
    }

    if (res.scrollTop > 80){
      this.setData({
        sherchCallImage: true
      })
    }else{
      this.setData({
        sherchCallImage: false
      })
      if (res.scrollTop < 10){
        this.setData({
          sherchBoxBackColor: 'rgba(255, 255, 255, 0)'
        })
      }
      if (res.scrollTop < 120) {
        this.setData({
          sherchShadow: ''
        })
      }
      if (res.scrollTop < 40){
        this.setData({
          sherchInputColor: 'rgba(255, 255, 255, 0.33)'
        })
      }else{
        this.setData({
          sherchInputColor: '#eee'
        })
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showShareMenu({
      withShareTicket: true
    })

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

    // tab页
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        console.log(res)
        that.setData({
          winWidth: res.windowWidth
        });
      }
    });

    // 好车推荐 ajax
    this.getGoodCarRecommendedData(page)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 定位
    // var that = this
    // wx.getLocation({
    //   type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标  
    //   success: function (res) {
    //     var longitude = res.longitude//经度
    //     var latitude = res.latitude//纬度
    //     wx.request({
    //       url: 'https://api.map.baidu.com/geocoder/v2/?ak=YLxBXdIF0i6gqzLhdkdScTojexqgLR6n&location=' + res.latitude + ',' + res.longitude + '&output=json&coordtype=wgs84ll',
    //       data: {

    //       },
    //       header: { 'Content-Type': 'application/json' },
    //       success: function (res) {  
    //         wx.hideNavigationBarLoading(); //关闭标题栏加载状态
    //         that.setData({
    //           GPSLocation: {
    //             city: res.data.result.addressComponent.city
    //           }
    //         })
    //       }
    //     })

    //   }
    // })

    // 获取 Lodding组件
    this.lodding = this.selectComponent("#lodding")
    this.lodding.loddingShow()
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
    page = 0
    wx.showNavigationBarLoading();

    this.getGoodCarRecommendedData(page)
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
    this.lodding.loddingShow()
    this.setData({
      contentText:'正在加载...',
      isShowLoddingImage: true
    })

    // 2.请求数据
    page ++;
    this.getGoodCarRecommendedData(page)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  hiddenLodding:function(){
    this.setData({
      contentText: '↑上拉加载更多...',
      isShowLoddingImage: false
    })
  }
})