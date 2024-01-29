header = `  
    <noscript>您的瀏覽器不支援JavaScript功能，若本網站功能無法正常使用，請開啟瀏覽器JavaScript狀態</noscript>

    <header id="header" class="bg-light bg-gradient shadow">
    <a id="headerArea" title="標題區塊" accesskey="u" href="#headerArea" class="targetArea" >:::</a>
    <div class="headerTop container d-flex flex-column flex-sm-row justify-content-between px-3 py-2">
      <p>e-GNSS 即時動態定位系統入口網站</p>
      <!-- 未登入顯示：尚未登入。 / 登入顯示：內政部國土測繪中心 會員您好。 -->
      <p>內政部國土測繪中心 會員您好</p>
    </div>
    <div class="container d-flex flex-column flex-xl-row justify-content-center justify-content-xl-between align-items-center p-3 py-4">
      <div class="logoDiv logoDiv__js d-flex align-items-center mb-4 mb-xl-0">
        <img src="build/images/logo.png" alt />
        <h2 class="ms-3">e-GNSS<br />即時動態定位系統入口網站</h1>
      </div>
      <div class="menuDiv d-flex justify-content-xl-end">
        <!-- 開始RWD：xl以下出現 -->
        <button id="navbarOpen" class="btn btn-success mx-1 d-flex d-xl-none">
          <img class="smImg" src="build/images/icons/menu.svg" alt>
          目錄
        </button>
        <!-- 結束RWD：xl以下出現 -->

        <!-- 開始：未登入出現 -->
        <button class="btn btn-primary ms-2">
          <img class="smImg" src="build/images/icons/user.svg" alt>
          會員登入
        </button>
        <button class="btn btn-primary ms-2">
          <img class="smImg" src="build/images/icons/add-friend.svg" alt>
          會員註冊
        </button>
        <!-- 結束：未登入出現 -->

        <button class="btn btn-primary ms-2">
          <img src="build/images/icons/dollar.svg" alt>
          註冊繳費
        </button>
        <button class="btn btn-primary ms-2">
          <img src="build/images/icons/satelite.svg" alt>
          基準站資訊
        </button>
        <button class="btn btn-primary ms-2">
          <img src="build/images/icons/search.svg" alt>
          服務網情形
        </button>

        <!-- 開始：已登入出現 -->
        <button class="btn btn-warning ms-2">
          <img src="build/images/icons/logout.svg" alt>
          登出
        </button>
        <!-- 結束：已登入出現 -->
      </div>
    </div>
  </header>
`;

document.write(header);
