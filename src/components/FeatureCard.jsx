export default function FeatureCard({ title, description, icon }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow flex items-start space-x-4">
      {icon && (
        <div className="text-blue-500 w-10 h-10 flex items-center justify-center bg-blue-100 dark:bg-blue-900 rounded-full">
          {icon}
        </div>
      )}
      <div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors">
          {description}
        </p>
      </div>
    </div>
  );
}
