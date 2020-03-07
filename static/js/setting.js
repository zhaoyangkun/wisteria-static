//pjax
$(document).pjax('[data-pjax] a, a[data-pjax]', '#pjax-container', {
    fragment: '#pjax-container',
    // timeout: 3000
}).on("pjax:complete", function () {
    //pjax加载完毕后初始化事件和脚本，防止失效
    clickEvent();
    $('[data-pjax] script, script[data-pjax]').each(function () {
        // console.log($(this));
        $(this).parent().append($(this).remove());
    });
});

const clickEvent = function () {
    //退出登录按钮事件
    $("#logout-btn").on("click", function () {
        $.ajax({
            url: "/api/v1/logout",
            type: "GET",
            dataType: "JSON",
            success: function (res) {
                if (res.result.code === 200) {
                    window.location.href = "/user/login";
                }
            },
            error: function (res) {
                console.log(res.responseJSON);
            }
        });
    });
};

clickEvent();

//全局变量
let global = {};

