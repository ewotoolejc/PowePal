import ResortPageItem from '../ResortPageItem/ResortPageItem'
import './ResortList.css'

export default function ResortList({resorts}) {
  const resortItems = resorts.map(resort => 
    <ResortPageItem 
    key={resort._id}
    resort={resort}
    className='resortpgitem'
    />
  );

  return (
        <div className='ResortListpg'>
      <div className='allresortstxt'>All Resorts</div>
      {resortItems}
      </div>
    );
  }