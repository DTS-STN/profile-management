export const sendAnalyticsRequest = (
  lang: string,
  title: string,
  creator: string,
  window: Window & typeof globalThis & { adobeDataLayer: any; _satellite: any }
) => {
  if (process.browser) {
    window.adobeDataLayer.push({
      event: 'pageLoad',
      page: {
        title: title,
        language: lang,
        creator: creator,
        accessRights: '2',
        service: 'ESDC-EDSC_ProfileManagement',
      },
    })
  }
}
