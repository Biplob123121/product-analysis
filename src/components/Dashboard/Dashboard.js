import React from 'react';
import { Bar, BarChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import useData from '../../hooks/useData';
import './Dashboard.css';

const Dashboard = () => {
    const [data] =useData();
    //console.log(data);
    return (
    <section className='chart-container'>
        <div>
            <h3 className='chart-info'>Investment in Last six months:</h3>
            <BarChart width={300} height={400} data={data}>
                <Bar dataKey="investment" fill="#8884d8" />
                <XAxis dataKey={'month'}></XAxis>
                <Tooltip></Tooltip>
                <YAxis></YAxis>
            </BarChart>
        </div>
        <div>
            <h3 className='chart-info'>Sell in Last six months :</h3>
            <PieChart width={300} height={400}>
          <Pie
            dataKey="sell"
            startAngle={360}
            endAngle={0}
            data={data}
            cx="60%"
            cy="50%"
            outerRadius={120}
            fill="#8884d8"
            label
          />
        </PieChart>
        </div>
    </section>
    );
};

export default Dashboard;