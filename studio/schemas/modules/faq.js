import { RiQuestionAnswerLine } from "react-icons/ri";

export default {
  title: "Ofte stilte spørsmål",
  name: "faq",
  type: "object",
  icon: RiQuestionAnswerLine,
  fields: [
    {
      title: "Spørsmål og svar",
      name: "faq",
      type: "array",
      of: [{ type: "QnA" }],
      options: {
        editModal: "popover",
      },
    },
  ],
  preview: {
    prepare({}) {
      return {
        title: `Spørsmål og svar`,
      };
    },
  },
};
