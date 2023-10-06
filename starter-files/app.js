$(function () {
  // set countdown function
  function setCountDown() {
    let counter = 3;
    let interval = setInterval(function () {
      counter--;
      if (counter < 1) {
        clearInterval(interval);
        counter = 3;
        $("#counter").css("display", "none");
        $("#main-wrapper").css("opacity", "100");
      }
      $("#counter").text(counter);
    }, 1000);
    $("#counter").css("display", "block");
    $("#main-wrapper").css("opacity", "0.6");
    $("button").attr("disabled", false);
  }

  // Event listeners

  $("#start").click(function () {
    setCountDown();
    let carWidth = $("#car1").width();
    let raceTrackWidth = $(window).width() - carWidth;

    let raceTime1 = Math.floor(Math.random() * 5000 + 1);
    let raceTime2 = Math.floor(Math.random() * 5000 + 1);

    let isComplete = false;
    let place = "first";

    $("button").attr("disabled", true);

    setTimeout(function () {
      function checkIfIsComplete() {
        if (isComplete === false) {
          isComplete = true;

          $("#main-wrapper").css("opacity", "0.6");
          $("#flag-img").css("display", "block");
        } else {
          place = "second";
          $("#reset").attr("disabled", false);
        }
      }
      let car1 = $("#car1");
      car1.animate(
        {
          left: raceTrackWidth,
        },
        raceTime1,
        function () {
          checkIfIsComplete();

          let car1InfoDiv = $("<div></div>");
          car1InfoDiv.addClass("div-items-info");
          car1InfoDiv.append(
            `Finished in <strong style= "font-size:15px; color:#ffebf7">${place}</strong> place with the time of <strong style= "font-size:15px; color:#ffebf7">${raceTime1}</strong> miliseconds!</div>`
          );
          $(".car1-info ").append(car1InfoDiv);
          localStorage.setItem(
            "car1",
            ` <div class="div-items-info" style="color:#a2a2a2"> <strong style= "font-size:15px; color:#ffebf7">Car1</strong>  finished in <strong style= "font-size:15px; color:#ffebf7">${place}</strong> place with the time of <strong style= "font-size:15px; color:#ffebf7">${raceTime1}</strong> miliseconds</div>`
          );
        }
      );
      $("#car2").animate(
        {
          left: raceTrackWidth,
        },
        raceTime2,
        function () {
          checkIfIsComplete();
          let car2InfoDiv = $("<div></div>");
          car2InfoDiv.addClass("div-items-info");
          car2InfoDiv.append(
            `Finished in <strong style= "font-size:15px; color:#ba0000">${place}</strong> place with the time of <strong style= "font-size:15px; color:#ba0000">${raceTime2}</strong> miliseconds!</div>`
          );
          $(".car2-info ").append(car2InfoDiv);
       localStorage.setItem(
            "car2",
            ` <div class="div-items-info" style="color:#a2a2a2"> <strong style= "font-size:15px; color:#ba0000">Car2</strong>  finished in <strong style= "font-size:15px; color:#ba0000">${place}</strong> place with the time of <strong style= "font-size:15px; color:#ba0000">${raceTime2}</strong> miliseconds</div>`
          );
        }
      );
    }, 3000);
  });

  $("#reset").click(function () {
    $("#flag-img").css("display", "none");
    $("#main-wrapper").css("opacity", "100");
    $(".car").css("left", "0");
    $("#start").attr("disabled", false);
  });
});

window.addEventListener("load", function () {
  let previousGameInfo1= localStorage.getItem("car1");
  let previousGameInfo2 = localStorage.getItem("car2");

  $(".previousGame-info").append(previousGameInfo1);
  $(".previousGame-info").append(previousGameInfo2);
});
