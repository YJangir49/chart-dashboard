export default function CustomButton({ name }) {
  return (
    <div className="relative text-center">
      <img
        height={50}
        width={150}
        src="/images/red-capsule-button.png"
        alt="capsule-button"
      />
      <p className="absolute left-[50%] top-[35%] transform -translate-x-1/2 -translate-y-1/2 text-white font-semibold drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-gray-800">
        {name}
      </p>
    </div>
  );
}
