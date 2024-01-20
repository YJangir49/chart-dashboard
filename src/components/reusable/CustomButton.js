export default function CustomButton({ name, status = 0 }) {
  return (
    <div className="relative text-center">
      <img
        height={40}
        width={180}
        src={`/images/${status ? "green" : "red"}-capsule-button.png`}
        alt="capsule-button"
      />
      <p
        className={`absolute left-[50%] top-[47%] transform -translate-x-1/2 -translate-y-1/2 text-white font-medium drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-gray-800`}
      >
        {name}
      </p>
    </div>
  );
}
