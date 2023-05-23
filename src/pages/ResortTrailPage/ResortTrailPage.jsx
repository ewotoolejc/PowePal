import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import * as trailsAPI from '../../utilities/trails-api'
import ResortTrailItem from '../ResortTrailItem/ResortTrailItem'
import MapforTrails from '../../components/MapforTrails/MapforTrails'

export default function ResortTrailPage({resort}) {
  const [trails, setTrails] = useState('');
  useEffect(function() {
    async function getTrails() {
      const trailsAll = await trailsAPI.getTrIndex(resort._id);
      let trailsArr = [];
      for(let i=0; i < trailsAll.length; i++) {
        if (trailsAll[i].resort === resort._id) {
            trailsArr.push(trailsAll[i])
        }
      };
      let trails = trailsArr.map(trail => <ResortTrailItem resort={resort} trail={trail} key={trail._id} />)
      setTrails(trails);
    }
    getTrails();
  }, [resort]);
  return (
    <>
    <h1>Trails</h1> 
    <MapforTrails resort={resort}/>
    <br />
    { trails.length ? <div>{trails}</div>
    :
    <h2>
        No Trails...yet!
    </h2>
    }
    </>
  );
}