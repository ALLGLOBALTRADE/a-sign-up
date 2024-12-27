$(document).ready(function () {
  wow = new WOW({
    animateClass: "animated",
    offset: 100,
    callback: function (box) {
      console.log("WOW: animating <" + box.tagName.toLowerCase() + ">");
    },
  });
  wow.init();

  //calculator1//

  function calc() {
    var percent = [23];
    var minMoney = [2];
    var maxMoney = [10000000];

    if ($("#amount").val().length == 0) {
      $("#amount").val(minMoney[0]);
    }

    amount = parseFloat($("#amount").val());
    id = -1;
    var length = percent.length;
    var i = 0;
    do {
      if (minMoney[i] <= amount && amount <= maxMoney[i]) {
        id = i;
        i = i + length;
      }
      i++;
    } while (i < length);

    if (id != -1) {
      profitDaily = (amount / 100) * percent[id];
      profitDaily = profitDaily.toFixed(4);
      profitHourly = (amount / 100) * percent[id];
      profitHourly = profitHourly.toFixed(4);
      profitTotal = profitDaily * 5;
      profitTotal = profitTotal.toFixed(4);
      profitMonthly = profitDaily * 30;
      profitMonthly = profitMonthly.toFixed(4);

      if (amount < minMoney[id] || isNaN(amount) == true) {
        $("#profitHourly").text("Error!");
        $("#profitDaily").text("Error!");
        $("#profitTotal").text("Error!");
        $("#profitMonthly").text("Error!");
      } else {
        $("#profitHourly").text("$" + profitHourly);
        $("#profitDaily").text("$" + profitDaily);
        $("#profitTotal").text("$" + profitTotal);
        $("#profitMonthly").text("$" + profitMonthly);
      }
    } else {
      $("#profitHourly").text("Error!");
      $("#profitDaily").text("Error!");
      $("#profitTotal").text("Error!");
      $("#profitMonthly").text("Error!");
    }
  }

  calc();

  $("#amount").keyup(function () {
    calc();
  });

  //calculator2//

  //Calculator
  function calc1() {
    var percent = [120];
    var minMoney = [200];
    var maxMoney = [10000000];

    if ($("#amount1").val().length == 0) {
      $("#amount1").val(minMoney[0]);
    }

    amount = parseFloat($("#amount1").val());
    id = -1;
    var length = percent.length;
    var i = 0;
    do {
      if (minMoney[i] <= amount && amount <= maxMoney[i]) {
        id = i;
        i = i + length;
      }
      i++;
    } while (i < length);

    if (id != -1) {
      profitDaily1 = ((amount / 100) * percent[id]) / 5;
      profitDaily1 = profitDaily1.toFixed(4);
      profitHourly = (amount / 100) * percent[id];
      profitHourly = profitHourly.toFixed(4);
      profitTotal1 = (amount / 100) * percent[id];
      profitTotal1 = profitTotal1.toFixed(4);
      profitMonthly1 = profitDaily1 * 30;
      profitMonthly1 = profitMonthly1.toFixed(4);

      if (amount < minMoney[id] || isNaN(amount) == true) {
        $("#profitHourly").text("Error!");
        $("#profitDaily1").text("Error!");
        $("#profitTotal1").text("Error!");
        $("#profitMonthly1").text("Error!");
      } else {
        $("#profitHourly").text("$" + profitHourly);
        $("#profitDaily1").text("$" + profitDaily1);
        $("#profitTotal1").text("$" + profitTotal1);
        $("#profitMonthly1").text("$" + profitMonthly1);
      }
    } else {
      $("#profitHourly").text("Error!");
      $("#profitDaily1").text("Error!");
      $("#profitTotal1").text("Error!");
      $("#profitMonthly1").text("Error!");
    }
  }

  calc1();

  $("#amount1").keyup(function () {
    calc1();
  });

  //Calculator
  function calc2() {
    var percent = [126];
    var minMoney = [2000];
    var maxMoney = [100000000];

    if ($("#amount2").val().length == 0) {
      $("#amount2").val(minMoney[0]);
    }

    amount = parseFloat($("#amount2").val());
    id = -1;
    var length = percent.length;
    var i = 0;
    do {
      if (minMoney[i] <= amount && amount <= maxMoney[i]) {
        id = i;
        i = i + length;
      }
      i++;
    } while (i < length);

    if (id != -1) {
      profitDaily2 = ((amount / 100) * percent[id]) / 3;
      profitDaily2 = profitDaily2.toFixed(6);
      profitHourly = (amount / 100) * percent[id];
      profitHourly = profitHourly.toFixed(6);
      profitTotal2 = (amount / 100) * percent[id];
      profitTotal2 = profitTotal2.toFixed(6);
      profitMonthly2 = profitDaily2 * 30;
      profitMonthly2 = profitMonthly2.toFixed(6);

      if (amount < minMoney[id] || isNaN(amount) == true) {
        $("#profitHourly").text("Error!");
        $("#profitDaily2").text("Error!");
        $("#profitTotal2").text("Error!");
        $("#profitMonthly2").text("Error!");
      } else {
        $("#profitHourly").text("$" + profitHourly);
        $("#profitDaily2").text("$" + profitDaily2);
        $("#profitTotal2").text("$" + profitTotal2);
        $("#profitMonthly2").text("$" + profitMonthly2);
      }
    } else {
      $("#profitHourly").text("Error!");
      $("#profitDaily2").text("Error!");
      $("#profitTotal2").text("Error!");
      $("#profitMonthly2").text("Error!");
    }
  }

  calc2();

  $("#amount2").keyup(function () {
    calc2();
  });

  //Calculator
  function calc3() {
    var percent = [135];
    var minMoney = [5000];
    var maxMoney = [100000000];

    if ($("#amount3").val().length == 0) {
      $("#amount3").val(minMoney[0]);
    }

    amount = parseFloat($("#amount3").val());
    id = -1;
    var length = percent.length;
    var i = 0;
    do {
      if (minMoney[i] <= amount && amount <= maxMoney[i]) {
        id = i;
        i = i + length;
      }
      i++;
    } while (i < length);

    if (id != -1) {
      profitDaily3 = ((amount / 100) * percent[id]) / 3;
      profitDaily3 = profitDaily3.toFixed(4);
      profitHourly = (amount / 100) * percent[id];
      profitHourly = profitHourly.toFixed(4);
      profitTotal3 = (amount / 100) * percent[id];
      profitTotal3 = profitTotal3.toFixed(4);
      profitMonthly3 = profitDaily3 * 30;
      profitMonthly3 = profitMonthly3.toFixed(4);

      if (amount < minMoney[id] || isNaN(amount) == true) {
        $("#profitHourly").text("Error!");
        $("#profitDaily3").text("Error!");
        $("#profitTotal3").text("Error!");
        $("#profitMonthly3").text("Error!");
      } else {
        $("#profitHourly").text("$" + profitHourly);
        $("#profitDaily3").text("$" + profitDaily3);
        $("#profitTotal3").text("$" + profitTotal3);
        $("#profitMonthly3").text("$" + profitMonthly3);
      }
    } else {
      $("#profitHourly").text("Error!");
      $("#profitDaily3").text("Error!");
      $("#profitTotal3").text("Error!");
      $("#profitMonthly3").text("Error!");
    }
  }

  calc3();

  $("#amount3").keyup(function () {
    calc3();
  });

  //Calculator
  function calc4() {
    var percent = [140];
    var minMoney = [10000];
    var maxMoney = [100000000];

    if ($("#amount4").val().length == 0) {
      $("#amount4").val(minMoney[0]);
    }

    amount = parseFloat($("#amount4").val());
    id = -1;
    var length = percent.length;
    var i = 0;
    do {
      if (minMoney[i] <= amount && amount <= maxMoney[i]) {
        id = i;
        i = i + length;
      }
      i++;
    } while (i < length);

    if (id != -1) {
      profitDaily4 = ((amount / 100) * percent[id]) / 2;
      profitDaily4 = profitDaily4.toFixed(4);
      profitHourly = (amount / 100) * percent[id];
      profitHourly = profitHourly.toFixed(4);
      profitTotal4 = (amount / 100) * percent[id];
      profitTotal4 = profitTotal4.toFixed(4);
      profitMonthly4 = profitDaily4 * 30;
      profitMonthly4 = profitMonthly4.toFixed(4);

      if (amount < minMoney[id] || isNaN(amount) == true) {
        $("#profitHourly").text("Error!");
        $("#profitDaily4").text("Error!");
        $("#profitTotal4").text("Error!");
        $("#profitMonthly4").text("Error!");
      } else {
        $("#profitHourly").text("$" + profitHourly);
        $("#profitDaily4").text("$" + profitDaily4);
        $("#profitTotal4").text("$" + profitTotal4);
        $("#profitMonthly4").text("$" + profitMonthly4);
      }
    } else {
      $("#profitHourly").text("Error!");
      $("#profitDaily4").text("Error!");
      $("#profitTotal4").text("Error!");
      $("#profitMonthly4").text("Error!");
    }
  }

  calc4();

  $("#amount4").keyup(function () {
    calc4();
  });
});
