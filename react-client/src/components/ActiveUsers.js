import React from "react";
import { Box, Grid } from "@chakra-ui/react";

import { UserCard } from "./UserCard";
import { BasicMessage } from "./BasicMessage";

const DEFAULT_AVATAR_MAP = [
  {
    imageName: "orville-peck",
    imageSrc:
      "https://www.thesylvee.com/wp-content/uploads/2021/05/OrvillePeck-Sylvee-Web2-1024x683.jpg",
  },
  {
    imageName: "amy-winehouse",
    imageSrc:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/118631290-363329777999907-5678172498498711945-n-1599855848.jpg?crop=0.825xw:0.825xh;0.0657xw,0.0962xh&resize=640:*",
  },
  {
    imageName: "benee",
    imageSrc:
      "https://fashionjournal.com.au/wp-content/uploads/2019/11/fashion-journal-benee-interview-mob5.jpg",
  },
  {
    imageName: "billie-holiday",
    imageSrc:
      "https://assets.vogue.com/photos/6039702a2b4ed9246fc2c324/master/w_320,c_limit/GettyImages-104476113.jpg",
  },
  {
    imageName: "st-vincent",
    imageSrc:
      "https://mediaproxy.salon.com/width/600/https://media.salon.com/2014/02/st_vincent.jpg",
  },
  {
    imageName: "frank-ocean",
    imageSrc:
      "https://www.rollingstone.com/wp-content/uploads/2019/04/frank-ocean-on-music-business.jpg?resize=1800,1200&w=450",
  },
];

function MapAvatarSrc(users) {
  let defaultImageIdx = DEFAULT_AVATAR_MAP.length - 1;
  return users.map((user) => {
    let userImgSrc;
    if (user && user.profileSrc) {
      userImgSrc = user.profileSrc;
    } else {
      userImgSrc = DEFAULT_AVATAR_MAP[defaultImageIdx].imageSrc;
      defaultImageIdx =
        defaultImageIdx < 1
          ? DEFAULT_AVATAR_MAP.length - 1
          : defaultImageIdx - 1;
    }
    return userImgSrc;
  });
}

export const ActiveUsers = ({ users }) => {
  const avatarMap = MapAvatarSrc(users);
  return (
    <Box>
      {users.length ? (
        <Grid m="4" templateColumns="repeat(4, 1fr)" gap={6}>
          {users.map((user, index) => {
            const imageSrc = avatarMap[index];
            return <UserCard key={index} user={user} imageSrc={imageSrc} />;
          })}
        </Grid>
      ) : (
        <BasicMessage text={"No active users. :("} />
      )}
    </Box>
  );
};
