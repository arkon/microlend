import React from 'react';
import {Line} from 'react-chartjs';

const NUM_POINTS_ON_CHART = 10;
const REFRESH_THROTTLE = 500;

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

let generators = { };
generators[CurveType.Linear] = (x) => {
  return x;
};
generators[CurveType.Quadratic] = (x) => {
  return x * x;
};
generators[CurveType.Exponential] = (x) => {
  return Math.pow(2, x);
};

class Invest extends React.Component {

  canRefresh = true;

  constructor (props) {
    super(props);

    let dataPoints = this.generatePoints(CurveType.Quadratic, 5000, NUM_POINTS_ON_CHART);

    this.state = {
      data: Invest.createChartData(dataPoints),
      dataPoints: dataPoints,
      options: chartOptions,

      investmentParameters: {
        amount: 0,
        rateOfReturn: 10,
        repaymentPeriod: 10
      }
    };
  }

  render () {
    return (
      <div className='container'>
        <div className='form form--wide'>
          <h1>Invest</h1>
          <p>Grow your money by investing in the global pool.</p>

          <label>Enter the amount you wish to borrow (CAD)</label>
          <input type='number'
                 required
                 onChange={this.changeAmount} />

          <label>Return: {this.state.investmentParameters.rateOfReturn}%</label>
          <input type='range'
                 min="5"
                 max="20"
                 value={this.state.investmentParameters.rateOfReturn}
                 onChange={this.changeRateOfReturn} />

          <label>Repayment period: {this.state.investmentParameters.repaymentPeriod} months</label>
          <input type="range"
                 min="3"
                 max="20"
                 value={this.state.investmentParameters.repaymentPeriod}
                 onChange={this.changeRepaymentPeriod} />

          <div>
            <Line data={this.state.data}
                  options={this.state.options}
                  width="400" height="400" />
          </div>

          <button>Submit</button>
        </div>
      </div>
    );
  }

  createInvestmentParamSetter (paramName) {
    return (event) => {
      this.state.investmentParameters[paramName] = event.target.value;
      this.setState({investmentParameters: this.state.investmentParameters});
      this.recalculateGraph();
    };
  }

  changeAmount = this.createInvestmentParamSetter("amount");
  changeRateOfReturn = this.createInvestmentParamSetter("rateOfReturn");
  changeRepaymentPeriod = this.createInvestmentParamSetter("repaymentPeriod");

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
    })
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
      labels: Array(points.length).fill().map((_, __) => ""),
      datasets: [ {
        data: points
      } ]
    }
  }
}

export default Invest;
