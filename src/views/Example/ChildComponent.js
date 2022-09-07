import React from 'react';
import './demo.scss'

class ChildComponent extends React.Component {
    state = {
        showJob: false
    }
    handleShowHide() {
        this.setState({
            showJob: !this.state.showJob
        })
    }

    handleOnClickDelete = (job) => {
        console.log("click", job)
        this.props.deleteJob(job)
    }

    render() {
        let { arrJob } = this.props;
        let { showJob } = this.state;
        let check = showJob === true ? 'showjob = true' : 'showjob = false';
        console.log(check);
        return (
            <>
                {showJob === false ?
                    <div>
                        <button
                            className='btn-show'
                            onClick={() => this.handleShowHide()}
                        >show</button>
                    </div>
                    :
                    <>
                        <div className='job-list'>
                            {
                                arrJob.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} {item.salary}
                                            <></><span onClick={() => this.handleOnClickDelete(item)}>x</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>hide</button>
                        </div>
                    </>
                }
            </>
        )
    }

}

// const ChildComponent = (props) => {
//     let { arrJob } = props;
//     return (
//         <div>
//             {
//                 arrJob.map((item, index) => {
//                     if (item.salary >= 500) {
//                         return (
//                             <div key={item.id}>
//                                 {item.title} {item.salary}
//                             </div>
//                         )
//                     }

//                 })
//             }
//         </div>
//     )
// }
export default ChildComponent;