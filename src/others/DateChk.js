
import Moment from 'react-moment';
import 'moment-timezone';

 function  DateChk () {
  
                const check = new Date('1976-04-19T12:59-0500');
           return (
                <>
                <Moment format="YYYY/MM/DD" >{check}</Moment>
               </>
        )
    }

    export default DateChk;
