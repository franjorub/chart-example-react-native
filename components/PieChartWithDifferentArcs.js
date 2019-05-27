import React from 'react'
import { PieChart } from 'react-native-svg-charts'
import Labels from './Labels';
class PieChartWithDifferentArcs extends React.PureComponent {

    


    render() {

        const data = [
            {
                key: 1,
                value: 20,
                svg: { fill: '#4885ff' },
                
            },
            {
                key: 2,
                value: 60,
                svg: { fill: '#6d62e5' }
            },
            {
                key: 3,
                value: 4,
                svg: { fill: '#1fa764' }
            },
            {
                key: 4,
                value: 16,
                svg: { fill: '#ff7d39' },
                arc: { outerRadius: '110%', cornerRadius: 0,  }
            },
            
        ]


        return (
            <PieChart
                style={{ height: 250, width: 250 }}
                outerRadius={'90%'}
                innerRadius={'47.14%'}
                data={data}
                padAngle={0}
            />
        )
    }

}

export default PieChartWithDifferentArcs