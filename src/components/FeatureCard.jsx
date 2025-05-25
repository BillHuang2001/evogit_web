export default function FeatureCard({ title, description, icon }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow flex items-start space-x-4 group">
      {icon && (
        <div className="text-blue-500 flex-shrink-0 group-hover:text-blue-700 transition-colors">
          {icon}
        </div>
      )}
      <div>
        <h3 className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-gray-600 group-hover:text-gray-800 transition-colors">
          {description}
        </p>
      </div>
    </div>
  );
}
