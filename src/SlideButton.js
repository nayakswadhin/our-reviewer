const SlideButton = ({onPrevious, onNext}) => {
    return ( 
        <div className="SlideButton">
           <button id="previous" onClick={onPrevious}>Prev</button>
           <button id="next" onClick={onNext}>Next</button>
        </div>
     );
}
 
export default SlideButton;