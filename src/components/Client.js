import React, { useMemo } from "react";
import { createAvatar } from "@dicebear/core";
import { lorelei, personas } from "@dicebear/collection";

const Client = ({ username }) => {
  const avatar = () => {
    return createAvatar(personas, {
      size: 50,
      // ... other options
    });
  };

  //   console.log(avatar().toDataUriSync());

  return (
    <div className="client">
      <img src={avatar().toDataUriSync()} alt="avatar" />
      <span className="userName">{username}</span>
    </div>
  );
};

export default Client;
