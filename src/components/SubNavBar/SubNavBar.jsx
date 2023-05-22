import { Link } from 'react-router-dom';

export default function SubNavBar({ resort }) {
  
    return (
      <nav>
        {/* <Link to="/orders">Order History</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new">New Order</Link>
      &nbsp;&nbsp; */}
        Full Conditions | &nbsp;&nbsp; 
        <Link to={`/resorts/${resort}/trails`}>Trails</Link>
        &nbsp;&nbsp; |
        &nbsp;&nbsp; 
        <Link to={`/resorts/${resort}/tickets`}>Tickets</Link>
        &nbsp;&nbsp;
        | Dining Options | Rentals
      </nav>
    );
  }
