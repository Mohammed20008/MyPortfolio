import Image from "next/image";

const Imagee = () => {
  return (
    <div className="relative h-40 w-40">
      <Image src="/profile.jpg" alt="logo" fill />
    </div>
  );
};
export default Imagee;
