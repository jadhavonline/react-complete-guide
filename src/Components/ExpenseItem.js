import './ExpenseItem.css'

function ExpenseItem()
{
const ExpenseDate=new Date(2022,12,12);
const ExpenseItem='Light Bill'
const ExpenseAmount=460

    return(
        <div className='expense-item'>
            <div><h2>{ExpenseDate.toISOString()}</h2></div>
            <div className='expense-item__description'><h2>{ExpenseItem}</h2>
            <div className='expense-item__price'><h3>{ExpenseAmount}</h3></div>
            </div>
        </div>
    )
    
};

export default ExpenseItem;