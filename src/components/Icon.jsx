import { React } from "react";
import { CodeBracketSquareIcon, ChatBubbleLeftRightIcon, BookOpenIcon, DocumentTextIcon, ChartBarIcon } from "@heroicons/react/24/outline";

const icons = {
  "code-bracket-square": CodeBracketSquareIcon,
  "chat-bubble-left-right": ChatBubbleLeftRightIcon,
  "book-open": BookOpenIcon,
  "document-text": DocumentTextIcon,
  "chart-bar": ChartBarIcon,
};

export default function Icon({ name, className }) {
  const IconComponent = icons[name];
  if (!IconComponent) return null;
  return <IconComponent className={className} />;
}
