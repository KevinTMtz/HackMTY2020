import * as d3 from 'd3';

const width = 20,
  height = 10;

const svg = d3.select('svg');

const nodes_data = Array.from({ length: 100 }, () => ({
  x: width / 2,
  y: height / 2,
}));

d3.forceSimulation(nodes_data)
  .alphaMin(0.3)
  .force(
    'charge_force',
    d3.forceCollide((width * height) / (nodes_data.length * 2)).strength(0.2),
  )
  .on('tick', () => {
    node
      .attr('cx', (d) => (d.x = clamp(d.x, width - 0.5, 0.5)))
      .attr('cy', (d) => (d.y = clamp(d.y, height - 0.5, 0.5)));
  })
  .on('end', () => {
    console.log(nodes_data);
  });

const node = svg
  .append('g')
  .attr('class', 'nodes')
  .selectAll('circle')
  .data(nodes_data)
  .enter()
  .append('circle')
  .attr('r', 0.1)
  .attr('fill', 'blue');

const clamp = (val, max, min) => Math.max(min, Math.min(max, val));

// [5, 150]
// [10, 100]
// [20, 60]
// [50, 40]
// [100, 27]
