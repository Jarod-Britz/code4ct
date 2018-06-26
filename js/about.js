// variable object for progresss bar start angle,value,and colour
var progressBarOptions = {
    startAngle: -1.55,
    value: 0.85,
    fill: {
      color: '#e38f84'
    }
  }
  // jQuery styling of progress bars
  $('.timer').mouseover(function() {
    $('.circle').circleProgress(progressBarOptions).on('circle-animation-progress', function(event, progress, stepValue) {
    });
  // jQuery styling of progress bars
   $('#circle-b').circleProgress({
      value : 0.80,
      fill: {
        color: '#e38f84'
      }
    });
  // jQuery styling of progress bars
   $('#circle-c').circleProgress({
      value : 0.90,
      fill: {
        color: '#e38f84'
      }
    });
  // jQuery styling of progress bars
   $('#circle-d').circleProgress({
      value : 0.97,
      fill: {
        color: '#e38f84'
      }
    });
  });