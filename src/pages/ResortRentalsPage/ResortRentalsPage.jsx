import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import * as rentalitemsAPI from '../../utilities/rentalitems-api'

export default function ResortRentalsPage() {
  let resort  = useParams();
  const [rentalitems, setRentalItems] = useState('');
  useEffect(function() {
    async function getRentalItems() {
      const rentalitemsAll = await rentalitemsAPI.getrIndex(resort.id);
      let rentalArr = [];
      for(let i=0; i < rentalitemsAll.length; i++) {
        if (rentalitemsAll[i].resort === resort.id) {
            rentalArr.push(rentalitemsAll[i])
        }
      };
      let rentalitems = rentalArr.map(rental => <div>{rental.name} | {rental.brand} | ${rental.price} <br></br> <img src={rental.imageurl} alt='' /></div>)
      setRentalItems(rentalitems);
    }
    getRentalItems();
  }, [resort.id]);
  return (
    <>
    <h1>Rental Options</h1> 
    <br />
    {rentalitems}
    </>
  );
}