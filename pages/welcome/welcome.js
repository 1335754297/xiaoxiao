Page({
    onTap: function (event) {
        // wx.navigateTo({
        //     url:"../posts/posts"
        // });
        //跳转页面 不带返回键 因为是主页
        wx.switchTab({
            url: "../posts/post"
        });
      
    },
    onReachBottom:function(event){
      console.log('asfasdfa')
    }
})