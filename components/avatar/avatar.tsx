import Image from "next/image";
import Avatar from "@/public/profile.jpeg";

export default function AvatarComponent() {
  return (
    <div className="w-24 h-24 rounded-full bg-backgroundPage border-4 border-textSecondary">
      <Image
        src={Avatar}
        alt="Avatar"
        className="w-full h-full object-cover rounded-full"
      />
    </div>
  );
}
