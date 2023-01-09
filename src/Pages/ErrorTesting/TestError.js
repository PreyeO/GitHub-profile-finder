
import CloseIcon from '../../Components/Icons/CloseIcon'




const TestError = () => {

  
  throw new Error("error!!")
  
  return (
    <div>
  <CloseIcon />  
    </div>
  )
}

export default TestError
