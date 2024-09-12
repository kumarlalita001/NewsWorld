export default function CategoryButton({
  label,
  setSearchCategory,
  setIsLoading,
  active = false,
}) {
  return (
    <button
      onClick={() => {
        setIsLoading(true);
        setSearchCategory(label);
      }}
      className={`px-4 py-2 rounded-md text-sm ${
        active ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
      }`}
    >
      {label}
    </button>
  );
}
