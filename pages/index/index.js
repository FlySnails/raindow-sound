//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    msgs:[
      {
      url:"/imgs/1.jpg",
      text:"GAI"
    },
      {
        url: "/imgs/2.jpg",
        text: "AKA.imp小鬼"
      },
      {
        url: "/imgs/3.jpg",
        text: "PG One"
      },
      {
        url: "/imgs/4.jpg",
        text: "大笑"
      },
      {
        url: "/imgs/5.jpg",
        text: "Jony J"
      },
      {
        url: "/imgs/6.jpg",
        text: "Tizzy T"
      },
      {
        url: "/imgs/7.jpg",
        text: "VAVA"
      }, {
        url: "/imgs/8.jpg",
        text: "孙八一"
      }, {
        url: "/imgs/9.jpg",
        text: "HipHopMan"
      }],
      curr:"",
      songs:[],
      videos:[
        {
          url:"http://www.hetingfeng.top/myvideo/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E5%9C%9F%E8%80%B3%E5%85%B6%E5%86%B0%E6%B7%87%E6%B7%8B.mp4",
          poster:"//shp.qpic.cn/qqvideo_ori/0/a0021wpzce7_360_204/0"
        },
        {
          url: "http://www.hetingfeng.top/myvideo/%E8%96%9B%E4%B9%8B%E8%B0%A6%20-%20%E5%8A%A8%E7%89%A9%E4%B8%96%E7%95%8C.mp4",
          poster: "//shp.qpic.cn/qqvideo_ori/0/y0023sv6a2h_360_204/0"
        },
        {
          url: "http://www.hetingfeng.top/myvideo/%E6%9D%A8%E5%AE%97%E7%BA%AC,%E5%BC%A0%E7%A2%A7%E6%99%A8%20-%20%E5%87%89%E5%87%89.mp4",
          poster: "http://shp.qpic.cn/qqvideo_ori/0/p0022w4yvpo_360_204/0"          
        },
        {
          url: "http://www.hetingfeng.top/myvideo/meirenyu.mp4",
          poster: "//shp.qpic.cn/qqvideo_ori/0/y0023ubwgmw_360_204/0"
        }
      ],
      url:"/imgs/sound1.png",
      url2:"/imgs/index1.png",

  },
  change(e){
    this.setData({
      curr: e.target.dataset.current
    })    
  },
  bindchange({detail}){
    this.setData({
      curr: detail.current
    }) 
  },
  tologin(){
    wx.navigateTo({
      url: '/pages/login/login',
    })
    this.setData({
      url2: "/imgs/index1.png"
    })
  },
  toindex(){
    // wx.navigateTo({
    //   url: '/pages/index/index',
    // })
    this.setData({
      url2: "/imgs/index2.png"
    })
  },
  record(){
    var _this=this
    this.setData({
      url:"/imgs/sound2.png",
      url2: "/imgs/index1.png"
    })
    wx.startRecord({
      success: function (res) {
        var tempFilePath = res.tempFilePath
        wx.playVoice({
          filePath: tempFilePath,
          complete: function () {
          }
        })
        _this.setData({
          url: "/imgs/sound1.png"
        })
      },
      fail: function (res) {
        //录音失败
      }
    })
    setTimeout(function () {
      //结束录音  
      wx.stopRecord()
    }, 10000)
  },
  onLoad: function (options) {
    var _this = this
    wx.request({    
      url: 'https://route.showapi.com/213-4',
      data: {
        showapi_appid: 37049,
        showapi_sign: '4eb5a9df54214dc1b183f60178ab8579',
        topid:4
      },    
      header: {
        'content-type': 'application/json'
      },     
      success: function (res) {
        console.log(res)
        _this.setData({
          songs: res.data.showapi_res_body.pagebean.songlist
        })     
      }
    })
  },
})
