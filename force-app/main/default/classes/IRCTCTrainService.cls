/**
 * @description       : 
 * @author            : Piyush Dhaked
 * @group             : 
 * @last modified on  : 02-13-2025
 * @last modified by  : Piyush Dhaked
 * Modifications Log
 * Ver   Date         Author          Modification
 * 1.0   02-11-2025   Piyush Dhaked   Initial Version
**/
public with sharing class IRCTCTrainService {
    @AuraEnabled(cacheable=false)
    public static String getLiveTrainStatus(String trainNo, String startDay) {
        if(String.isBlank(trainNo)){
            throw new AuraHandledException('Train number is required.');
        }
        Http http = new Http();
        HttpRequest req = new HttpRequest();
        
        String endpoint = 'https://irctc1.p.rapidapi.com/api/v1/liveTrainStatus?trainNo=' 
            + EncodingUtil.urlEncode(trainNo, 'UTF-8');
        if(!String.isBlank(startDay)){
            endpoint += '&startDay=' + EncodingUtil.urlEncode(startDay, 'UTF-8');
        }
        
        req.setEndpoint(endpoint);
        req.setMethod('GET');
        req.setHeader('x-rapidapi-host', 'irctc1.p.rapidapi.com');
        req.setHeader('x-rapidapi-key', '6fb828c060mshc834cd93b6f6989p18d210jsn9f9795fb5635');
        
        try {
            HttpResponse res = http.send(req);
            if (res.getStatusCode() == 200) {
                return res.getBody();
            } else {
                throw new AuraHandledException('Error from API: ' + res.getStatus() + ' - ' + res.getBody());
            }
        } catch(Exception ex) {
            throw new AuraHandledException('Exception: ' + ex.getMessage());
        }
    }
    
    @AuraEnabled(cacheable=false)
    public static String getTrainSchedule(String trainNo) {
        if(String.isBlank(trainNo)){
            throw new AuraHandledException('Train number is required.');
        }
        Http http = new Http();
        HttpRequest req = new HttpRequest();
        
        String endpoint = 'https://irctc1.p.rapidapi.com/api/v1/getTrainSchedule?trainNo=' 
            + EncodingUtil.urlEncode(trainNo, 'UTF-8');
        
        req.setEndpoint(endpoint);
        req.setMethod('GET');
        req.setHeader('x-rapidapi-host', 'irctc1.p.rapidapi.com');
        req.setHeader('x-rapidapi-key', '6fb828c060mshc834cd93b6f6989p18d210jsn9f9795fb5635');
        
        try {
            HttpResponse res = http.send(req);
            if(res.getStatusCode() == 200){
                return res.getBody();
            } else {
                throw new AuraHandledException('Error from API: ' + res.getStatus() + ' - ' + res.getBody());
            }
        } catch(Exception ex) {
            throw new AuraHandledException('Exception: ' + ex.getMessage());
        }
        //Changes/..
    }
}
