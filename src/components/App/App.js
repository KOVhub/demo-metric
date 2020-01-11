import React from 'react';
import { connect } from 'react-redux';
import { ToastContainer, Slide } from "react-toastify";

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
        <ToastContainer
          transition={Slide}
          position="top-right"
          autoClose={6000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
      </React.Fragment>
    );
}

const mapStateToProps = ({ user: {user} }) => {
  return { user };
};

export default connect(mapStateToProps)(App);