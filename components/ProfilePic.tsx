import Image from "next/image";
const ProfilePic = () => {
  return (
    <div className="">
      <Image
        src={"/profilePic2.jpg"}
        alt="profile pic"
        height={150}
        width={150}
        className=" ml-8 rounded-full border-2 border-yellow"
      />
    </div>
  );
};

export default ProfilePic;
