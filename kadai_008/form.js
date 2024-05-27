$(function () {
  // ボタン（btn)がクリックされたら
  $(".btn").on("click", function () {
    // テキストボックスに表示
    $(".text-box").val("クリックされました！");
  });
});
