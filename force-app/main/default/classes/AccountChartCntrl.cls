public class AccountChartCntrl {
	@AuraEnabled(cacheable=true)
    public static list<Account> getAccounts(){
        list<Account> accrds =[SELECT Name, NumberOfEmployees FROM Account];
        return accrds;
    }
}