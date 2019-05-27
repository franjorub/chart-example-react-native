import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-svg-charts'
// import { Text } from 'react-native-svg'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        width: '94%', 
        height: 313, 
        shadowColor: 'rgba(202, 202, 202, 0.42)',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingLeft: 10,
        paddingRight: 10
    }
})

class PieChartWithCenteredLabels extends React.PureComponent {

    render() {

        const data = [
            {
                key: 1,
                value: 20,
                svg: { fill: '#ff9500' },
                name: "Foreigns Stocks"
            },
            {
                key: 2,
                value: 60,
                svg: { fill: '#ffcc00' },
                name: "US Stocks"
            },
            {
                key: 3,
                value: 4,
                svg: { fill: '#4cd964' },
                name: "Cash"
            },
            {
                key: 4,
                value: 16,
                svg: { fill: '#007aff' },
                arc: { outerRadius: '110%', cornerRadius: 0,  },
                name: "Bonds"
            },
        ]

        // const Labels = ({ slices, height, width }) => {
        //     return slices.map((slice, index) => {
        //         const { labelCentroid, pieCentroid, data } = slice;
        //         return (
        //             <Text
        //                 key={index}
        //                 x={pieCentroid[ 0 ]}
        //                 y={pieCentroid[ 1 ]}
        //                 fill={'white'}
        //                 textAnchor={'middle'}
        //                 alignmentBaseline={'middle'}
        //                 fontSize={13}
        //                 stroke={'black'}
        //                 strokeWidth={0.2}
        //             >
        //                 {`${data.value}%`}
        //             </Text>
        //         )
        //     })
        // }

        const RightLabels = () => {
            return data.map( item => (

                <View style={{flexDirection: 'row', alignItems: 'center', paddingBottom: 13, paddingTop: 13 }} key={item.name}>
                    <View style={{width: 12, height: 12, borderRadius: 12/2, backgroundColor: item.svg.fill}} />
                    <Text style={{ paddingLeft: 5, color: '#1b222f', fontSize: 16 }}>{`${item.value}%`}</Text>
                </View>
            ))
            
        }

        return (
            <View style={styles.container}>
                <PieChart
                    style={{ height: 210, width: 210 }}
                    valueAccessor={({ item }) => item.value}
                    data={data}
                    spacing={0}
                    outerRadius={'90%'}
                    innerRadius={'47.14%'}
                    padAngle={0}
                />               
                <View style={{ paddingRight: 15, paddingLeft: 5 }}>
                    <RightLabels />
                </View>
            </View>
        )
    }

}

export default PieChartWithCenteredLabels