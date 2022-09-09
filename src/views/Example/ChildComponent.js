import React from "react";

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
        this.props.deleteJob(job)
    }

    render() {
        let { arrJob } = this.props;
        let { showJob } = this.state;
        let check = showJob === true ? 'showjob = true' : 'showjob = false';
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

export default ChildComponent 