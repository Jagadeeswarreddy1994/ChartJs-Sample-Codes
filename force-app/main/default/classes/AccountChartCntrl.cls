public class AccountChartCntrl {
    //this is the updated file
	@AuraEnabled(cacheable=true)
    public static list<Account> getAccounts(){
        list<Account> accrds =[SELECT Name, NumberOfEmployees FROM Account];
        return accrds;
    }
}