import ResortPageItem from '../ResortPageItem/ResortPageItem'

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
      {resortItems}
      </>
    );
  }