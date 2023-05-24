import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import * as trailsAPI from '../../utilities/trails-api'
import TrailDetailMap from '../../components/TrailDetailMap/TrailDetailMap'
import './ResortTrailDetailPage.css'

export default function ResortTrailItem({resort}) {
  let trailId  = useParams();
  const [trail, setTrail] = useState('');
  useEffect(function() {
    async function getTrailDetail() {
      const trail = await trailsAPI.getTrail(resort.id, trailId.tId);
      setTrail(trail);
    }
    getTrailDetail();
  }, [resort.id, trailId.tId]);

  return (
      <div className='traildetailpgdiv'>
      <h1 className='trailnameh1'>{trail.name}</h1>
      {trail? <TrailDetailMap trail={trail}/> : <h3>Loading...</h3>}
      <div className='traildetails'>
      <span className='label'>Difficulty:</span> {trail.difficulty}
      <br />
      <br />
      <span className='label'>Description:</span>
      <br />
      {trail.description}
      <br />
      <br />
      <span className='label'>Hazards:</span>
      <br />
      {trail.hazards}
      </div>
    </div>
  );
}