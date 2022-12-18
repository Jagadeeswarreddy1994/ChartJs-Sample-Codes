import { LightningElement,track,wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountChartCntrl.getAccounts';

export default class AccountBarChart extends LightningElement 
{
    @track chartConfiguration;
    

    @wire(getAccounts, {})
 getOpportunities({error, data}) {
  if (error) {
   this.error = error;
   console.log('error => ' + JSON.stringify(error));
   this.chartConfiguration = undefined;
  } else if (data) {
    //alert(JSON.stringify(data));
   let chartData = [];
   let chartLabels = [];
   data.forEach(opp => {
    chartData.push(opp.NumberOfEmployees);
    chartLabels.push(opp.Name);
   });

   this.chartConfiguration = {
    type: 'bar',
    data: {
     labels: chartLabels,
     datasets: [
      {
       label: 'Account-Employees',
       barPercentage: 0.5,
       barThickness: 3,
       maxBarThickness: 8,
       minBarLength: 2,
       backgroundColor: "green",
       data: chartData,
      },
     ],
    },
    options: {
    },
   };
   console.log('data => ', data);
   this.error = undefined;
  }
 }
}