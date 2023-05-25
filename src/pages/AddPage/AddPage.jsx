import AddResortForm from '../../components/AddResortForm/AddResortForm'
import './AddPage.css'

export default function AddPage({setResorts, user}) {
    
    if (user.isAdmin === true) {
    return <div className='AddPagediv'>
        <div className='APtitle'>Add Page</div>
        <AddResortForm setResorts={setResorts} />
    </div>
    }
    else { return <div className='AddPagediv'>
        <div className='APtitle'>Add Page</div>
        <h2>Unauthorized Access...please head back!</h2>   
    </div>
    }
}