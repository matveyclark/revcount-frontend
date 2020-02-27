import React from 'react'
import Revision from '../revision/Revision'

export default class RevisionItems extends React.Component {

    renderRevisions = () => {
        const { revisions, selectRevision } = this.props
        return revisions.map(revision => <Revision 
        selectRevision={selectRevision} 
        revision={revision} /> )
    }

    render() {
        const { showingModal, selectedProject } = this.props
        return (
            <div>
                {this.renderRevisions()}
                {selectedProject 
                && <div onClick={showingModal} className="add--revision">
                    <p className="add--revision__icon">Add Revision</p>
                </div>}
            </div>
        )
    }
}