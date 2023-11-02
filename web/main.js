console.log("hiip")

// Import the math.js library

import * as math from 'mathjs';

function normalize(v) {
  return math.divide(v, math.sqrt(math.sum(math.dotMultiply(v, v))));
}

function wedge(a, b) {
  return math.subtract(math.multiply(a[0], b[1]), math.multiply(a[1], b[0]));
}

function pget(array, n) {
  return [array[2 * n - 2], array[2 * n - 1]];
}

function pset(array, v, r, n) {
  array[r][2 * n - 2] = v[0];
  array[r][2 * n - 1] = v[1];
}

// Since we do not have types like in Julia, we will use simple objects in JavaScript
function Rod(p1, p2) {
  this.p1 = p1;
  this.p2 = p2;
}

function Prop(p1, p2) {
  this.p1 = p1;
  this.p2 = p2;
}

function Rope(p1, p2, p3) {
  this.p1 = p1;
  this.p2 = p2;
  this.p3 = p3;
}

function Slider(p, n) {
  this.p = p;
  this.n = normalize(n);
}

function Shelf(p, n) {
  this.p = p;
  this.n = normalize(n);
}

function System(n_particles, constraints, masses, positions, velocities) {
  this.n_particles = n_particles;
  this.forces = Array(n_particles).fill([0, 1]); // Assuming a default force
  this.constraints = constraints;
  this.masses = masses;
  this.positions = positions;
  this.velocities = velocities;
}

// ... The rest of the function definitions go here ...

// The simulation logic that initializes a system and performs computations will also be here

// Usage Example
let system = new System(
  6,
  [new Slider(4, [1, 1]), /* ... other constraints ... */],
  [40, 700, 100, 100, 40, 10],
  [/* ... initial positions ... */],
  [/* ... initial velocities ... */]
);

// Initialize simulation and perform calculations


