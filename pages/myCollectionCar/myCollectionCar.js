// pages/shoppingMall/shoppingMall.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carListAnimation: {},
    carListAnimation_no: {},
    myCollectionCarData: [],
    loveIndex: null
  },

  /**
   * 方法
   */
  carList: function() {
    // 跳转到详情页面

  },
  love: function (res) {

    // 动画
    let carListAnimation = wx.createAnimation({})
    let carListAnimation_no = wx.createAnimation({})
    carListAnimation.opacity(0.5).step();
    carListAnimation_no.opacity(1).step();

    this.setData({
      carListAnimation: carListAnimation.export(),
      carListAnimation_no: carListAnimation_no.export()
    })

    // 点击后取消收藏
    let index = res.currentTarget.dataset.index
    
    let newMyCollectionCarData = this.data.myCollectionCarData

    this.setData({
      loveIndex: index
    })
    
    setTimeout(function () {

      newMyCollectionCarData.splice(index, 1)

      this.setData({
        loveIndex: null,
        myCollectionCarData: newMyCollectionCarData
      })

    }.bind(this), 400)

    // 获取自定义属性
    let carId = res.currentTarget.dataset.carid

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
    let myCollectionCarData = [{
      carId:'201801',
      carImgUrl:'../../images/myBackground.jpg',
      carsModels:'A6 2017款式 1.8TFSI 双离合 舒适型 A6 2017款式 1.8TFSI 双离合 舒适型A6 2017款式 1.8TFSI 双离合 舒适型 A6 2017款式 1.8TFSI 双离合 舒适型',
      species:'0',
      configurationPrice:456800,
      preferentialPrice:436800,
      theOriginalPrice:436500
    },
    {
      carId: '201802',
      carImgUrl:'../../images/myBackground.jpg',
      carsModels:'A6 2017款式 1.8TFSI 双离合 舒适型 A6 2017款式 1.8TFSI 双离合 舒适型A6 2017款式 1.8TFSI 双离合 舒适型 A6 2017款式 1.8TFSI 双离合 舒适型',
      species:'1',
      configurationPrice:456800,
      theOriginalPrice:436500
    },{
      carId: '201803',
      carImgUrl:'../../images/myBackground.jpg',
      carsModels:'A6 2017款式 1.8TFSI 双离合 舒适型 A6 2017款式 1.8TFSI 双离合 舒适型A6 2017款式 1.8TFSI 双离合 舒适型 A6 2017款式 1.8TFSI 双离合 舒适型',
      species:'0',
      configurationPrice:456800,
      preferentialPrice:436800,
      theOriginalPrice:436500
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