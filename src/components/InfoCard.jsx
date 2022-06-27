import React from 'react'
const isIncome = Math.round(Math.random())
const InfoCard = () => {
  return (
    <div style={{textAlign:"center",padding:"0 10%"}}>
        Try saying:<br />
     Add {isIncome ? 'Income ' : 'Expense'} 
     for {isIncome ? '₦100 ' : '₦150 '}  
     in category {isIncome ? 'Business ' : 'House '}   
     for  {isIncome ? 'Monday ' : 'Teusady '}   
     </div>
  )
}

export default InfoCard