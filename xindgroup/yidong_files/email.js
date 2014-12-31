function showDiv(type) {
    $("#type").val(type);
    if (type == "1") {
        $("#ly").html("留言-董事局主席信箱");
    }
    if (type == "2") {
        $("#ly").html(" 留言-党委书记信箱");
    }
    if (type == "3") {
        $("#ly").html(" 留言-总裁信箱");
    }
	if (type == "4") {
        $("#ly").html(" 留言-集团30周年庆典");
    }
	if (type == "5") {
        $("#ly").html(" 留言-伊东党建");
    }
    $.blockUI({
        message: $('#box1'),
        css: {
            top: '30%',
            left: '50%',
            textAlign: 'left',
            width: '530px',
            background: 'none'
        }
    });
    $('.close').click($.unblockUI);
    $('.blockOverlay').attr('title', '单击关闭').click($.unblockUI);
}
function btnseed() {
    var type = $("#type").val();
    var title = $("#title").val();
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    if (title == "") {
        alert("标题不能为空！");
        return;
    }
    if (message == "") {
        alert("内容不能为空！");
        return;
    }
    $("#btn").val("发送中...");
    $("#btn").attr("disabled", true);
    $.ajax({
        type: "POST",
        url: "Ajax/webemail.ashx",
        data: "type=" + type + "&name=" + encodeURIComponent(name) + "&email=" + encodeURIComponent(email) + "&title=" + encodeURIComponent(title) + "&message=" + encodeURIComponent(message) + "",
        success: function (data) {
            if (data != "0") {
                alert("发送成功！");
                window.location.reload();
            }
            else {
                alert("发送失败！");
                window.location.reload();
            }
        }
    })
}

function btnseed_DJ() {
    var type = $("#type").val();
    var title = $("#title").val();
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    if (title == "") {
        alert("标题不能为空！");
        return;
    }
    if (message == "") {
        alert("内容不能为空！");
        return;
    }
    $("#btn").val("发送中...");
    $("#btn").attr("disabled", true);
    $.ajax({
        type: "POST",
        url: "../Ajax/webemail.ashx",
        data: "type=" + type + "&name=" + encodeURIComponent(name) + "&email=" + encodeURIComponent(email) + "&title=" + encodeURIComponent(title) + "&message=" + encodeURIComponent(message) + "",
        success: function (data) {
            if (data != "0") {
                alert("发送成功！");
                window.location.reload();
            }
            else {
                alert("发送失败！");
                window.location.reload();
            }
        }
    })
}