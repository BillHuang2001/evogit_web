export default function FeatureCard({ title, description, icon }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow flex items-start space-x-4 dark:bg-gray-800 dark:shadow-none dark:hover:shadow-md">
      {icon && (
        <div className="text-blue-500 w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full dark:bg-blue-900">
          {icon}
        </div>
      )}
      <div>
        <h3 className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors dark:text-gray-200 dark:group-hover:text-gray-100">
          {title}
        </h3>
        <p className="mt-2 text-gray-600 group-hover:text-gray-800 transition-colors dark:text-gray-400 dark:group-hover:text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
}
