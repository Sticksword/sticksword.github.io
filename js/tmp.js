function $$(selector, context) {
  context = context || document;
  var elements = context.querySelectorAll(selector);
  return Array.prototype.slice.call(elements);
}

$$('.pie').forEach(function(pie) {
  var p = parseFloat(pie.textContent);
  var NS = "http://www.w3.org/2000/svg";
  var svg = document.createElementNS(NS, "svg");
  var circle = document.createElementNS(NS, "circle");
  var title = document.createElementNS(NS, "title");
  circle.setAttribute("r", 16);
  circle.setAttribute("cx", 16);
  circle.setAttribute("cy", 16);
  circle.setAttribute("stroke-dasharray", p + " 100");
  circle.setAttribute("stroke", "red");
  svg.setAttribute("viewBox", "0 0 32 32");
  title.textContent = pie.textContent;
  pie.textContent = '';
  svg.appendChild(title);
  svg.appendChild(circle);

  var circle2 = document.createElementNS(NS, "circle");
  circle2.setAttribute("r", 16);
  circle2.setAttribute("cx", 16);
  circle2.setAttribute("cy", 16);
  circle2.setAttribute("stroke-dasharray", "30 100");
  circle2.setAttribute("stroke", "blue");
  circle2.setAttribute("stroke-dashoffset", "50");
  svg.appendChild(circle2);

  pie.appendChild(svg);
});

        <svg width="400" height="400">
          <path d="M200,200 L200,20 A180,180 0 0,1 377,231 z"
            style={{'fill':'#ff0000',
              'fillOpacity': 1,
              'stroke':'black',
              'strokeWidth': 1}}><title>Hello, World 1!</title></path>
          <path d="M200,200 L377,231 A180,180 0 0,1 138,369 z"
            style={{'fill':'#00ff00',
              'fillOpacity': 1,
              'stroke':'black',
              'strokeWidth': 1}}><title>Hello, World 2!</title></path>
          <path d="M200,200 L138,369 A180,180 0 0,1 20,194 z"
            style={{'fill':'#0000ff',
              'fillOpacity': 1,
              'stroke':'black',
              'strokeWidth': 1}}><title>Hello, World 3!</title></path>
          <path d="M200,200 L20,194 A180,180 0 0,1 75,71 z"
            style={{'fill':'#ff00ff',
              'fillOpacity': 1,
              'stroke':'black',
              'strokeWidth': 1}}><title>Hello, World 4!</title></path>
          <path d="M200,200 L75,71 A180,180 0 0,1 200,20 z"
            style={{'fill':'#ffff00',
              'fillOpacity': 1,
              'stroke':'black',
              'strokeWidth': 1}}
            title='testing 1 2'></path>
        </svg>

        more info here: http://www.codestore.net/store.nsf/unid/EPSD-5DTT4L
        and jsx demo here: https://github.com/brigade/react-simple-pie-chart/blob/master/src/pie_chart.jsx