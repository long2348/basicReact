import React from "react"
import AddComponent from "./AddComponent"
import ChildComponent from "./ChildComponent"
import RandomColor from "../../components/RandomColor"

class MyFirstComponent extends React.Component {
    state = {
        arrJob: [
            { id: 'job1', title: 'developer', salary: '500' },
            { id: 'job2', title: 'tester', salary: '400' },
            { id: 'job3', title: 'project manager', salary: '4000' },
        ]
    }

    addNewJob = (job) => {
        console.log("im come form", job)
        this.setState({
            arrJob: [...this.state.arrJob, job]
        })
    }

    deleteJob = (job) => {
        let currentJob = this.state.arrJob
        currentJob = currentJob.filter(item => item.id !== job.id)
        this.setState({
            arrJob: currentJob
        })
    }

    componentDidMount() {
        console.log('run component did mount')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('prev state', prevState, 'current state', this.state)
    }

    render() {
        return (
            <>
                <div>
                    <AddComponent
                        addNewJob={this.addNewJob}
                    />
                </div>

                <div>
                    <ChildComponent
                        arrJob={this.state.arrJob}
                        deleteJob={this.deleteJob}
                    />
                </div>

            </>
        )

    }

}
export default RandomColor(MyFirstComponent);