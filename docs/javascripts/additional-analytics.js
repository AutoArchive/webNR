(function () {
  const additionalMeasurementId = 'G-NL0WV2XMJN';

  function configureAdditionalDestination() {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () {
      window.dataLayer.push(arguments);
    };
    window.gtag('config', additionalMeasurementId, {
      page_location: window.location.href,
      page_path: window.location.pathname + window.location.search,
      page_title: document.title,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });
  }

  if (typeof document$ !== 'undefined') {
    document$.subscribe(configureAdditionalDestination);
  } else {
    configureAdditionalDestination();
  }
}());
