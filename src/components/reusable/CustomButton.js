export default function CustomButton() {
  return (
    <div className="relative text-center">
      <img
        height={50}
        width={150}
        src="/images/red-capsule-button.png"
        alt="capsule-button"
      />
      <p className="absolute top-3 left-16 text-white font-semibold drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-gray-800">
        TP
      </p>
    </div>
  );
}
