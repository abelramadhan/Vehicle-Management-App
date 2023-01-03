import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

export default function UsageGraph(props) {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        BarElement,
        Title,
        Tooltip,
        Legend
      );

    const vehicles = props.vehicles
    const requests = props.requests
    const requestLogs = props.requestLogs

    const months = {
        '01': 'January',
        '02': 'February',
        '03': 'March',
        '04': 'April',
        '05': 'May',
        '06': 'June',
        '07': 'July',
        '08': 'August',
        '09': 'September',
        '10': 'October',
        '11': 'November',
        '12': 'December',
    }

    const convertData = () => {
        let groups = requestLogs.reduce(function (r, o) {
            var m = o.date_given.split(('-'))[1];
            (r[m]) ? r[m].data.push(o) : r[m] = { group: String(m), data: [o] };
            return r;
        }, {})

        let result = Object.keys(groups).map(function (k) { return groups[k]; });
        result = result.sort((a, b) => a.group - b.group)
        console.log(result)

        const labels = result.map(res => months[res.group])
        const counts = result.map(res => res.data.length)

        console.log(labels)
        console.log(counts)

        const data = {
            labels: labels,
            datasets: [
                {
                    label: 'Times Used',
                    data: counts,
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)'
                }
            ]
        }

        return data
    }

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
        },
      };


    return (
        <div className="flex flex-col gap-y-5 shadow-sm items-start justify-around bg-slate-50 py-4 px-8 rounded-md grow">
            <h2 className='text-lg font-medium align-left'>Usage Statistics</h2>
            <Bar options={options} data={convertData()} />
        </div>
    )
}