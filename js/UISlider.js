$(".priceFilter").slider({
  min: 0,
  max: 50000,
  values: [1000, 30000],
  range: true,
  animate: "fast",
  slide: function (event, ui) {
    $(".priceFilter-input-left").val(ui.values[0]);
    $(".priceFilter-input-right").val(ui.values[1]);
  }
});
$(".priceFilter-input-left").val($(".priceFilter").slider("values", 0));
$(".priceFilter-input-right").val($(".priceFilter").slider("values", 1));
$(".priceFilter_container input").change(function () {
  var input_left = $(".priceFilter-input-left").val().replace(/[^0-9]/g, ''),
    opt_left = $(".priceFilter").slider("option", "min"),
    where_right = $(".priceFilter").slider("values", 1),
    input_right = $(".priceFilter-input-right").val().replace(/[^0-9]/g, ''),
    opt_right = $(".priceFilter").slider("option", "max"),
    where_left = $(".priceFilter").slider("values", 0);
  if (input_left > where_right) {
    input_left = where_right;
  }
  if (input_left < opt_left) {
    input_left = opt_left;
  }
  if (input_left == "") {
    input_left = 0;
  }
  if (input_right < where_left) {
    input_right = where_left;
  }
  if (input_right > opt_right) {
    input_right = opt_right;
  }
  if (input_right == "") {
    input_right = 0;
  }
  $(".priceFilter-input-left").val(input_left);
  $(".priceFilter-input-right").val(input_right);
  if (input_left != where_left) {
    $(".priceFilter").slider("values", 0, input_left);
  }
  if (input_right != where_right) {
    $(".priceFilter").slider("values", 1, input_right);
  }
});