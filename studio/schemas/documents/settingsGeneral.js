export default {
  title: "Generelle innstillinger",
  name: "settingsGeneral",
  type: "document",
  fields: [
    {
      title: "Google Tag Manager (GTM)",
      name: "googleTagManager",
      type: "string",
    },
    {
      title: "Klaviyo Site ID (API Key)",
      name: "klaviyoSiteID",
      type: "string",
    },
    {
      title: "Fri frakt-grense (USD)",
      name: "freeShippingLimit",
      type: "number",
      description: "Her bestemmer du hva fri-frakt-grensa skal være på",
    },
    {
      title: "Beskrivelse av bedriften",
      name: "metaDescription",
      type: "text",
      description:
        "Skriv en kort beskrivelse av hva selskapet gjør. Denne teksten vil vises hvis f.eks. forsiden deles på Google",
      rows: 2,
    },
  ],
};
