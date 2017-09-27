import React, { Component } from 'react';
import FinalMessage from './FinalMessage';

const options = [
  {
    question: 'Birthday Breakfast',
    options: ['Craig McMuffin', 'Smoothie delight'],
  },
  {
    question: 'Birthday Present',
    options: ['Boots', 'Massage'],
  },
  {
    question: 'Birthday Dinner',
    options: ['Zupas', 'Thai Drift Swift'],
  },
  {
    question: 'Where do you want to watch Survivor?',
    options: ['Home', "Cameron, Kennedy, and Gil's"],
  },
  {
    question: 'When do you want to read Brandon Sanderson?',
    options: ['Tonight', 'Wednesday'],
  },
  {
    question: 'In all honesty, what position 😉 do you prefer?',
    options: ['Top', 'Bottom'],
  },
  {
    question: 'On Friday, do you want to go to Provo Canyon and grill some food',
    options: ['Top', 'Bottom'],
  },
]

export default class Options extends Component {
    state = { opposite: 'white', index: 0, choices: [] }

    clickItem = (ref, opt) => () => {
      const { opposite } = this.state
      const next = opposite === 'white' ? 'black' : 'white'
      const el = this[ref];
      el.classList.add("big")
      this.recordItem(opt);
      setTimeout(() => {
        document.body.style.background = next;
        el.classList.remove("big");
        this.setState(prev => ({ opposite: next, index: prev.index + 1 }));
      }, 500);
    }

    recordItem = (opt) => {
      const choices = this.state.choices.concat(opt);
      this.setState({ choices })
    }

    render() {
        const { opposite, index, choices } = this.state;
        const item = options[index];
        const styles = {
          background: opposite === 'white' ? 'black' : 'white',
          color: opposite === 'white' ? 'white' : 'black',
        };
        if (index > options.length - 1) {
          return <FinalMessage choices={choices}/>
        }
        return (
          <div>
            <h1 className="title" style={{ color: opposite === 'white' ? 'black' : 'white' }}>
              {item.question}
            </h1>
            <div
              ref={(ref) => { this.one = ref }}
              className="small-one"
              onClick={this.clickItem('one', item.options[0])}
              style={styles}
            >
              <p className="item">{item.options[0]}</p>
            </div>
            <div
              ref={(ref) => { this.two = ref }}
              className="small-two"
              onClick={this.clickItem('two', item.options[1])}
              style={styles}
            >
              <p className="item">{item.options[1]}</p>
            </div>
          </div>
        );
    }
}