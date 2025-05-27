import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import {
  CodeBracketSquareIcon,
  ChatBubbleLeftRightIcon,
  BookOpenIcon,
  DocumentTextIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

export default function CommunityLink({ href, label, bgColor, hoverColor, icon }) {
  const icons = {
    "code-bracket-square": CodeBracketSquareIcon,
    "chat-bubble-left-right": ChatBubbleLeftRightIcon,
    "book-open": BookOpenIcon,
    "document-text": DocumentTextIcon,
    "chart-bar": ChartBarIcon,
  };

  const IconComponent = icons[icon];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-3 px-6 py-3 ${bgColor} text-white rounded-md shadow-md ${hoverColor} transition-colors duration-200 text-lg font-medium`}
    >
      <IconComponent className="h-6 w-6" />
      {label}
      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-auto opacity-80" />
    </a>
  );
}
