import { Movie } from 'class/Movie.js';
import util from '../../../utils/util';
var app = getApp();
Page({
  data: {
    movie: {}
  },
  onLoad: function (options) {
    var movieId = options.id;
    var url = app.globalData.doubanBase +
      "/v2/movie/subject/" + movieId;
    var movie = new Movie(url);
    //如果想查看url数据
    // var url = app.globalData.doubanBase +
    // "/v2/movie/subject/" + movieId;
    // util.http(url,this.processDoubanData);
    // 再写个方法 
    // processDoubanData:function(data) {
    //   console.log(data);
    // }

    // var movieData = movie.getMovieData();
    // var that = this;
    // movie.getMovieData(function (movie) {
    //   that.setData({
    //     movie: movie
    //   })
    // })
    //C#、Java、Python lambda
    movie.getMovieData((movie) => {
      this.setData({
        movie: movie
      })
    })
  },

  /*查看图片*/
  viewMoviePostImg: function (e) {
    var src = e.currentTarget.dataset.src;
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: [src] // 需要预览的图片http链接列表
    })
  },
})