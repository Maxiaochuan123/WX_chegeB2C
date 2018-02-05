Component({
  properties: {
    contentText: {
      type: String,
      value: ''
    },
    isShowLoddingImage: {
      type: Boolean,
      value: ''
    }
  },
  data:{
    isShowLodding: false,
    contentText:''
  },
  methods:{
    loddingShow: function () {
      this.setData({
        isShowLodding: true
      })
    },
    loddingHidden: function () {
      this.setData({
        isShowLodding: !this.data.isShowLodding,
        contentText:'↑  上拉加载更多车辆...'
      })
    }
  }
})