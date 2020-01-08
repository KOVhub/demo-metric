import React from 'react';
import { connect } from 'react-redux';

import AppHeader from '../AppHeader';
import MainReportForm from '../MainReportForm';
import AppDescription from '../AppDescription';

import './app.css';

const App = ({ user }) => {
    return (
      <React.Fragment>
        <AppHeader />
        <main className='main-wrapper'>
          <div className='main-container'>
            {user && <MainReportForm/>}
            <section className='column-container'>
              <AppDescription />
            </section>
          </div>
        </main>
      </React.Fragment>
    );
}

const mapStateToProps = ({ user: {user} }) => {
  return { user };
};

export default connect(mapStateToProps)(App);