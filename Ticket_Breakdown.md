# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
1. Create a new column facitlity_custom_id in `Facilities` table for adding custom ids of agents. 
    -   This ticket will be used for creating a record of the DB migration script that'll run on every env that we have.
    -   Time estimate (2 hr)
2. Expose an API where custom id and the actual facility id would be taken as input and saved. 
    -   Here we are trying to save the custom id provided by the Agent as per their convenience and store it in our db.
    -   Time estimate (4-6 hr)
3. Adding new key facitlity_custom_id instead of facility_id in `generateReport` function. 
    -   Here we will make changes to the function `generateReport` in which we will add the custom id column 
        provided to us by the Agent.
    -   Time estimate (4-8 hr)
For the above story to be accepted, below points should be verified
 -  While saving the custom id of the agent, we should be able to add/update.
 -  In reports generated, the new custom id provided by the agent should be visible. 