import React from 'react';

const Statistics = ({ bad, good, neutral, positivePercentage, total }) => (
  <>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    <p>Positive feedback: {positivePercentage}%</p>
  </>
);

export default Statistics;
