$(document).ready(function () {
  $(document).on("click", "#submit", function () {
    var url = $(".url-search").val();
    if (url != null || url != undefined || url != "") {
      url = url.split("?")[0];
      $(".error-msg").hide();
      $(".download-section").hide();
      $(".spinner").show();
      $.ajax({
        url: url + "?__a=1",
        type: "get",
        data: {
          url: $(".url-search").val(),
        },
        success: function (response) {
          try {
            if (response != null) {
              url = response["graphql"]["shortcode_media"]["video_url"];
              $(".spinner").hide();
              $(".download-section").show();
              $("a.download-btn").attr("href", url);
            } else {
              $(".spinner").hide();
              $(".error-msg").show();
            }
          } catch (err) {
            $(".spinner").hide();
            $(".error-msg").show();
          }
        },
        error: function () {
          $(".spinner").hide();
          $(".error-msg").show();
        },
      });
    } else {
      $(".error-msg").show();
    }
  });
});
