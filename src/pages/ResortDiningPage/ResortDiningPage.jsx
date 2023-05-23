import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import * as fooditemsAPI from '../../utilities/fooditems-api'

export default function ResortTicketPage() {
  let resort  = useParams();
  const [fooditems, setFoodItems] = useState('');
  useEffect(function() {
    async function getFoodItems() {
      const fooditemsAll = await fooditemsAPI.getfIndex(resort.id);
      let foodArr = [];
      for(let i=0; i < fooditemsAll.length; i++) {
        if (fooditemsAll[i].resort === resort.id) {
            foodArr.push(fooditemsAll[i])
        }
      };
      let fooditems = foodArr.map(food => <div>{food.name} | ${food.price} | {food.description}</div>)
      setFoodItems(fooditems);
    }
    getFoodItems();
  }, [resort.id]);
  return (
    <>
    <h1>Dining</h1> 
    <br />
    {fooditems}
    </>
  );
}