import { Link } from 'react-router-dom';
// import ResortHomePage from '../ResortHomePage/ResortHomePage';

export default function ResortPageItem({resort}) {
  // {<ResortHomePage resortID={resort.id}/>}
  return (
      <>
    <li><Link to={`/resorts/${resort._id}`}>{resort.name}</Link></li>
    </>
  );
}