import './ResortInfoPage.css'

export default function ResortInfoPage({resort}) {
return (
<div className='infocontainer'>
<img src={resort.logourl} alt='' className='resortlogo'/>
<h2>About {resort.name}</h2>
<p>
    Located In: {resort.town}, {resort.state}
    <br />< br />
    {resort.description}
</p>
</div>
)}