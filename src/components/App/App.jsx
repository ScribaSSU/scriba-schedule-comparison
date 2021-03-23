import React from 'react';
import { connect } from 'react-redux';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Loader } from '../Loader/Loader';
import Main from '../Main/Main';
import Modal from '../Modal/Modal';

const App = ({ dataDepartments, isModalOpen }) => {
  if (dataDepartments.length === 0) {
    return <Loader />
  }

  return (
    <>
      <Header />
      <Main />
      <Footer />
      {
        isModalOpen ? <Modal /> : null
      }
    </>
  );
}

const mapStateToProps = (state) => ({
  dataDepartments: state.dataDepartments,
  isModalOpen: state.isModalOpen,
});

export default connect(mapStateToProps)(App);
