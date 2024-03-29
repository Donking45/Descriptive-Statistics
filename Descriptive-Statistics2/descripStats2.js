class MeasuresOfDispersion {
    constructor(values) {
      this.values = values;
    }
    
    // Function to calculate mean
    calculateMean() {
      const sum = this.values.reduce((acc, val) => acc + val, 0);
      return sum / this.values.length;
    }
  
    // Function to calculate range
    calculateRange() {
      const sortedValues = this.values.slice().sort((a, b) => a - b);
      return sortedValues[sortedValues.length - 1] - sortedValues[0];
    }
  
    // Function to calculate standard deviation
    calculateStandardDeviation() {
      const mean = this.calculateMean();
      const squaredDifferences = this.values.map(val => Math.pow(val - mean, 2));
      const variance = squaredDifferences.reduce((acc, val) => acc + val, 0) / this.values.length;
      return Math.sqrt(variance);
    }
  
    // Function to calculate quartile deviation
    calculateQuartileDeviation() {
      const q3 = this.calculatePercentile(75);
      const q1 = this.calculatePercentile(25);
      return (q3 - q1) / 2;
    }
  
    // Function to calculate variance
    calculateVariance() {
      const mean = this.calculateMean();
      const squaredDifferences = this.values.map(val => Math.pow(val - mean, 2));
      return squaredDifferences.reduce((acc, val) => acc + val, 0) / this.values.length;
    }
  
    // Function to calculate absolute deviation
    calculateAbsoluteDeviation() {
      const mean = this.calculateMean();
      return this.values.reduce((acc, val) => acc + Math.abs(val - mean), 0) / this.values.length;
    }
  
    // Function to calculate percentile
    calculatePercentile(percentile) {
      const sortedValues = this.values.slice().sort((a, b) => a - b);
      const index = Math.ceil((percentile / 100) * sortedValues.length);
      return sortedValues[index - 1];
    }
  }
  
  // Array of values
  const data = [25,17,40,63,25,54,70];
  
  // Create an instance of Dispersion
  const Dispersion = new MeasuresOfDispersion(data);
  
  // Calculate and print various statistics
  console.log('Range:', Dispersion.calculateRange());
  console.log('Standard Deviation:', Dispersion.calculateStandardDeviation());
  console.log('Quartile Deviation:', Dispersion.calculateQuartileDeviation());
  console.log('Variance:', Dispersion.calculateVariance());
  console.log('Absolute Deviation:', Dispersion.calculateAbsoluteDeviation());