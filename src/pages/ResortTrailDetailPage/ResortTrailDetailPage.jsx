import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import * as trailsAPI from '../../utilities/trails-api'

export default function ResortTrailItem({resort}) {
  let trailId  = useParams();
  const [trail, setTrail] = useState('');
  useEffect(function() {
    async function getTrailDetail() {
      const trail = await trailsAPI.getTrail(resort.id, trailId.tId);
      setTrail(trail);
    }
    getTrailDetail();
  }, []);


  return (
      <>
      <h1>{trail.name}</h1>
      <div>
      Difficulty: {trail.difficulty}
      <br />
      Description: {trail.description}
      <br />
      Hazards: {trail.hazards}
      </div>
    </>
  );
}