// pages/login/login.js
var interval = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
			contentText:''
  },
  
	login:function(){
    this.showToast.showToast();
    this.setData({
      contentText: '登陆成功！'
    })
	},

  onReady: function () {
    //获取 showToast 组件
    this.showToast = this.selectComponent("#showToast");
  },
})