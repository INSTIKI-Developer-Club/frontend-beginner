exports.localTime = () => {
  const currentDate = new Date().toISOString();

  return new Date(currentDate).toLocaleString("id-ID", {
    timeZone: "Asia/Makassar",
    format: "YYYY-MM-DD HH:mm",
  });
};
