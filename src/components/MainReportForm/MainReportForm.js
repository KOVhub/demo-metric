import React from 'react';
import { connect } from 'react-redux';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

import FileForm from '../FileForm';
import MetricsOptionsForm from '../MetricsOptionsForm';

const MainReportForm = ({ files }) => {
  return (
    <DndProvider backend={Backend}>
      <section className='column-container'>
        <FileForm />
      </section>
      {
        files &&
        <section className='column-container'>
          <MetricsOptionsForm/>
        </section>
      }
    </DndProvider>
  )
}

const mapStateToProps = ({ filesSended: { filesSended } }) => {
  return { files: filesSended };
};

export default connect(mapStateToProps)(MainReportForm);