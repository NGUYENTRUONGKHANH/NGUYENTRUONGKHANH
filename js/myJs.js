const textConfig = {
  text1: "He luu Bánh Bao nhân đậu xanh =)))!",
  text2: "Anh có điều này muốn hỏi emm nhớ phải trả lời thật lòng nhaaa.",
  text3: "Chủ nợ yêu con nợ ni có phải không nào ._.",
  text4: "Nếu bánh bao hông trả lời mà thoát ra tức là muốn làm vợ mình rồi đó nha :v",
  text5: "Anh mơ à???",
  text6: "Yêu ơi là yêu <3",
  text7: "Lí do bánh bao thích con nợ này đi :vvvv",
  text8: "Gửi cho mình <3",
  text9: "Vì ku Khánh đẹp try quóe :)))))",
  text10: "Anh biết mà ^^ Yêu em suốt cái đời",
  text11: "Tối nay Khánh qua đón bánh bao đi quẩy nhaa :v Còn giờ thì chờ gì nữa mà ko inbox cho con nợ này đi nàooo",
  text12: "Okii lunn <3",
};

$(document).ready(function () {
  // process bar
  setTimeout(function () {
    firstQuestion();
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  }, 600);

  $("#text3").html("Chủ nợ yêu con nợ ni có phải không nào ._.");
  $("#text4").html("Nếu bánh bao hông trả lời mà thoát ra tức là muốn làm vợ mình rồi đó nha :v");
  $("#no").html("Anh mơ à???");
  $("#yes").html("Yêu ơi là yêu <3");

  function firstQuestion() {
    $(".content").hide();
    Swal.fire({
      title: "He luu Bánh Bao nhân đậu xanh =)))!",
      text: "Anh có điều này muốn hỏi emm nhớ phải trả lời thật lòng nhaaa.",
      imageUrl: "img/cuteCat.jpg",
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("img/iput-bg.jpg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(200);
    });
  }

  // switch button position
  function switchButton() {
    var audio = new Audio("sound/duck.mp3");
    audio.play();
    var leftNo = $("#no").css("left");
    var topNO = $("#no").css("top");
    var leftY = $("#yes").css("left");
    var topY = $("#yes").css("top");
    $("#no").css("left", leftY);
    $("#no").css("top", topY);
    $("#yes").css("left", leftNo);
    $("#yes").css("top", topNO);
  }
  // move random button póition
  function moveButton() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    if (screen.width <= 600) {
      var x = Math.random() * 300;
      var y = Math.random() * 500;
    } else {
      var x = Math.random() * 500;
      var y = Math.random() * 500;
    }
    var left = x + "px";
    var top = y + "px";
    $("#no").css("left", left);
    $("#no").css("top", top);
  }

  var n = 0;
  $("#no").mousemove(function () {
    if (n < 1) switchButton();
    if (n > 1) moveButton();
    n++;
  });
  $("#no").click(() => {
    if (screen.width >= 900) switchButton();
  });

  // generate text in input
  function textGenerate() {
    var n = "";
    var text = " " + "Vì ku Khánh đẹp try quóe :)))))";
    var a = Array.from(text);
    var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
    var count = textVal.length;
    if (count > 0) {
      for (let i = 1; i <= count; i++) {
        n = n + a[i];
        if (i == text.length + 1) {
          $("#txtReason").val("");
          n = "";
          break;
        }
      }
    }
    $("#txtReason").val(n);
  }

  // show popup
  $("#yes").click(function () {
    var audio = new Audio("sound/tick.mp3");
    audio.play();
    Swal.fire({
      title: "Lí do bánh bao thích con nợ này đi :vvvv",
      html: true,
      width: 900,
      padding: "3em",
      html: "<input type='text' class='form-control' id='txtReason'  placeholder='Whyyy'>",
      background: '#fff url("img/iput-bg.jpg")',
      backdrop: `
                    rgba(0,0,123,0.4)
                    url("img/giphy2.gif")
                    left top
                    no-repeat
                  `,
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonColor: "#fe8a71",
      cancelButtonColor: "#f6cd61",
      confirmButtonText: "Gửi cho mình <3",
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          width: 900,
          confirmButtonText: "Okii lunn <3",
          background: '#fff url("img/iput-bg.jpg")',
          title: "Anh biết mà ^^ Yêu em suốt cái đời",
          text: "Tối nay Khánh qua đón bánh bao đi quẩy nhaa :v Còn giờ thì chờ gì nữa mà ko inbox cho con nợ này đi nàooo",
          confirmButtonColor: "#83d0c9",
          onClose: () => {
            window.location = "http://m.me/100004927299932";
          },
        });
      }
    });

    $("#txtReason").focus(function () {
      var handleWriteText = setInterval(function () {
        textGenerate();
      }, 10);
      $("#txtReason").blur(function () {
        clearInterval(handleWriteText);
      });
    });
  });
});
