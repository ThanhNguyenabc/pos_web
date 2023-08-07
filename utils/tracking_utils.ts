export const sendGoogleEvent = (event: string) => {
  if (process.env.NODE_ENV === "production" && window.dataLayer) {
    window.dataLayer.push({ event: event });
  }
};
