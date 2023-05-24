import { Link } from 'react-router-dom';
// import ResortHomePage from '../ResortHomePage/ResortHomePage';
import './ResortPageItem.css'

export default function ResortPageItem({resort}) {
  // {<ResortHomePage resortID={resort.id}/>}
  return (
      <>
    <div><Link to={`/resorts/${resort._id}`} className='resorthomelink'>{resort.name}</Link></div>
    </>
  );
}