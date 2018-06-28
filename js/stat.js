'use strict';
(function () {

  var drawObject = function (ctx) {
    ctx.fillStyle = 'black';
    ctx.strokeRect(100, 10, 420, 270);
    ctx.fillRect(110, 20, 420, 270);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillStyle = 'white';
    ctx.strokeRect(100, 10, 420, 270);
    ctx.fillRect(100, 10, 420, 270);
  };

  var writeText = function (ctx) {
    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', 120, 40);
    ctx.fillText('Список результатов:', 120, 60);
  };

  var getRandomColor = function () {
    return 'rgba(0, 0, 255, ' + (Math.random() + 0.1) + ')';
  };

  window.renderStatistics = function (ctx, names, times) {
    drawObject(ctx);
    writeText(ctx);

    var max = Math.max.apply(null, times);

    var i = 0;
    var barWidth = 40;
    var histogramHeight = -150;
    var step = histogramHeight / max;
    var indent = barWidth + 50;
    var initialX = 140;
    var initialY = 250;
    var timeslength = times.length;
    ctx.textBaseline = 'bottom';

    for (i = 0; i < timeslength; i++) {
      if (names[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = getRandomColor();
      }
      ctx.fillRect(initialX + indent * i, initialY, barWidth, times[i] * step / 2);
      ctx.fillStyle = 'rgba(0, 0, 0, 1)';
      ctx.fillText(~~times[i], initialX + indent * i, initialY + times[i] * step / 2);
      ctx.fillText(names[i], initialX + indent * i, initialY + 20);
    }
  };
})();
