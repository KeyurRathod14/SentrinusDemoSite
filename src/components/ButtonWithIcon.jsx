// eslint-disable-next-line no-unused-vars
export default function ButtonWithIcon({ icon: Icon, text, className = "" }) {
  return (
    <button
      className={`flex items-center justify-center gap-2 text-xs font-medium rounded-md border px-3 py-1 whitespace-nowrap ${className} cursor-pointer`}
    >
      <Icon size={15} />
      {text}
    </button>
  );
}
