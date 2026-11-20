// Toma app.json como base y solo cambia de dónde sale google-services.json.
// En EAS la variable de tipo archivo GOOGLE_SERVICES_JSON trae la ruta del archivo;
// en local se usa ./google-services.json (que está en .gitignore).
module.exports = ({ config }) => ({
  ...config,
  android: {
    ...config.android,
    googleServicesFile: process.env.GOOGLE_SERVICES_JSON ?? "./google-services.json",
  },
});
