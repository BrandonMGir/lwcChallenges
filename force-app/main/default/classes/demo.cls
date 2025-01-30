public with sharing class demo {
    public demo() {

    }

    @AuraEnabled
    public static List<Case> getCases(){
        try {
            return [SELECT AccountId, ContactId, Subject FROM Case WHERE Priority = 'High' AND IsEscalated = True];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static void addCase(String status, String origin){
        try {
            insert new Case(Status = status, Origin = origin, IsEscalated=true, Priority = 'High');
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static void closeCase(String id){
        try {
            Case c = [Select Id, Status From Case WHERE Id = :id];
            c.Status = 'Closed';
            update c;

        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountInfo(){
        try {
            return [SELECT Id, Name, AnnualRevenue FROM Account];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled(cacheable=true)
    public static Contact getContact(String id){
        try {
            return [SELECT Name FROM Contact WHERE Id = :id LIMIT 1];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static void deleteAccount(String id){
        try {
            Account acc = [SELECT Id FROM Account WHERE Id = :id];
            delete acc;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}