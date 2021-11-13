import React, { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  addFeedback = e => {
    const type = e.target.name;
    const count = this.state[type];
    this.setState({ [type]: count + 1 }, () => this.calcStatistics());
  };

  calcStatistics() {
    const { bad, good, neutral } = this.state;
    const total = bad + good + neutral;
    const positivePercentage = Math.round((good / total) * 100);
    this.setState({ total, positivePercentage });
  }

  render() {
    const { bad, good, neutral, positivePercentage, total } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions handleOnClick={this.addFeedback}></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {!total ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              bad={bad}
              good={good}
              neutral={neutral}
              positivePercentage={positivePercentage}
              total={total}
            ></Statistics>
          )}
        </Section>
      </>
    );
  }
}

export default App;
