import React from 'react'
import { PieChart } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'

class PieChartWithCenteredLabels extends React.PureComponent {

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

        const Labels = ({ slices, height, width }) => {
            return slices.map((slice, index) => {
                const { labelCentroid, pieCentroid, data } = slice;
                return (
                    <Text
                        key={index}
                        x={pieCentroid[ 0 ]}
                        y={pieCentroid[ 1 ]}
                        fill={'white'}
                        textAnchor={'middle'}
                        alignmentBaseline={'middle'}
                        fontSize={13}
                        stroke={'black'}
                        strokeWidth={0.2}
                    >
                        {`${data.value}%`}
                    </Text>
                )
            })
        }

        return (
            <PieChart
                style={{ height: 250, width: 250 }}
                valueAccessor={({ item }) => item.value}
                data={data}
                spacing={0}
                outerRadius={'90%'}
                innerRadius={'47.14%'}
                padAngle={0}
            >
                <Labels/>
            </PieChart>
        )
    }

}

export default PieChartWithCenteredLabels