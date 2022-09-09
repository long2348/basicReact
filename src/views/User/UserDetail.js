import React from "react";
import { useParams } from 'react-router-dom'

function UserDetail() {
    let { userName } = useParams();
    return (
        <div>
            Hello User Detail is: {userName}
            {console.log(useParams())}
        </div>
    )
}

// class UserDetail extends React.Component {
//     let {userName} = useParams();
//     render() {
//         return (
//             <>
//                 <div>
//                     <h4>Hello World User Detail</h4>
//                 </div>
//             </>
//         )
//     }
// }

export default UserDetail;