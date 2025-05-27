export default function FeatureCard({ title, description, icon, link }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col items-start space-y-4 group">
      {icon && (
        <div className="text-blue-500 dark:text-blue-400 w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900 rounded-full">
          {icon}
        </div>
      )}
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors dark:text-gray-200 dark:group-hover:text-gray-100">
          {title}
        </h3>
        <p className="mt-3 text-gray-600 group-hover:text-gray-800 transition-colors dark:text-gray-400 dark:group-hover:text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
      {link && (
        <a
          href={link}
          className="mt-auto inline-block text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-sm font-medium"
        >
          Learn More →
        </a>
      )}
    </div>
  );
}
