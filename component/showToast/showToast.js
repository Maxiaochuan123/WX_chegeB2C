Component({
  properties: {
    contentText: {
      type: String
    }
  },
  data:{
    isShow: false
  },
  methods: {
    //展示提示框
    showToast() {
      this.setData({
        isShow: true
      })
      setTimeout(function(){
        this.setData({
          isShow: false
        })
      }.bind(this),1000)
    }
  }
})