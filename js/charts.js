
let p_chart = echarts.init(document.querySelector('.chart_pie'));

//pie-chart options
var p_option = {
    title: {
        text: 'Pie example'
    },
    tooltip: {},
    series: [{
        // name: 'Sales',
        type: 'pie',
        label: {
            show: false
        },
        emphasis: {
            label: {
                show: false
            }
        },
        data: [5, 20, 36, 10, 10, 20]
    }]
};

p_chart.setOption(p_option);

//end of custom pie-chart

//start bar-chart

let b_chart = echarts.init(document.querySelector(".chart_bar"));

//bar-chart options
b_option = {
    title: {
        text: 'Bar example'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {            
            type: 'shadow'  //line or shadow      
        }
    },
    grid: {
        left: '4%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value'
    },
    yAxis: {
        // type: 'category',
        data: ['', '', '', '', '', '', '']
    },
    series: [
        {
            name: '1',
            type: 'bar',
            stack: 'test',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [320, 302, 301, 334, 390, 330, 320]
        },
        {
            name: '2',
            type: 'bar',
            stack: 'test',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '3',
            type: 'bar',
            stack: 'test',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '4',
            type: 'bar',
            stack: 'test',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [150, 212, 201, 154, 190, 330, 410]
        },
        {
            name: '5',
            type: 'bar',
            stack: 'test',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [820, 832, 901, 934, 1290, 1330, 1320]
        }
    ]
};

b_chart.setOption(b_option);

//end of bar-chart