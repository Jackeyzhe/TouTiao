Page({
  data:{
    // text:"这是一个页面"
    focus:false,
    isShowView:true,
    markImage:"../../image/count.jpg",
    goodImage:"../../image/good.jpg",
    message:[{
      title:"大公司是怎样发布静态资源的",
      url:"http://img5.imgtn.bdimg.com/it/u=888613502,2008069287&fm=21&gp=0.jpg",
      user:"运维精选",
      goodCount:0,
      count:0
    },{
      title:"跟我一起学习Hadoop",
      url:"http://pic.58pic.com/58pic/13/19/24/11F58PIChdV_1024.jpg",
      user:"写程序的康德",
      goodCount:12,
      count:0
    },{
      title:"设计师最爱的英文字体",
      url:"http://pic15.nipic.com/20110630/6322714_105943746342_2.jpg",
      user:"生活像代码",
      goodCount:4,
      count:2
    },{
      title:"超轻量级反爬虫方案",
      url:"http://pic5.nipic.com/20100302/1001459_174128089518_2.jpg",
      user:"Java框架探索",
      goodCount:4,
      count:1
    },{
      title:"从0开始学习GitHub",
      url:"http://pic.58pic.com/58pic/14/04/92/75558PICdVG_1024.jpg",
      user:"在线工具",
      goodCount:23,
      count:0
    },{
      title:"IOS 10 Todayoday 的适配",
      url:"http://pic24.nipic.com/20121102/9706656_122825061328_2.jpg",
      user:"IOS相关",
      goodCount:2,
      count:5
    }]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log(options);
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})