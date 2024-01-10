const rectangleCanvas = document.getElementById('rectangleCanvas');
    const rectangleCtx = rectangleCanvas.getContext('2d');
    rectangleCtx.fillStyle = 'blue';
    rectangleCtx.fillRect(0, 0, 200, 160);

    const circleCanvas = document.getElementById('circleCanvas');
    const circleCtx = circleCanvas.getContext('2d');
    circleCtx.beginPath();
    circleCtx.arc(100, 100, 90, 0, Math.PI * 2);
    circleCtx.fillStyle = 'red';
    circleCtx.fill();

    const triangleCanvas = document.getElementById('triangleCanvas');
    const triangleCtx = triangleCanvas.getContext('2d');
    triangleCtx.beginPath();
    triangleCtx.moveTo(0, 0);
    triangleCtx.lineTo(200, 0);
    triangleCtx.lineTo(100, 200);
    triangleCtx.closePath();
    triangleCtx.fillStyle = 'green';
    triangleCtx.fill();

    const lineCanvas = document.getElementById('lineCanvas');
    const lineCtx = lineCanvas.getContext('2d');
    lineCtx.beginPath();
    lineCtx.moveTo(0, 0);
    lineCtx.lineTo(200, 200);
    lineCtx.strokeStyle = 'purple';
    lineCtx.lineWidth = 5;
    lineCtx.stroke();

    const ellipseCanvas = document.getElementById('ellipseCanvas');
    const ellipseCtx = ellipseCanvas.getContext('2d');
    ellipseCtx.beginPath();
    ellipseCtx.ellipse(100, 100, 100, 30, 0, 0, Math.PI * 2);
    ellipseCtx.fillStyle = 'orange';
    ellipseCtx.fill();

    const quadraticCurveCanvas = document.getElementById('quadraticCurveCanvas');
    const quadraticCurveCtx = quadraticCurveCanvas.getContext('2d');
    quadraticCurveCtx.beginPath();
    quadraticCurveCtx.moveTo(0, 200);
    quadraticCurveCtx.quadraticCurveTo(30, 150, 100, 200);
    quadraticCurveCtx.strokeStyle = 'brown';
    quadraticCurveCtx.lineWidth = 3;
    quadraticCurveCtx.stroke();

    const polygonCanvas = document.getElementById('polygonCanvas');
    const polygonCtx = polygonCanvas.getContext('2d');
    polygonCtx.beginPath();
    const sides = 6;
    const centerX = 100;
    const centerY = 100;
    const radius = 80;
    for (let i = 0; i < sides; i++) {
      const angle = (i / sides) * Math.PI * 2;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      if (i === 0) {
        polygonCtx.moveTo(x, y);
      } else {
        polygonCtx.lineTo(x, y);
      }
    }
    polygonCtx.closePath();
    polygonCtx.fillStyle = 'yellow';
    polygonCtx.fill();

    // Additional shapes
    const arcCanvas = document.getElementById('arcCanvas');
    const arcCtx = arcCanvas.getContext('2d');
    arcCtx.beginPath();
    arcCtx.arc(150, 150, 70, 0, Math.PI * 2); // Draw a full circle
    arcCtx.strokeStyle = 'gray';
    arcCtx.lineWidth = 3;
    arcCtx.stroke();


    const cubicCurveCanvas = document.getElementById('cubicCurveCanvas');
    const cubicCurveCtx = cubicCurveCanvas.getContext('2d');
    cubicCurveCtx.beginPath();
    cubicCurveCtx.moveTo(0, 250);
    cubicCurveCtx.bezierCurveTo(50, 200, 150, 300, 200, 250);
    cubicCurveCtx.strokeStyle = 'navy';
    cubicCurveCtx.lineWidth = 3;
    cubicCurveCtx.stroke();

    // Complete the shape and add fill color
    cubicCurveCtx.lineTo(0, 250); // Connect to the starting point of the curve
    cubicCurveCtx.closePath();
    cubicCurveCtx.fillStyle = 'lightgreen'; // Set fill color
    cubicCurveCtx.fill(); // Fill the shape

  const roundedRectCanvas = document.getElementById('roundedRectCanvas');
    const roundedRectCtx = roundedRectCanvas.getContext('2d');
    roundedRectCtx.beginPath();
    roundedRectCtx.moveTo(50, 50);
    roundedRectCtx.lineTo(250, 50);
    roundedRectCtx.arcTo(300, 50, 300, 100, 20);
    roundedRectCtx.lineTo(300, 200);
    roundedRectCtx.arcTo(300, 250, 250, 250, 20);
    roundedRectCtx.lineTo(50, 250);
    roundedRectCtx.arcTo(0, 250, 0, 200, 20);
    roundedRectCtx.lineTo(0, 100);
    roundedRectCtx.arcTo(0, 50, 50, 50, 20);

    // Close the path and fill the shape
    roundedRectCtx.closePath();
    roundedRectCtx.fillStyle = 'lightblue';
    roundedRectCtx.fill();
    const starCanvas = document.getElementById('starCanvas');
    const starCtx = starCanvas.getContext('2d');
    starCtx.beginPath();
    const numberOfPoints = 5;
    const outerRadius = 100;
    const innerRadius = 50;
    for (let i = 0; i < numberOfPoints * 2; i++) {
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const angle = (i / numberOfPoints) * Math.PI;
      const x = 150 + radius * Math.cos(angle - Math.PI / 2);
      const y = 150 + radius * Math.sin(angle - Math.PI / 2);
      if (i === 0) {
        starCtx.moveTo(x, y);
      } else {
        starCtx.lineTo(x, y);
      }
    }
    starCtx.closePath();
    starCtx.fillStyle = 'purple';
    starCtx.fill();

    const spiralCanvas = document.getElementById('spiralCanvas');
    const spiralCtx = spiralCanvas.getContext('2d');
    spiralCtx.beginPath();
    const x = 150;
    const y = 150;
    const laps = 5; // Number of laps for the spiral
    const segmentsPerLap = 360; // Number of segments per lap
    const startRadius = 5;
    const endRadius = 150;
    const radiusIncrement = (endRadius - startRadius) / (laps * segmentsPerLap);
    for (let i = 0; i < laps * segmentsPerLap; i++) {
      const radius = startRadius + i * radiusIncrement;
      const angle = (i / segmentsPerLap) * 2 * Math.PI;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      if (i === 0) {
        spiralCtx.moveTo(x, y);
      } else {
        spiralCtx.lineTo(x, y);
      }
    }
    spiralCtx.strokeStyle = 'green';
    spiralCtx.lineWidth = 2;
    spiralCtx.stroke();