import { Link } from 'react-router-dom';

export default function ResortPageItem({resort}, {key}) {
  
  return (
      <>
    <li><Link to="/resort/:id">Resort</Link></li>
    </>
  );
}