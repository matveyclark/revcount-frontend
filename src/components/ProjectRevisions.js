import React, { Component } from 'react'
import Revision from './Revision'
import plus from '../images/plus-icon.svg'
import { connect } from 'react-redux'
import RevisionInfo from './RevisionInfo'

class ProjectRevisions extends Component {


    renderRevisions = () => {
        return this.props.revisions.map(revision => <Revision selectRevision={this.props.selectRevision} revision={revision} /> )
    }

    render() {
        return (
            <div className="revision-list">
                <div className="revision--list__header">
                    <h4 className="project--select" >{this.props.selectedProject ? <h4 className="highlight" >{this.props.selectedProject.name}</h4> : "Please select a project"}</h4>
                    <div onClick={this.props.showingModal} className="add--revision">
                        <img className="add--revision__icon" src={plus} alt="plus icon"/>
                    </div>
                </div>
                <div className="revisions--header">
                    <h4 className="revision--header__title">Description</h4>
                    <h4 className="revision--header__title">Created at</h4>
                    <h4 className="revision--header__title">Updated on</h4>
                    <h4 className="revision--header__title">Status</h4>
                </div>
                {this.props.selectedRevision ? <RevisionInfo selectedRevision={this.props.selectedRevision} /> : this.renderRevisions()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedRevision: state.revisionReducer.selectedRevision
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
