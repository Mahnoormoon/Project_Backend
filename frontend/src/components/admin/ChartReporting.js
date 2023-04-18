import React from 'react'
import UserChart from './UserChart.js';
import ToDoChart from './ToDoChart.js';
import MusicChart from './MusicChart.js';
import StudyChart from './StudyChart.js';
export const ChartReporting = () => {
    return (
        <section style={{ backgroundColor: '#c3f1c38e' }}>
            <UserChart />
            <ToDoChart />
            <MusicChart />
            <StudyChart />
        </section>
    )
}
export default ChartReporting