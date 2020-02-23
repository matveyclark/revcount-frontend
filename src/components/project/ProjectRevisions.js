import React, { Component } from '../../../node_modules/react'
import Revision from '../revision/Revision'
import plus from '../../images/plus-icon.svg'
import { connect } from '../../../node_modules/react-redux'
import RevisionInfo from '../revision/RevisionInfo'
import RevisionsHeader from '../revision/RevisionsHeader'

class ProjectRevisions extends Component {


    renderRevisions = () => {
        return this.props.revisions.map(revision => <Revision selectRevision={this.props.selectRevision} revision={revision} /> )
    }

    render() {
        const { selectedProject, showingModal, username, selectedRevision, revision } = this.props
        return (
            <div className="revision-list">
                <div className="revision--list__header">
                    <h4 className="project--select" >{selectedProject 
                    ? <h4 className="highlight" >{selectedProject.name}</h4> 
                    : "Please select a project"}</h4>
                    <div onClick={showingModal} className="add--revision">
                        <img className="add--revision__icon" src={plus} alt="plus icon"/>
                    </div>
                </div>
                <RevisionsHeader />
                {selectedRevision 
                ? <RevisionInfo username={username} 
                revision={revision} 
                selectedRevision={selectedRevision} /> 
                : this.renderRevisions()}
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectRevisions)
