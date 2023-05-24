import { Link } from 'react-router-dom';
import './ResortTrailItem.css'

export default function ResortTrailItem({resort, trail}) {
  return (
      <>
    <div className='traillinkout'><Link to={`/resorts/${resort._id}/trails/${trail._id}`} className='traillink'>{trail.name}</Link></div>
    </>
  );
}