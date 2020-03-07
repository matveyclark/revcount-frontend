import React, { Component } from '../../../node_modules/react'
import { connect } from '../../../node_modules/react-redux'
import RevisionInfo from '../revision/RevisionInfo'
import RevisionsHeader from '../revision/RevisionsHeader'
import RevisionItems from '../revision/RevisionItems'
import API from '../../API'

class ProjectRevisions extends Component {

    completeRevision = () => {
        const { history, selectedRevision, clearRevision } = this.props
        return API.markAsComplete(selectedRevision.id)
        .then(data => {
            if(data.error) throw Error(data.error)
            clearRevision()
            history.push('/dashboard')
        }).catch(error => alert(error))
    }

    render() {
        const { selectedProject, showingModal, username, selectRevision, revision, revisions, selectedRevision } = this.props
        return (
            <div className="revision-list">
                <div className="revision--list__header">
                    <h4 className="project--select" >{selectedProject 
                    ? <h4 className="highlight" >{selectedProject.name}</h4> 
                    : "Please select a project"}</h4>
                    {selectedRevision 
                    && <button 
                    onClick={this.completeRevision} 
                    className="complete--revision--btn">Mark as complete</button>}
                </div>
                <RevisionsHeader />
                {selectedRevision 
                ? <RevisionInfo 
                username={username} 
                revision={revision}
                selectedRevision={selectedRevision} /> 
                : <RevisionItems
                revisions={revisions}
                selectedProject={selectedProject}
                selectRevision={selectRevision}
                showingModal={showingModal} /> }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedRevision: state.revisionReducer.selectedRevision,
        username: state.userReducer.username,
        revision: state.revisionReducer.selectedRevision
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectRevision: revision => {
            dispatch({ type: 'SELECT_REVISION', payload: revision })
        },
        clearRevision: () => {
            dispatch({ type: 'CLEAR_REVISION' })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectRevisions)
