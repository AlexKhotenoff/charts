
// let p_chart = echarts.init(document.querySelector('.chart_pie'));
let p_chart_month = echarts.init(document.getElementById('chart-pie_month'));
let p_chart_week = echarts.init(document.getElementById('chart-pie_week'));
let p_chart_day = echarts.init(document.getElementById('chart-pie_day'));

let p_chart_summary = echarts.init(document.getElementById('chart-pie_summary'));

//pie-chart options
var p_option = {
    // width: '100%',
    // height: '100%',
    // backgroundColor: '',
    // title: {
    //     text: 'Pie example'
    // },
    animation: false,
    tooltip: {},
    series: [{
        // name: 'Sales',
        type: 'pie',
        radius: '100%',
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

// p_chart.setOption(p_option);
p_chart_month.setOption(p_option);
p_chart_week.setOption(p_option);
p_chart_day.setOption(p_option);

p_chart_summary.setOption(p_option);

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

//tab panel buttons
let tab_buttons = document.querySelectorAll('.charts-form__tab-button');

tab_buttons.forEach(element => {
    element.addEventListener('click', function (evt) {
        evt.preventDefault();

        //clear active button
        let active_button = document.querySelector('.charts-form__tab-button_active');
        active_button.classList.remove('charts-form__tab-button_active');

        //activate current button
        element.classList.toggle('charts-form__tab-button_active');

        //clear active tab
        document.querySelector('.charts-form__tab-item_active').classList.toggle('charts-form__tab-item_active');

        //activate current tab
        let active_tab = document.querySelector('.charts-form__tab-item_' + element.dataset.tab);
        active_tab.classList.toggle('charts-form__tab-item_active');
    });
});
