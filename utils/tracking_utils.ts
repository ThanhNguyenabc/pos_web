export const sendGoogleEvent = (event: string) => {
  if (window.dataLayer) {
    window.dataLayer.push({ event: event });
  }
};
