import { Link } from 'react-router-dom';

export default function SubNavBar({ resort, curCon }) {
  
    return (
      <nav>
        {/* <Link to="/orders">Order History</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new">New Order</Link>
      &nbsp;&nbsp; */}
        <Link to={`/resorts/${resort}/conditions`}>Full Conditions</Link>&nbsp;&nbsp; | &nbsp;&nbsp; 
        <Link to={`/resorts/${resort}/trails`}>Trails</Link>
        &nbsp;&nbsp; |
        &nbsp;&nbsp; 
        <Link to={`/resorts/${resort}/tickets`}>Tickets</Link>
        &nbsp;&nbsp;
        | &nbsp;&nbsp;<Link to={`/resorts/${resort}/dining`}>Dining Options</Link>&nbsp;&nbsp; | &nbsp;&nbsp;<Link to={`/resorts/${resort}/rentals`}>Rentals</Link>&nbsp;&nbsp;|&nbsp;&nbsp; <span>Currently: {curCon.condition.text} </span>
      </nav>
    );
  }
