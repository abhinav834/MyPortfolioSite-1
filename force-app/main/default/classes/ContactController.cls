global class ContactController {

    @AuraEnabled
    public static void createLead( String firstName, String lastName, String company, String email, String description ) {
        Lead L = new Lead();

        L.FirstName = firstName;
        L.LastName = lastName;
        L.Company = company;
        L.Email = email;
        L.Description = description;

        insert L;

    }
}