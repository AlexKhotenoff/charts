let p_chart_month = echarts.init(document.getElementById('chart_pie_month'));
let p_chart_week = echarts.init(document.getElementById('chart_pie_week'));
let p_chart_day = echarts.init(document.getElementById('chart_pie_day'));

let p_chart_summary = echarts.init(document.getElementById('chart_pie_summary'));

//pie-chart options
var p_option = {
    tooltip: {
        trigger: 'item',
        formatter: '{b} : {c} ({d}%)'
    },
    series: [
        {
            type: 'pie',
            radius: '76%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            label: {
                show: false,
            },
            data: [
                { value: 535, name: '1' },
                { value: 510, name: '2' },
                { value: 634, name: '3' },
                { value: 735, name: '4' },
                { value: 735, name: '5' },
                { value: 735, name: '6' },
                { value: 735, name: '7' },
                { value: 735, name: '8' },
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 5,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

// p_chart.setOption(p_option);
p_chart_month.setOption(p_option);
p_chart_week.setOption(p_option);
p_chart_day.setOption(p_option);

p_chart_summary.setOption(p_option);
//end of custom pie-chart

//start bar-chart
let b_chart = echarts.init(document.getElementById("chart-bar"));

//bar-chart options
b_option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'  //line or shadow      
        }
    },
    grid: {
        left: '3%',
        right: '5%',
        bottom: '3%',
        top: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value'
    },
    yAxis: {
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
        b_chart.resize();
    });
});

window.addEventListener("resize", function () {
    b_chart.resize();
    p_chart_day.resize();
    p_chart_week.resize();
    p_chart_month.resize();
    p_chart_summary.resize();
});
