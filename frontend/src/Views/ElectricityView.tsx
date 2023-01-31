import * as d3 from 'd3';
import { useEffect,useState } from 'react';
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend,
//   } from 'chart.js';

import { Line } from 'react-chartjs-2';
const ElectricityView = ()=>{

    const [prices,setPrices] = useState([])
    const [countries,setCountries] = useState([])
    const [data,setData] = useState([])

    // chart showing electricity prices over time by country. 

    useEffect(()=>{
            d3.csv('/countries.csv').then((res:any)=>{
                setPrices(res)
            })
            // const parseData = async ()=>{
            //     // GET LABELS 
            //     let labels = []
            //      prices.forEach((val:any,index)=>{
            //         labels.push(val.RECORD_DATE.split(' ')[0])
            //      })
            // }
        
    },[])


    console.log(prices)
    return(
        <div>
            ElectricityView
            {/* <Line data={data}/> */}
        </div>
    )
}
export default ElectricityView