import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import * as ticketsAPI from '../../utilities/tickets-api';
import './ResortTicketPage.css'

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
      let tickets = ticketsArr.map(ticket => <tr><td>{ticket.name}</td> <td>${ticket.price}</td></tr>)
      setTickets(tickets);
    }
    getTickets();
  }, [resort.id]);
  return (
    <>
    <h1 className='Tixh1'>Tickets</h1> 
    <br />
    <div className='TixPgitems'>
    <table className="Tixtable" >
    <thead>
      <tr>
        <th>Ticket Type</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
    {tickets}
    </tbody>
    </table>
    </div>
    </>
  );
}