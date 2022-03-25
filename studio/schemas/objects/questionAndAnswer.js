import { RiQuestionAnswerLine } from "react-icons/ri";

export default {
  title: "Spørsmål og svar",
  name: "QnA",
  type: "object",
  icon: RiQuestionAnswerLine,
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
