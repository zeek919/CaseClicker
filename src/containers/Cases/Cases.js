import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../../components/Navbar/Navbar';
import navbarHeaders from '../../constants/navbarHeaders';
import CaseBoxes from '../../components/CaseBoxes/CaseBoxes';
import style from './Cases.scss';

const Cases = ({ casesData, userCasesInfo }) => (
    <>
        <Navbar navHeadersArray={navbarHeaders} />
        <div className={style.wrapper}>
            <div className={style.insideWrapper}>
                <div className={style.header}>Cases</div>
                <div className={style.caseWrapper}>
                    <CaseBoxes
                        casesData={casesData}
                        userCasesInfo={userCasesInfo}
                    />
                </div>
            </div>
        </div>
    </>
);

const mapStateToProps = (state) => ({
    casesData: state.casesReducer.cases,
    userCasesInfo: state.userDataReducer.cases,
});

export default connect(mapStateToProps, {})(Cases);
