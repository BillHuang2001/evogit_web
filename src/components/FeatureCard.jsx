export default function FeatureCard({ title, description, icon }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow flex items-start">
      {icon && (
        <div className="flex-shrink-0 text-indigo-500 mr-4">
          {icon}
        </div>
      )}
      <div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
}
