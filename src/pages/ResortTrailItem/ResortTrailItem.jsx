import { Link } from 'react-router-dom';

export default function ResortTrailItem({resort, trail}) {
  return (
      <>
    <li><Link to={`/resorts/${resort.id}/trails/${trail._id}`}>{trail.name}</Link></li>
    </>
  );
}