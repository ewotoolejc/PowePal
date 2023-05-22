import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import * as ticketsAPI from '../../utilities/tickets-api'

export default function ResortTicketPage() {
  let resort  = useParams();
  const [tickets, setTickets] = useState('');
  useEffect(function() {
    async function getTickets() {
      const ticketsAll = await ticketsAPI.getTIndex(resort.id);
      let ticketsArr = [];
      for(let i=0; i < ticketsAll.length; i++) {
        if (ticketsAll[i].resort === resort.id) {
            ticketsArr.push(ticketsAll[i])
        }
      };
      let tickets = ticketsArr.map(ticket => `${ticket.name} | $${ticket.price}`)
      setTickets(tickets);
    }
    getTickets();
  }, []);
  return (
    <>
    <h1>Tickets</h1> 
    <br />
    {tickets}
    </>
  );
}