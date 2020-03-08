// //ajax全局设置
// $.ajaxSetup({
//     error: function (jqXHR, textStatus, errorThrown) {
//         const result = jqXHR.responseJSON.result;
//         switch (jqXHR.status) {
//             case (500):
//                 lightyear.notify(result.msg, 'warning', 1000);
//                 break;
//             case (400):
//                 lightyear.notify(result.msg, 'warning', 1000);
//                 break;
//             case (401):
//                 lightyear.notify(result.msg, 'warning', 1000);
//                 setTimeout(function () {
//                     window.location.href = "/user/login";
//                 }, 1000);
//                 break;
//             case (403):
//                 lightyear.notify(result.msg, 'warning', 1000);
//                 setTimeout(function () {
//                     window.location.href = "/403";
//                 }, 1000);
//                 break;
//             default:
//                 lightyear.notify()
//         }
//     },
// });