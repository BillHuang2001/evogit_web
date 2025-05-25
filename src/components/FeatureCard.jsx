export default function FeatureCard({ title, description }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}
