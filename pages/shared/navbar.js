navbar = `
  <div id="navbar" class="navbarDiv col-3 rounded rounded-1 shadow-sm">
    <a
      id="navbarArea"
      title="目錄區塊"
      accesskey="L"
      href="#navbarArea"
      class="targetArea"
      >:::</a
    >
    <nav id="pagesMenu" class="accordion accordion-flush">
      <ul class="accordion-item">


        <li>
          <button
            class="accordion-button collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#indexPages"
            aria-expanded="false"
            aria-controls="indexPages"
          >
            首頁
          </button>
          <ul
            id="indexPages"
            class="accordion-collapse collapse"
            data-bs-parent="#pagesMenu"
          >
            <li>
              <a class="accordion-body" href="pages/index.html" title="">最新活動</a>
            </li>
            <li>
              <a class="accordion-body" href="#" title="">活動訊息</a>
            </li>
            <li>
              <a class="accordion-body" href="pages/projectstatics.html" title="">統計數據</a>
            </li>
            <li>
              <a class="accordion-body" href="#" title="">網站導覽</a>
            </li>
          </ul>
        </li>


        <li>
          <button
            class="accordion-button collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#memberPages"
            aria-expanded="false"
            aria-controls="memberPages"
          >
            會員專區
          </button>
          <ul
            id="memberPages"
            class="accordion-collapse collapse"
            data-bs-parent="#pagesMenu"
          >
            <li>
              <a class="accordion-body" href="pages/mbr_info.html" title="">修改會員資料</a>
            </li>
            <li>
              <a class="accordion-body" href="#" title="">帳務與繳費</a>
            </li>
            <li>
              <a class="accordion-body" href="#" title="">RTK帳號管理</a>
            </li>
            <li>
              <a class="accordion-body" href="#" title="">後處理服務</a>
            </li>
            <li>
              <a class="accordion-body" href="#" title=""
                >虛擬觀測資料下載</a
              >
            </li>
            <li>
              <a class="accordion-body" href="#" title="">RINEX資料下載</a>
            </li>
            <li>
              <a class="accordion-body" href="#" title=""
                >三維坐標轉換服務</a
              >
            </li>
            <li>
              <a class="accordion-body" href="#" title="">問卷調查</a>
            </li>
          </ul>
        </li>


        <li>
          <button
            class="accordion-button collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#downloadPages"
            aria-expanded="false"
            aria-controls="downloadPages"
          >
            下載專區
          </button>
          <ul
            id="downloadPages"
            class="accordion-collapse collapse"
            data-bs-parent="#pagesMenu"
          >
            <li>
              <a class="accordion-body" href="#" title="">文件</a>
            </li>
            <li>
              <a class="accordion-body" href="#" title="">軟體</a>
            </li>
          </ul>
        </li>
        

        <li>
          <button
            class="accordion-button collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#contentPages"
            aria-expanded="false"
            aria-controls="contentPages"
          >
            關於e-GNSS
          </button>
          <ul
            id="contentPages"
            class="accordion-collapse collapse"
            data-bs-parent="#pagesMenu"
          >
            <li>
              <a class="accordion-body" href="pages/content01.html" title="">何謂e-GNSS</a>
            </li>
            <li>
              <a class="accordion-body" href="#" title="">e-GNSS特性與優點</a>
            </li>
            <li>
              <a class="accordion-body" href="#" title="">e-GNSS的組成</a>
            </li>
            <li>
              <a class="accordion-body" href="pages/content04.html" title="">系統營運大事記</a>
            </li>
            <li>
              <a class="accordion-body" href="#" title="">e-GNSS坐標系統</a>
            </li>
            <li>
              <a class="accordion-body" href="#" title="">VBS-RTK定位技術</a>
            </li>
            <li>
              <a class="accordion-body" href="#" title="">測試及研究成果</a>
            </li>
            <li>
              <a class="accordion-body" href="#" title="">年度營運報告</a>
            </li>
            <li>
              <a class="accordion-body" href="/pages/qanda.html" title="">問與答</a>
            </li>
            <li>
              <a class="accordion-body" href="#" title="">e-GNSS應用與加值</a>
            </li>
            <li>
              <a class="accordion-body" href="pages/content11.html" title="">現行收費標準</a>
            </li>
          </ul>
        </li>

        
        <li> 
          <button
            class="accordion-button collapsed noChild"
            data-bs-toggle="collapse"
            data-bs-target="#relatedSitesPages"
            aria-expanded="false"
            aria-controls="relatedSitesPages"
            onclick="location.href='pages/relatedSites.html'"
          >
            相關網站
          </button>
        </li>


      </ul>
    </nav>

    <div id="navbarClose" class="closeBtn btn btn-success text-center p-3">
      關閉
    </div>
  
    </div>
`;

document.write(navbar);
