import { Avatar } from "@mui/material";

const ProfilePic = ({ image }) => {
  return (
    <div className="ProfilePic">
      <Avatar alt="Remy Sharp" src={image} sx={{ width: 150, height: 150 }} />
    </div>
  );
};

export default ProfilePic;
