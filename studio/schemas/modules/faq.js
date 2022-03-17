import { BsQuestionSquare } from "react-icons/bs";

export default {
  title: "Ofte stilte spørsmål",
  name: "faq",
  type: "object",
  icon: BsQuestionSquare,
  fields: [
    {
      title: "Spørsmål",
      name: "question",
      type: "string",
      description: "Ditt spørsmål",
    },
    {
      title: "Svar",
      name: "faqanswers",
      type: "richText",
      description: "Skriv svaret til spørsmålet her",
    },
  ],
};
