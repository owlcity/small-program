//news.js
//获取应用实例
const app = getApp()
var screenwidth = wx.getSystemInfoSync().screenWidth;


Page({
  data: {
    tabs: ["全部", "公告", "任务", "审批", "审核"],
    activeIndex: 0,
    sliderOffset: screenwidth * 0.1
      
    
  },
  onLoad: function () {
    var that = this;
   
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  }
});