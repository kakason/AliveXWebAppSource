'use strict';

(function (exports) {
  var EcgGridlinesManager = function() {
      this.canvas = '';
      this.context = '';
      this.opts = {};
  }
  EcgGridlinesManager.prototype = {
      start() {
          this.canvas = document.getElementById("mycanvas");
          this.context = this.canvas.getContext("2d");
          var obj = this;
          //console.log("first time");
          window.addEventListener('resize', this.resizeCanvas.bind(this), false);
          this.resizeCanvas();
      },
      resizeCanvas() {
          //console.log(this);
          this.canvas.width = window.innerWidth;
          this.canvas.height = window.innerHeight;
          this.redraw();
      },
      redraw() {
          this.context.strokeStyle = 'red';
          this.context.lineWidth = '10';
          this.context.strokeRect(0, 0, window.innerWidth, window.innerHeight);
          this.opts = {
              distance : 5,
              lineWidth : 1,
              gridColor : "#BDE4FF",
              caption : false,
              horizontalLines : true,
              verticalLines : true
          };
          new Grid(this.opts).draw(this.context);
      }
  };

  exports.EcgGridlinesManager = EcgGridlinesManager;
})(window);
