import { Component } from 'react';

class Project extends Component {
    constructor() {
        super();
        this.videos = [];
    }

  componentDidMount() {
    //scroll top
    window.scrollTo(0, 0);
    setTimeout(function(){
        this.initVideos();

        if(this.videos.length){
            window.addEventListener('scroll', this.handleVideos.bind(this), true);
        }
    }.bind(this), 300);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleVideos, true);
  }

  initVideos() {
      //select all the elements
      this.videos = document.querySelectorAll('video');
      //get the document size
      let bodyRect = document.body.getBoundingClientRect();

      //get the coordinates of all the elements
      for(var i = 0; i < this.videos.length; i++){
          var coords       = this.videos[i].getBoundingClientRect();
          this.videos[i].calcY   = coords.top - bodyRect.top;
          this.videos[i].calcH   = coords.height;
      }

      this.handleVideos();
  }

  handleVideos() {
    // console.log(this.videos.length)
      for(var i = 0; i < this.videos.length; i++){
          var item = this.videos[i];
          var top = item.calcY; // top of our element
          var bottom = item.calcY + item.calcH; // bottom of our element
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0; // scroll position
          var viewTop = scrollTop; // viewport top
          var viewBottom = viewTop + window.innerHeight - 40; // viewport bottom / we allow the image to overlap 80px before the animation kicks in

          //is our element in view?
          if( item.paused && (top <= viewBottom) && (bottom >= viewTop) ){
              item.play();

          }else if(!item.paused){  // reset when we scroll up so we can replay the animation
              // item.pause();
          }
      }
    // });
  }
}

export default Project;