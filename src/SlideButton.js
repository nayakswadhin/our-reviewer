import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button } from "@mui/material";

const SlideButton = ({ onPrevious, onNext }) => {
  return (
    <div className="SlideButton">
      <Button variant="text" onClick={onPrevious}>
        <ArrowBackIosNewIcon />
      </Button>
      <Button variant="text" onClick={onNext}>
        <ArrowForwardIosIcon />
      </Button>
    </div>
  );
};

export default SlideButton;
