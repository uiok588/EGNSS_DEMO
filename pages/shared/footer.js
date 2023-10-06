footer = `  
    <footer id="footer" class="position-relative bg-gradient shadow py-5">
        <a
            id="btnBackToTop"
            href="#"
            class="back-to-top"
            style="display:none"
        >
            <i class="fa fa-angle-up"></i>
        </a>

        <a
            id="content01Area"
            title="中央內容區塊"
            accesskey="C"
            href="#content01Area"
            class="targetArea"
        >
            :::
        </a>
        <div class="container d-flex flex-column align-items-center">
        <!--計數器-->
        <div class="counter d-flex justify-content-center flex-wrap col-12 mb-2">
            <div>
                <img src="_img/online.png"  alt="上線"/><label id="ctl00_labONLINE">18</label>
            </div>
            <div>
                <img src="_img/today.png" alt="今日"/><label id="ctl00_labTODAY">241</label>
            </div>
            <div>
                <img src="_img/yesterday.png" alt="昨天"/><label id="ctl00_labYESTERDAY">106</label>
            </div>
            <div>
                <img src="_img/week.png" alt="一周"/><label id="ctl00_labWEEK">347</label>
            </div>
            <div>
                <img src="_img/month.png" alt="一個月"/><label id="ctl00_labMONTH">1796</label>
            </div>
            <div>
                <img src="_img/year.png" alt="一年"/><label id="ctl00_labYEAR">8385</label>
            </div>
            <div>
                <img src="_img/total.png" alt="總共"/><label id="ctl00_labTOTAL">809606</label>
            </div>
        </div>
        <!--網站資訊-->
        <div class="col-12 d-flex flex-column flex-md-row align-items-center justify-content-center mt-3">
            <div class="qrcode text-center mx-5 mb-md-3" >
            <a href="AppAndroidApkDowonload.aspx" title="點我下載">
                <img src="/build/images/NLSC_APK.png" alt="下載APP" width="90">
            </a>
            <p style="text-align:center">i控制測量</p>
            </div>
            <div class="textDiv ms-5">
            內政部國土測繪中心<br>
            電話：(04) 22522966 (代表號)<br> 
            地址：40873臺中市南屯區黎明路2段497號4F<br>
            最佳瀏覽解析度：1024 * 768 以上<br>
            建議使用瀏覽器：Internet Explorer 10 以上、Google Chrome、Firefox、Safari<br>
            <a href="privacy.aspx" target="_blank" title="開新視窗">隱私權政策</a>&nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="security.aspx" target="_blank" title="開新視窗">網站安全政策</a>&nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="personal.aspx" target="_blank" title="開新視窗">個資聲明</a>
            </div>
        </div>
        </div>
    </footer>  
`;

document.write(footer);
