import ResortPageItem from '../ResortPageItem/ResortPageItem'
import PowePalv1 from '../../PowePalv1.png';

export default function ResortList({resorts}) {
  const resortItems = resorts.map(resort => 
    <ResortPageItem 
    key={resort._id}
    resort={resort}
    />
  );

  return (
        <>
      <h1>All Resorts</h1>
      <img src={PowePalv1} alt='' className='Brand'/>
      {resortItems}
      </>
    );
  }