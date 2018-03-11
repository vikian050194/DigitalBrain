$(document).ready(function () {
    //alert("Hello, World!");
    debugger;
    $.ajaxSetup({ cache: false });

    $("#input").on("keydown", function (e) {
        if (e.which == 13) {
            alert('You pressed enter!');
        }
    });

    // $.ajax({
    //     type: "GET",
    //     url: this.href,
    //     success: function (result) {
    //         reload();
    //     }
    // });

    // $.ajax({
    //     type: "GET",
    //     url: '/Group/List',
    //     success: function (result) {
    //         $('#group').html(result);
    //     }
    // });

    // $(".refresher").on("click", function () {
    //     console.log("click");
    //     $.ajax({
    //         type: "GET",
    //         url: this.href,
    //         success: function (result) {
    //             reload();
    //         }
    //     });
    // });
});