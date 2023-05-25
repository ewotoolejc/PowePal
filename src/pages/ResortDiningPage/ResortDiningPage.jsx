import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import * as fooditemsAPI from '../../utilities/fooditems-api'
import './ResortDiningPage.css'

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
      let fooditems = foodArr.map(food => <div className='fooditem'>{food.name} | ${food.price} | {food.description}</div>)
      setFoodItems(fooditems);
    }
    getFoodItems();
  }, [resort.id]);
  return (
    <>
    <h1 className='Diningh1'>Dining</h1> 
    <br />
    <div className='fooditemscontainer'>
    {fooditems.length ? {fooditems} : 'No food avaialble at this Resort!'}
    </div>
    </>
  );
}