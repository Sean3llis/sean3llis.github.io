var data = [
    {
        value: 88,
        color: "#2f2f2f",
        highlight: "#191919",
        label: "Javascript"
    },
    {
        value: 85,
        color:"#2f2f2f",
        highlight: "#191919",
        label: "Ruby (on rails)"
    },
    {
        value: 80,
        color: "#2f2f2f",
        highlight: "#191919",
        label: "CSS3/HTML5"
    },
    {
        value: 67,
        color: "#2f2f2f",
        highlight: "#191919",
        label: "ChartJS"
    },
    {
        value: 58,
        color: "#2f2f2f",
        highlight: "#191919",
        label: "SkrollrJS"
    },
    {
        value: 50,
        color: "#2f2f2f",
        highlight: "#191919",
        label: "AngularJS"
    },
    {
        value: 90,
        color: "#2f2f2f",
        highlight: "#191919",
        label: "Photoshop/Illustrator/InDesign"
    },

];

var options = {
    //Boolean - Show a backdrop to the scale label
    scaleShowLabelBackdrop : true,

    //String - The colour of the label backdrop
    scaleBackdropColor : "rgba(255,255,255,1)",

    // Boolean - Whether the scale should begin at zero
    scaleBeginAtZero : true,

    //Number - The backdrop padding above & below the label in pixels
    scaleBackdropPaddingY : 2,

    //Number - The backdrop padding to the side of the label in pixels
    scaleBackdropPaddingX : 2,

    //Boolean - Show line for each value in the scale
    scaleShowLine : true,

    //Boolean - Stroke a line around each segment in the chart
    segmentShowStroke : true,

    //String - The colour of the stroke on each segement.
    segmentStrokeColor : "#f5f3e3",

    //Number - The width of the stroke value in pixels
    segmentStrokeWidth : 2,

    //Number - Amount of animation steps
    animationSteps : 75,

    //String - Animation easing effect.
    animationEasing : "swing",

    //Boolean - Whether to animate the rotation of the chart
    animateRotate : true,

    //Boolean - Whether to animate scaling the chart from the centre
    animateScale : true,

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"

}

var drawChart = true

window.onscroll = checkWindow

function checkWindow(){
	if(window.scrollY > 1460 && drawChart){
		console.log('drawing')
		drawChart()
	}
}

var drawChart = function(){
	var ctx = document.getElementById("chart").getContext('2d');
	var myNewChart = new Chart(ctx).PolarArea(data);
	new Chart(ctx).PolarArea(data,options);
	drawChart = false
}

