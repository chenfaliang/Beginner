$(function () {
    //点一个名
    $("#btn1").on("click", function () {
        var tds = $("table td");
        var ranDomNumber = parseInt(Math.random() * 50);
        tds.removeClass("selection");
        tds.eq(ranDomNumber).addClass("selection");
    });
    //点2个名
    //思路
    //1 先产生2个随机数
    //2 然后分别找到这2个元素，添加CSS
    $("#btn2").on("click", function () {
        var tds = $("table td");
        var ranDomNumberA = parseInt(Math.random() * 50);
        var ranDomNumberB = parseInt(Math.random() * 50);
        tds.removeClass("selection");
        tds.eq(ranDomNumberA).addClass("selection");
        tds.eq(ranDomNumberB).addClass("selection");

    });



    $("#btn3").on("click", function () {
        //获得button中的文字内容
        btnVal=$("#btn3").val();
        btnVal=btnVal=="开始抽奖"?"停止抽奖":"开始抽奖";
        $("#btn3").val(btnVal);

        switch (btnVal) {
            case "停止抽奖":
                controlTimer("停止抽奖");
                break;
            case "开始抽奖":
                controlTimer("开始抽奖");
                break;
        }

        //自定义一个定时器控制函数---controlTimer控制时间
        function controlTimer(btnval) {
            if (btnval=="停止抽奖") {
                timeId=setInterval(luckDraw,20);
            }else if (btnval=="开始抽奖") {
                clearInterval(timeId);
            }
            //luckDraw幸运抽奖函数
            function luckDraw() {
                var tds = $("table td");
                var ranDomNumberA = parseInt(Math.random() * tds.length);
                for (var i=0;i<tds.length;i++){
                    // tds.eq(i).css({'background':"transparent"});
                    tds.eq(i).addClass("selection").removeClass("selection");
                }
                // tds.eq(ranDomNumberA).css({'background':'#f00'});
                tds.eq(ranDomNumberA).addClass("selection");

            }

        }
    });


});