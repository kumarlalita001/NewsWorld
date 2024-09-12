export default function NavButton({ icon, label, active = false, onClick }) {
  return (
    <button
      className={`flex flex-col items-center ${
        active ? "text-blue-500" : "text-gray-500"
      }`}
      onClick={onClick}
    >
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </button>
  );
}
