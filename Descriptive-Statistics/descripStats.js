class MeasuresOfCentralTendency {
    constructor(values) {
      this.values = values;
    }
  
    // Function to calculate mean
    calculateMean() {
      const sum = this.values.reduce((acc, val) => acc + val, 0);
      return sum / this.values.length;
    }
  
    // Function to calculate median
    calculateMedian() {
      const sortedValues = this.values.slice().sort((a, b) => a - b);
      const mid = Math.floor(sortedValues.length / 2);
  
      if (sortedValues.length % 2 === 0) {
        return (sortedValues[mid - 1] + sortedValues[mid]) / 2;
      } else {
        return sortedValues[mid];
      }
    }
  
    // Function to calculate mode
    calculateMode() {
      const frequencyMap = {};
      let maxFrequency = 0;
      let modes = [];
  
      this.values.forEach(value => {
        frequencyMap[value] = (frequencyMap[value] || 0) + 1;
        if (frequencyMap[value] > maxFrequency) {
          maxFrequency = frequencyMap[value];
          modes = [value];
        } else if (frequencyMap[value] === maxFrequency) {
          modes.push(value);
        }
      });
  
      return modes;
    }
  }
  
  // Array of values
  const data = [25,17,40,63,25,54,70];
  
  // Create an instance of CentralTendency
  const CentralTendency = new MeasuresOfCentralTendency(data);
  
  // Calculate and print mean, median, and mode
  console.log('Mean:', CentralTendency.calculateMean());
  console.log('Median:', CentralTendency.calculateMedian());
  console.log('Mode:', CentralTendency.calculateMode());
  