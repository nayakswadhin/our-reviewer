import ProfilePic from "./ProfilePic.js";
import Name from "./Name";
import Intro from "./Intro";
import SlideButton from "./SlideButton";
import Surprise from "./Surprise.js";
import { useState } from "react";
import img1 from './images/Aman dhattarwal.jpeg'
import img2 from './images/Swadhin2.jpg'
import img3 from './images/AniketBhaiya.jpg'
import img4 from './images/GourabBhaiya.jpg'
import img5 from './images/Jyoti Prakash sethy Bhaiya.jpg'
import img6 from './images/AnubhavBhaiya.jpg'

const reviewers = [
  {
    name: "Aman Dhattarwal",
    avator: img1,
    designation: "LUCKIEST PERSON",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    name: "Swadhin Nayak",
    avator: img2,
    designation: "WEB DEVELOPER",
    review: "Just say anything, George, say what ever's natural, the first thing that comes to your mind. Take that you mutated son-of-a-bitch. My pine, why you. You space bastard, you killed a pine. You do? Yeah, it's 8:00. Hey, McFly, I thought I told you never to come in here. Well it's gonna cost you. How much money you got on you?"
  },
  {
    name: "Aniket Pal",
    avator: img3,
    designation: "OFFICIAL FATHER OF WEBWIZ",
    review: "That is the true genius of America - a faith in simple dreams,, an insistence on small miracles. We meet at one of those defining moments - a moment when our nation is at war, our economy is in turmoil, and the American promise has been threatened once more. We did not go by choice, we went because of necessity."
  },
  {
    name: "Gourab Nanda",
    avator: img4,
    designation: "UNOFFICIAL FATHER OF WEBWIZ",
    review: "Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley jícama salsify."
  },
  {
    name: "Jyoti Prakash Sethy",
    avator: img5,
    designation: "OMNIPRESENT",
    review: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium."
  },
  {
    name: "Anubhab Patra",
    avator: img6,
    designation: "SUPPORTING MENTOR",
    review: "The first mate and his Skipper too will do their very best to make the others comfortable in their tropic island nest. Michael Knight a young loner on a crusade to champion the cause of the innocent. The helpless. The powerless in a world of criminals who operate above the law. Here he comes Here comes Speed Racer. He's a demon on wheels."
  }
]

const Card = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const reviewer = reviewers[activeIndex];

    const handlePrevious = () => {
      if(activeIndex !== 0){
          setActiveIndex(activeIndex-1)
      }
      console.log("After previous====>",activeIndex)
  }
  const handleNext = () => {
      if(activeIndex !== reviewers.length-1){
          setActiveIndex(activeIndex+1)
      }
      console.log("After Next====>",activeIndex)
  }

    return ( 
        <div className="card">
            <ProfilePic image={reviewer.avator} />
            <Name name={reviewer.name} designation={reviewer.designation} />
            <Intro review={reviewer.review} />
            <SlideButton onPrevious={handlePrevious} onNext={handleNext} />
            <Surprise />
        </div>
    );
}
 
export default Card;