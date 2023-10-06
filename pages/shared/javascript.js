javascipt = `
  <script src="/lib/bootstrap-5.3.0-alpha1-dist/js/popper.min.js"></script>
  <script src="/lib/bootstrap-5.3.0-alpha1-dist/js/bootstrap.min.js"></script>
  <script src="/lib/jquery-3.6.3/jquery.js"></script>

  <script>
    // 滾動監聽
    window.onscroll = function () {
      scrollFunction();
    };
    function scrollFunction() {

      //document.body.offsetHeight 除以4，是單位換算的問題。
      // console.log("document.body.offsetHeight："+document.body.offsetHeight);
      // console.log("document.body.scrollTop："+document.body.scrollTop);
      // console.log("document.documentElement.scrollTop：" + document.documentElement.scrollTop);
      // if (
      //   document.body.scrollTop > document.body.offsetHeight / 5 ||
      //   document.documentElement.scrollTop > document.body.offsetHeight / 5
      // ) {
      //   $(".logoDiv__js").addClass("disappear");
      // } else {
      //   $(".logoDiv__js").removeClass("disappear");
      // }

      // header
      // 滾動監聽：在 bootstrap xl 以下滾動時，logo區塊消失。
      if( document.documentElement.scrollTop > 0 ){
        $(".logoDiv__js").addClass("disappear");
      }else{
        $(".logoDiv__js").removeClass("disappear");
      }

      //footer
      //按鈕：回到最上層
      //document.body.offsetHeight除以4，是單位換算的問題。
      if (document.body.scrollTop > document.body.offsetHeight/4 || document.documentElement.scrollTop > document.body.offsetHeight/4) {
          $('#btnBackToTop').css("display","inline-block");
      } else {
          $('#btnBackToTop').css("display", "none");
      }

    }

    // navbar
    // 點擊目錄按鈕，開啟全頁目錄；點擊目錄內關閉按鈕，隱藏全頁目錄。
    $('#navbarOpen').click(function(){
      $('#navbar').addClass("navbarOpen");
    });
    $('#navbarClose').click(function(){
      $('#navbar').removeClass("navbarOpen");
    });

    // eyeSwitch
    // input 的隱藏顯示開關。
    $(".eyeSwitch").parent().css('position','relative');
    $(".eyeSwitch").click(function(e){
      let status = $(this).prev().attr('type');
      if ( status == "text"){
        $(this).prev().attr('type','password');
        $(this).removeClass('fa-eye').addClass('fa-eye-slash');
      }else{
        $(this).prev().attr('type','text');
        $(this).addClass('fa-eye').removeClass('fa-eye-slash');
      }
    });

  </script>
`;

document.write(javascipt);
