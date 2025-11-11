jQuery(document).ready(function ($) {
  //  Currency  override  toggle  and  settings
  $("#override_currency").on("change", function () {
    if ($(this).is(":checked")) {
      $(".currency-override-settings").show();
    } else {
      $(".currency-override-settings").hide();
    }
  });

  $("#exchange_rate").on("input", function () {
    $("#exchange-preview").text($(this).val());
  });

  $("#target_currency").on("change", function () {
    $("#target-currency-preview").text($(this).val());
  });

  //  Send  test  event  functionality
  $("#send-test-event").on("click", function () {
    var button = $(this);
    var platform = $("#test-platform").val();
    button.prop("disabled", true);
    $("#test-event-result").html(
      '<span  style="color:  blue;">Sending  test  event...</span>'
    );

    $.post(
      ajaxurl,
      {
        action: "ga4_s2s_send_test_event",
        platform: platform,
        nonce: ga4_s2s_admin.test_nonce,
      },
      function (response) {
        button.prop("disabled", false);
        if (response.success) {
          $("#test-event-result").html(
            '<span  style="color:  green;">✓  ' +
              response.data.message +
              "</span>"
          );
        } else {
          $("#test-event-result").html(
            '<span  style="color:  red;">✗  ' + response.data + "</span>"
          );
        }
      }
    ).fail(function () {
      button.prop("disabled", false);
      $("#test-event-result").html(
        '<span  style="color:  red;">✗  Request  failed</span>'
      );
    });
  });

  //  Toggle  configuration  sections  based  on  platform  selection
  $('input[name="enable_ga4"]').on("change", function () {
    if ($(this).is(":checked")) {
      $("#ga4-configuration-section").slideDown(300);
    } else {
      $("#ga4-configuration-section").slideUp(300);
    }
  });

  $('input[name="enable_facebook"]').on("change", function () {
    if ($(this).is(":checked")) {
      $("#facebook-configuration-section").slideDown(300);
    } else {
      $("#facebook-configuration-section").slideUp(300);
    }
  });

  //  Toggle  API  secret  visibility
  $("#toggle-api-secret").on("click", function () {
    var input = $("#api_secret");
    if (input.attr("type") === "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });

  //  Toggle  Facebook  Access  Token  visibility
  $("#toggle-fb-token").on("click", function () {
    var input = $("#fb_access_token");
    if (input.attr("type") === "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });

  //  Clear  logs  functionality
  $("#clear-logs").on("click", function () {
    if (confirm("Are  you  sure  you  want  to  clear  all  logs?")) {
      $.post(
        ajaxurl,
        {
          action: "ga4_s2s_clear_logs",
          nonce: ga4_s2s_admin.clear_logs_nonce,
        },
        function (response) {
          if (response.success) {
            $("#log-status").html(
              '<span  style="color:  green;">Logs  cleared  successfully!</span>'
            );
            setTimeout(function () {
              location.reload();
            }, 1000);
          }
        }
      );
    }
  });

  $("#refresh-logs").on("click", function () {
    var url = new URL(window.location.href);
    url.searchParams.delete("paged");
    url.searchParams.delete("_wpnonce");
    window.location.href = url.toString();
  });

  //  Select  all  checkbox
  $("#select-all-logs").on("change", function () {
    $(".log-checkbox").prop("checked", $(this).is(":checked"));
  });

  //  Delete  selected  logs
  $("#delete-selected").on("click", function () {
    var selectedLogs = [];
    $(".log-checkbox:checked").each(function () {
      selectedLogs.push($(this).val());
    });

    if (selectedLogs.length === 0) {
      alert("Please  select  at  least  one  log  to  delete.");
      return;
    }

    if (
      confirm(
        "Are  you  sure  you  want  to  delete  " +
          selectedLogs.length +
          "  selected  log(s)?"
      )
    ) {
      $.post(
        ajaxurl,
        {
          action: "ga4_s2s_delete_logs",
          logs: selectedLogs,
          nonce: ga4_s2s_admin.delete_logs_nonce,
        },
        function (response) {
          if (response.success) {
            $("#log-status").html(
              '<span  style="color:  green;">Selected  logs  deleted  successfully!</span>'
            );
            setTimeout(function () {
              location.reload();
            }, 1000);
          }
        }
      );
    }
  });

  //  Delete  single  log
  $(".delete-single-log").on("click", function () {
    var logId = $(this).data("log-id");
    if (confirm("Are  you  sure  you  want  to  delete  this  log?")) {
      $.post(
        ajaxurl,
        {
          action: "ga4_s2s_delete_logs",
          logs: [logId],
          nonce: ga4_s2s_admin.delete_logs_nonce,
        },
        function (response) {
          if (response.success) {
            $('tr[data-log-id="' + logId + '"]').fadeOut(300, function () {
              $(this).remove();
              if ($("#logs-tbody  tr").length === 1) {
                //  Only  header  left
                location.reload();
              }
            });
          }
        }
      );
    }
  });
});
