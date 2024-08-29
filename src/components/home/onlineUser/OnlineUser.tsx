import Image from "next/image";
import Avatar1 from "@/assets/png/man_1.png";
import Avatar2 from "@/assets/png/man_2.png";
import Avatar3 from "@/assets/png/boy.png";
import Avatar4 from "@/assets/png/man.png";

const avatars = [
  {
    src: Avatar4,
    name: "Jefril",
    location: "Sahid",
  },
  {
    src: Avatar1,
    name: "Zasami",
    location: "BSD",
  },
  {
    src: Avatar2,
    name: "Sam",
    location: "Sahid",
  },
  {
    src: Avatar3,
    name: "Aldo",
    location: "Sahid",
  },
  {
    src: Avatar4,
    name: "Erwin",
    location: "Sahid",
  },
  {
    src: Avatar1,
    name: "Arye",
    location: "BSD",
  },
  {
    src: Avatar2,
    name: "Risya",
    location: "BSD",
  },
  {
    src: Avatar3,
    name: "Nesha",
    location: "WFH",
  },
];

const OnlineUser = () => {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="font-bold text-[20px]">Online User</h1>
      <div className="flex items-center -space-x-3 smartphone:-space-x-1 p-4 smartphone:p-2 bg-[white] shadow-lg rounded-lg shadow-xl shadow-black h-auto smartphone:w-fit smartphone:min-w-full">
        {avatars.map((avatar, index) => (
          <div key={index} className="flex flex-col gap-1">
            <div
              className={`relative rounded-full w-16 h-16 smartphone:w-[40px] smartphone:h-[40px] flex justify-center items-center text-white`}
            >
              <Image
                src={avatar.src}
                alt={avatar.name}
                layout="fill"
                className="rounded-full object-cover"
              />
            </div>
            <p className="text-black text-xs font-bold text-center">
              {avatar.name}
            </p>
            <p className="text-gray-500 text-xs text-center">
              {avatar.location}
            </p>
          </div>
        ))}
        <div className="flex flex-col gap-1">
          <div
            className={`relative bg-main rounded-full w-16 h-16 smartphone:w-[40px] smartphone:h-[40px] flex flex-col justify-center text-[white] -mt-[30px]`}
          >
            <p className="text-xs font-bold text-center">10</p>
            <p className="text-xs text-center">more</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineUser;
