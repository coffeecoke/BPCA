$(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('pieChart1'));
   /**
 * 图标所需数据
 */
var data = {
    id: 'echartPie',
    value: [32, 12, 24, 12,28,34,66],
    legend: [ '行业 自律', '行业 交流', '专业 委员会','业务 培训','公益 宣传','讯息 发布','课题 研究'],
    color: ['#7c8dff', '#04e38a', '#9dff86', '#d6ff9c','#ffe689', '#679eff', '#465ced'],
    // tooltipShow:false,    //设置悬浮提示显示              --默认显示true
    // hoverAnimation:false, //设置鼠标悬浮点击饼图动画效果  --默认开启动画true
    title: '饼图',
}

////////////////////////////////////////

/**
 * 数据处理
 */
var seriesData = []
data.value.forEach(function(item, index) {
    seriesData.push({
        value: item,
        name: data.legend[index]
    })
})
////////////////////////////////////////

var option = {
    backgroundColor: '#fff',
    // title: {
    //     x: '2%',
    //     y: '2%',
    //     textStyle: {
    //         fontWeight: 400,
    //         fontSize: 16,
    //         color: '#687284'
    //     },
    //     text: data.title || ''
    // },
    tooltip: {
        trigger: 'item',
        backgroundColor:"#fff",
        borderRadius:5,
        // padding:14,
        textStyle:{
            color:'#000',
        },
        extraCssText: 'box-shadow: 0 0 8px rgba(52, 148, 253, 0.3)',
        formatter:function(param){
            console.log(param)
           return "<div style='padding:20px;overflow:hidden;'><h4 style='padding:10px 0;width:40px;border-top:4px #ffbb10 solid;'>"+param.data.name+"</h4><div>每年度组织会员单位开展重点课题研究.</div></div>"
        }
        // position:function(point, params, dom, rect, size){
        //     $(dom).html("<div class='box-tooltip' style='width:200px;height:200px;'><h4>课题研究</h4><div class='box-text' style='width:200px;white-space:wrap;'>每年度组织会员单位开展重点课题研究，通过专家评审遴选优秀课题成果，供各会员单位参阅，不断提升行业理论研究水平。</div></div>")
        // }
        // show: data.tooltipShow === false ? false : true
        //   formatter: "{b}: {c} ({d}%)"
    },
    // legend: {
    //     orient: 'horizontal',
    //     top: 16,
    //     icon: 'circle',
    //     selectedMode: false,
    //     itemWidth: 6,
    //     itemHeight: 6,
    //     itemGap: 6,
    //     borderRadius: 6,
    //     data: data.legend
    // },
    series: [{
        type: 'pie',
        // clickable:false,
        // selectedMode: 'single',//单点击设置
        hoverAnimation: data.hoverAnimation === false ? false : true,
        radius: ['40%', '67%'],
        color: data.color,
        label: {
            normal: {
                position: 'inner',
                formatter:function(param){
                    console.log(param)
                    return param.name.split(" ").join("\n");
                },
                // formatter: function(param) {
                //     if (!param.percent) return ''
                //     var f = Math.round(param.percent * 10) / 10;
                //     var s = f.toString();
                //     var rs = s.indexOf('.');
                //     if (rs < 0) {
                //         rs = s.length;
                //         s += '.';
                //     }
                //     while (s.length <= rs + 1) {
                //         s += '0';
                //     }
                //     return s + '%';
                // },
                textStyle: {
                    color: '#014a2c',
                    fontSize: 12
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: seriesData
    }]
};
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
})