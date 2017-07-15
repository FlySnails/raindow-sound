Page({
  data:{
    username:"",
    password:""
  },
  user({detail}){
    this.setData({
      username: detail.value
    })
  },
  pass({detail}) {
    this.setData({
      password: detail.value
    })
  },
  submit(){
    if (!this.data.username){
      wx.showToast({
        title: '用户名不能为空',
        image: '/imgs/mine1.png',
        duration: 1500,
        mask:true
      })
      return
    }//验证用户名、密码是否为空
    else if (!this.data.password) {
      wx.showToast({
        title: '密码不能为空',
        image: '/imgs/mine1.png',
        duration: 1500,
        mask: true
      })
      return
    }//验证用户名、密码是否为空
    else if (this.data.username!=="Jay") {
      wx.showToast({
        title: '你未注册哦',
        image: '/imgs/mine1.png',
        duration: 1500,
        mask: true
      })
      return
    }//验证用户名
    else{
      wx.showToast({
        title: '登陆成功！',
        image: '/imgs/mine2.png',
        duration: 1500,
        mask: true,
        success(){
          wx.navigateTo({
            url: '/pages/index/index'
          })
        }
      })      
    }

    var obj={}
    obj.username = this.data.username
    obj.password = this.data.password
    var _this = this;
    wx.request({
      method:"POST",
      url: 'http://127.0.0.1:8090/api/login', 
      data:obj,
      header: {
        'content-type': 'application/json'
      },      
      success: function (res) {
        console.log(res)
        if (!res.data.code) {
          wx.navigateTo({
            url: '/pages/index/index?suername=' + _this.data.username
          })
        }
      }
    })
  },
  regieter(){
    wx.showToast({
      title: '暂不能注册',
      image: '/imgs/mine1.png',
      duration: 1500,
      mask: true
    })
  }
})