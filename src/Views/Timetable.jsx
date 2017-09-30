import React, {Component} from 'react';
import {Tabs, TabLink, TabContent} from 'react-tabs-redux';
import Login from './Login';
import '../Styles/ProfilePage.css';
import DailyTimeTable from './DailyTimeTable';
import ExamTimeTable from './ExamTimeTable';

const items = [
    {label: 'Daily TimeTable', value :'classTimeTable', icon: 'fa-icon-calendar'},
    {label: 'Exam TimeTable', value :'examTimeTable', icon: 'fa-icon-calendar'}
];

const styles = {
    tabs: {
        width: '100%',
        display: 'inline-block',
        marginRight: '30px',
        verticalAlign: 'top'
    },
    links: {
        margin: 0,
        padding: 0
    },
    tabLink: {
        height: '30px',
        lineHeight: '30px',
        padding: '0 15px',
        cursor: 'pointer',
        borderBottom: '2px solid transparent',
        display: 'inline-block'
    },
    activeLinkStyle: {
        borderBottom: '2px solid #333'
    },
    visibleTabStyle: {
        display: 'inline-block'
    },
    content: {
        padding: '0 15px'
    }
};

class Timetable extends Component{
    render(){
        return(
            <div>
                <Login />
        <Tabs activeLinkStyle={styles.activeLinkStyle} visibleTabStyle={styles.visibleTabStyle} style={styles.tabs}>
            <div style={styles.links}>
                <TabLink to="tab1" default style={styles.tabLink}>Daily Time Table</TabLink>
                <TabLink to="tab2" style={styles.tabLink}>Exam Time Table</TabLink>
            </div>

            <div style={styles.content}>
                <TabContent for="tab1">
                    <h2>Time Table for the current week</h2>
                    <DailyTimeTable />
                </TabContent>
                <TabContent for="tab2">
                    <h2>Exam Time Table for the year 2017</h2>
                    <ExamTimeTable />
                </TabContent>
            </div>
        </Tabs>
            </div>
            
        );
    }
}
export default Timetable;