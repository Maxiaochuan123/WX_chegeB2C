// pages/shoppingMall/shoppingMall.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myCollectionCarData: []
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
      carImgUrl:'../../images/myBackground.jpg',
      carsModels:'A6 2017款式 1.8TFSI 双离合 舒适型 A6 2017款式 1.8TFSI 双离合 舒适型A6 2017款式 1.8TFSI 双离合 舒适型 A6 2017款式 1.8TFSI 双离合 舒适型',
      species:'0',
      configurationPrice:456800,
      preferentialPrice:436800,
      theOriginalPrice:436500
    },
    {
      carImgUrl:'../../images/myBackground.jpg',
      carsModels:'A6 2017款式 1.8TFSI 双离合 舒适型 A6 2017款式 1.8TFSI 双离合 舒适型A6 2017款式 1.8TFSI 双离合 舒适型 A6 2017款式 1.8TFSI 双离合 舒适型',
      species:'1',
      configurationPrice:456800,
      theOriginalPrice:436500
    },{
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