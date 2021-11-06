import React from "react";
import { useAppSelector } from "../app/hooks";

interface Props {}

const Profile: React.FC<Props> = () => {
  const { age, email, name } = useAppSelector((state) => state.user.value);

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default Profile;
