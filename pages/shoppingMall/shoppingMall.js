// pages/shoppingMall/shoppingMall.js

// 基础变量
let page = 0

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 数据过滤条件 filter
    filter: null,

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

    autoplay: true,//自动滚动
    circular: true,//滑动衔接
    interval: 2500,//切换时间间隔
    duration: 500,//滑动时长

    // tab切换  
    currentTab: '0',
    priceSort: false,
    priceSortIcon: null,

    // 数据
    theOriginalData: {}, // 原始数据（用于渲染使用）
    changedData: {}, // 改变后的数据

    // 横向滚动
    carList: [{
      carImg: '../../icon/mall_1.png',
      carImgActive: '../../icon/mall_2.png',
      carName: '全部',
      carDataIndex: 0
    }, {
      carImg: '../../icon/mall_3.png',
      carImgActive: '../../icon/mall_3.png',
      carName: '宝马',
      carDataIndex: 1
    }, {
      carImg: '../../icon/mall_4.png',
      carImgActive: '../../icon/mall_4.png',
      carName: '宝马',
      carDataIndex: 2
    }, {
      carImg: '../../icon/mall_5.png',
      carImgActive: '../../icon/mall_5.png',
      carName: '宝马',
      carDataIndex: 3
    }, {
      carImg: '../../icon/mall_6.png',
      carImgActive: '../../icon/mall_6.png',
      carName: '奔驰',
      carDataIndex: 4
    }, {
      carImg: '../../icon/mall_3.png',
      carImgActive: '../../icon/mall_3.png',
      carName: '宝马',
      carDataIndex: 5
    }, {
      carImg: '../../icon/mall_4.png',
      carImgActive: '../../icon/mall_4.png',
      carName: '宝马',
      carDataIndex: 6
    }, {
      carImg: '../../icon/mall_5.png',
      carImgActive: '../../icon/mall_5.png',
      carName: '宝马',
      carDataIndex: 7
    }, {
      carImg: '../../icon/mall_6.png',
      carImgActive: '../../icon/mall_6.png',
      carName: '宝马',
      carDataIndex: 8
    }],
    addCarBorder: 0,

    // 规格遮罩层
    activeSortNuber: 0,
    showActiveSortMask: false,
    showActiveSortMask_: true,

    // 车辆列表
    myCollectionCarData: [],

    // scroll-view 滚动
    pageViewBanner: true,
    pageViewSort: false,
    isChangeStyle: true,

    // lodding
    contentText: '↑上拉加载更多车辆...',
    isShowLoddingImage: false
  },

  /**
   * 自定义事件
   */

  // 请求数据  filter:筛选条件
  getCarList: function (filter, DataSource, page) {
    console.log('request', filter ? filter : null, 'page:', page ? page : 0)
    setTimeout(() => { wx.stopPullDownRefresh() }, 2000)
    // wx.request({
    //   url: '',
    // data: {
    //   filter: filter ? filter : null,
    //   page: page ? page : 0
    // },
    //   header: {},
    //   method: GET,
    //   dataType: json,
    //   responseType: text,
    // success: function (res) { 
    // this.setData({
    //   theDataSource: res.data,
    //   theOriginalData: DataSource ? DataSource : this.data.theOriginalData,
    //   contentText: '↑上拉加载更多...',
    //   isShowLoddingImage: false
    // })
    //   wx.hideNavigationBarLoading() //停止导航栏下拉刷新效果
    //   wx.stopPullDownRefresh() //停止下拉刷新效果
    // },
    //   fail: function (res) { },
    //   complete: function (res) { },
    // })
  },

  // 跳转到寻车
  go_findCar: function () {
    wx.switchTab({
      url: '../findCar/findCar',
    })
  },

  //点击tab切换

  swichNav1: function (e) {

    wx.showNavigationBarLoading() //导航栏显示加载效果
    page = 0 //初始 page

    this.setData({
      currentTab: e.target.dataset.current,
      showActiveSortMask: false,
      priceSortIcon: null
    })

    this.getCarList(this.data.filter, this.data.changedData) //调用方法 改变数据源
  },

  swichNav2: function (e) {
    this.setData({
      showActiveSortMask: !this.data.showActiveSortMask,
      showActiveSortMask_: true,
      currentTab: e.target.dataset.current,
      priceSortIcon: null
    })
    console.log(this.data.showActiveSortMask)
    page = 0 //初始 page

    wx.showNavigationBarLoading() //导航栏显示加载效果

    console.log(this.data.currentTab);

    if (this.data.currentTab == '0') {
      this.setData({
        filter: null //传入默认
      })

      this.getCarList(this.data.filter, this.data.changedData) //调用方法 改变数据源

    } else if (this.data.currentTab == '1') {

      wx.hideNavigationBarLoading()// 停止导航栏加载效果

    }
  },

  swichNav3: function (e) {

    wx.showNavigationBarLoading() //导航栏显示加载效果
    page = 0 //初始 page

    this.setData({
      currentTab: e.target.dataset.current,
      priceSort: !this.data.priceSort,
      priceSortIcon: !this.data.priceSortIcon,
      showActiveSortMask: false,
    })

    console.log(this.data.priceSort);

    if (this.data.priceSort == true) {
      this.setData({
        filter: 'fromHighToLow', //价格从高到低
        priceSortIcon: true
      })

      this.getCarList(this.data.filter, this.data.changedData) //调用方法 改变数据源

    } else {

      this.setData({
        filter: 'fromLowToHigh', //价格从低到高
        priceSortIcon: false
      })

      this.getCarList(this.data.filter, this.data.changedData) //调用方法 改变数据源
    }
  },

  // 点击品牌
  brandSort: function (e) {

    wx.showNavigationBarLoading() //导航栏显示加载效果
    page = 0 //初始 page

    this.setData({
      addCarBorder: e.currentTarget.dataset.index
    })

    if (e.currentTarget.dataset.carname == '全部') {

      this.setData({
        filter: null //传入默认
      })

      this.getCarList(this.data.filter, this.data.changedData, page) //调用方法 改变数据源

    } else {

      this.setData({
        filter: e.currentTarget.dataset.carname
      })

      this.getCarList(this.data.filter, this.data.changedData, page) //调用方法 改变数据源
    }
  },

  // 遮罩层
  addActiveSortClass: function (e) {

    this.setData({
      activeSortNuber: e.target.dataset.activeindex,
      showActiveSortMask: !this.data.showActiveSortMask,
      showActiveSortMask_: !this.data.showActiveSortMask_
    })

    wx.showNavigationBarLoading() //导航栏显示加载效果

    if (this.data.activeSortNuber == '0') {

      this.setData({
        filter: null //传入默认
      })
      page = 0 //初始 page
      this.getCarList(this.data.filter, this.data.changedData) //调用方法 改变数据源

    } else {

      this.setData({
        filter: this.data.activeSortNuber
      })
      page = 0 //初始 page
      this.getCarList(this.data.filter, this.data.changedData) //调用方法 改变数据源

    }

  },
  box: function (e) {
    if (parseInt(e.detail.scrollTop) > 120) {
      this.setData({
        pageView: false,
        pageViewSort: true
      })
    }
  },
  // 页面滚动样式设置
  // onPageScroll: function (e) {
  //   if (e.scrollTop > 120) {
  //     this.setData({
  //       pageView: false,
  //       pageViewSort: true
  //     })
  //   }
  // },

  // scroll-view 滚动到顶部
  scrollViewTop: function (e) {
    console.log('顶部')
    this.setData({
      pageViewSort: false,
      isChangeStyle: this.data.isChangeStyle
    })
  },
  // scroll-view 滚动到底部
  scrollViewBottom: function (e) {

    wx.showNavigationBarLoading() //导航栏显示加载效果

    this.setData({
      contentText: '正在加载...',
      isShowLoddingImage: true
    })

    this.getCarList(this.data.filter, this.data.changedData, ++page)
    console.log('底部')
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

    // 车辆列表
    let myCollectionCarData = [{
      carImgUrl: '../../images/myBackground.jpg',
      carsModels: 'A6 2017款式 1.8TFSI 双离合 舒适型 A6 2017款式 1.8TFSI 双离合 舒适型A6 2017款式 1.8TFSI 双离合 舒适型 A6 2017款式 1.8TFSI 双离合 舒适型',
      species: '0',
      configurationPrice: 456800,
      preferentialPrice: 436800,
      theOriginalPrice: 436500
    },
    {
      carImgUrl: '../../images/myBackground.jpg',
      carsModels: 'A6 2017款式 1.8TFSI 双离合 舒适型 A6 2017款式 1.8TFSI 双离合 舒适型A6 2017款式 1.8TFSI 双离合 舒适型 A6 2017款式 1.8TFSI 双离合 舒适型',
      species: '1',
      configurationPrice: 456800,
      theOriginalPrice: 436500
    }, {
      carImgUrl: '../../images/myBackground.jpg',
      carsModels: 'A6 2017款式 1.8TFSI 双离合 舒适型 A6 2017款式 1.8TFSI 双离合 舒适型A6 2017款式 1.8TFSI 双离合 舒适型 A6 2017款式 1.8TFSI 双离合 舒适型',
      species: '0',
      configurationPrice: 456800,
      preferentialPrice: 436800,
      theOriginalPrice: 436500
    }, {
      carImgUrl: '../../images/myBackground.jpg',
      carsModels: 'A6 2017款式 1.8TFSI 双离合 舒适型 A6 2017款式 1.8TFSI 双离合 舒适型A6 2017款式 1.8TFSI 双离合 舒适型 A6 2017款式 1.8TFSI 双离合 舒适型',
      species: '0',
      configurationPrice: 456800,
      preferentialPrice: 436800,
      theOriginalPrice: 436500
    }, {
      carImgUrl: '../../images/myBackground.jpg',
      carsModels: 'A6 2017款式 1.8TFSI 双离合 舒适型 A6 2017款式 1.8TFSI 双离合 舒适型A6 2017款式 1.8TFSI 双离合 舒适型 A6 2017款式 1.8TFSI 双离合 舒适型',
      species: '0',
      configurationPrice: 456800,
      preferentialPrice: 436800,
      theOriginalPrice: 436500
    }]

    for (var value of myCollectionCarData) {
      value.preferentialPrice = (value.configurationPrice - value.preferentialPrice) / 10000;
      value.configurationPrice = value.configurationPrice / 10000;
      value.theOriginalPrice = value.theOriginalPrice / 10000;

      value.species = value.species == '0' ? '平行进口车' : value.species == '1' ? '中规车' : '没有此种类车'
    }

    this.setData({
      myCollectionCarData: myCollectionCarData
    })

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
    this.getCarList()
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