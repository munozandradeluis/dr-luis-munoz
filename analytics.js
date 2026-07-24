// analytics.js
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-549097550"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-549097550');
</script>
<script>
function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-549097550/AExUCI_lztUcEM6g6oUC',
      'value': 1.0,
      'currency': 'USD',
      'event_callback': callback
  });
  return false;
}
</script>
