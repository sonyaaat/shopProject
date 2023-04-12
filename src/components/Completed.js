import { Link } from 'react-router-dom';
import sprite from '../images/sprite.svg';
const Completed = () => {
  return (
   <div className='container'>
     <div className='confirmed__wrapper'>
      <svg className="confirmed__svg">
        <use href={`${sprite}#icon-check`}></use>
      </svg>
      <h1 className='confirmed__header'>Thank you!</h1>
      <p>Your order is confirmed</p>
      <Link to="/portfolio">
      <button className='confirmed__back'>Back to items</button></Link>
    </div>
   </div>
  );
};
export default Completed;