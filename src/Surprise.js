import { Button } from "@mui/material";

const Surprise = ({ onSurprise }) => {
  return (
    <div className="Surprise">
      <Button variant="contained" onClick={onSurprise}>
        Surprise Me
      </Button>
    </div>
  );
};

export default Surprise;
