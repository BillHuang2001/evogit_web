export default function FeatureCard({ title, description, icon: Icon }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center">
        {Icon && <Icon className="h-6 w-6 text-blue-500 mr-4" />}
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}
