import React from 'react';
import { Link } from 'react-router';
import { Line } from 'react-chartjs';

const NUM_POINTS_ON_CHART = 10;
const REFRESH_THROTTLE = 500;

const CompletedMessage = () => {
  return (
    <div>
      <p>Congratulations! Your investment has been added to the pool.</p>
      <p>You will recieve a confirmation email shortly.</p>

      <Link to='dashboard'><button>Back to dashboard</button></Link>
    </div>
  );
};

let chartOptions = {
  bezierCurve: true,
  pointDot: false,
  showTooltips: false,
};

let CurveType = {
  Linear: 1,
  Quadratic: 2,
  Exponential: 3
};

let generators = {
  [CurveType.Linear]: (x) => {
    return x;
  },

  [CurveType.Quadratic]: (x) => {
    return x * x;
  },

  [CurveType.Exponential]: (x) => {
    return Math.pow(2, x);
  }
};

class Invest extends React.Component {
  canRefresh = true;

  constructor (props) {
    super(props);

    let dataPoints = this.generatePoints(CurveType.Quadratic, 5000, NUM_POINTS_ON_CHART);

    this.state = {
      completed: false,

      data: Invest.createChartData(dataPoints),
      dataPoints: dataPoints,
      options: chartOptions,

      investmentParameters: {
        amount: 0,
        rateOfReturn: 10,
        repaymentPeriod: 10
      }
    };

    this.invest = this.invest.bind(this);
  }

  invest () {
    this.setState({
      completed: true
    });
  }

  render () {
    return (
      <div className='container'>
        <div className='form form--wide'>
          <h1>Invest</h1>

          { this.state.completed ? <CompletedMessage /> :
            <div>
              <p>Invest and grow your money.</p>

              <label>Enter the amount you wish to borrow:</label>
              <input type='number'
                     required
                     placeholder='Amount (CAD)'
                     onChange={this.changeAmount} />

              <label>
                Return @ {this.state.investmentParameters.rateOfReturn}%:
                ${(this.state.investmentParameters.amount * (1 + this.state.investmentParameters.rateOfReturn / 100)).toFixed(2)}
              </label>
              <input type='range'
                     min='5'
                     max='20'
                     value={this.state.investmentParameters.rateOfReturn}
                     onChange={this.changeRateOfReturn} />

              <label>Repayment period: {this.state.investmentParameters.repaymentPeriod} months</label>
              <input type='range'
                     min='3'
                     max='20'
                     value={this.state.investmentParameters.repaymentPeriod}
                     onChange={this.changeRepaymentPeriod} />

              <div>
                <Line data={this.state.data}
                      options={this.state.options}
                      width='400' height='400' />
              </div>

              <button onClick={this.invest}>Submit</button>
            </div>
          }
        </div>
      </div>
    );
  }

  createInvestmentParamSetter (paramName) {
    return (event) => {
      this.state.investmentParameters[paramName] = event.target.value;

      this.setState({
        investmentParameters: this.state.investmentParameters
      }, () => {
        this.recalculateGraph();
      });
    };
  }

  changeAmount = this.createInvestmentParamSetter('amount');
  changeRateOfReturn = this.createInvestmentParamSetter('rateOfReturn');
  changeRepaymentPeriod = this.createInvestmentParamSetter('repaymentPeriod');

  recalculateGraph () {
    if (!this.canRefresh) {
      return;
    }

    // only allow refreshing every once in a while to improve performance
    this.canRefresh = false;
    setTimeout(() => {
      this.canRefresh = true;
    }, REFRESH_THROTTLE);

    let curveType = Invest.getCurveTypeFor(this.state.investmentParameters);
    let dataPoints = this.generatePoints(curveType, 5000, NUM_POINTS_ON_CHART);

    this.setState({
      dataPoints: dataPoints,
      data: Invest.createChartData(dataPoints)
    });
  }

  static getCurveTypeFor ({rateOfReturn, repaymentPeriod}) {
    if (rateOfReturn < 10) {
      return CurveType.Linear
    }

    if (rateOfReturn >= 10 && rateOfReturn < 15) {
      return CurveType.Quadratic;
    }

    return CurveType.Exponential;
  }

  generatePoints (curveType, maxAmount, numPoints) {
    let originalMaxValue = generators[curveType](numPoints - 1);
    let ratio = originalMaxValue / maxAmount;

    return Array(numPoints)
      .fill()
      .map((_, x) => generators[curveType](x) * ratio);
  }

  static createChartData (points) {
    return {
      labels: Array(points.length).fill().map(_ => ''),
      datasets: [{
        data: points
      }]
    };
  }
}

export default Invest;
