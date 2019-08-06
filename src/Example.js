import React, {Component} from 'react';
import {
    HighchartsChart, Chart, XAxis, YAxis, Title, Legend, ColumnSeries, SplineSeries,
} from 'react-jsx-highcharts';

class DefinitionsAndStandards extends Component {
    render() {
        return (
            <div className="app">
                <HighchartsChart>
                    <Chart/>

                    <Title>Trial/Nursery Count</Title>

                    <Legend/>

                    <XAxis categories={['2013', '2014', '2015', '2016', '2017']}/>

                    <YAxis>
                        <ColumnSeries name="Trial" data={[3, 2, 1, 3, 4]}/>
                        <ColumnSeries name="Nursery" data={[2, 3, 5, 7, 6]}/>
                        <SplineSeries name="Total" data={[3, 4.5, 4.85, 6.65, 7]}/>

                    </YAxis>
                </HighchartsChart>
            </div>
        );
    };
}

export default DefinitionsAndStandards;