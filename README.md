Bugs:
=====

1) If we user localhost:4200 showing blank page.
   Fix the issue to open posts main page.

   => write the code in app-routing.module.ts

2) In all the buttons text should be in the camel case. 
   => Do not edit the text, go for the best approach

3) Unable to view the post data in details page.

4) Back button is not working in the view post page.

5) Create post form error mesasges are not displaying
    1) Title is mandatory
    2) Body is mandatory

6) Submit button is not disabling while form is invalid in 
   both create and edit forms.

7) Post is getting delteted without asking any confirmation with user.

Improvements:
=============
8) We need to prepopulate the data in the form to edit it.
   The approch used is not upto the mark. 

9) Show all the titles in the uppercase.

10) Data is getting loss when user unexpectedly clicks back button in the 
   create and edit forms. We should take the configmtaion with user before leaving from the form.

11) "Notice board" should be in the navbar and when we scroll the page it should stick on top.

12) Display the timer in the navbar right section,
    it should display the time spent by user in the format "MM:SS".

13) In the middle of the nav bar show welcome message "Good morning/Good Afternoon/Good evening"
    Based on the time when user opens the website.

    --------------------------------------------------------------------------------------------
    NOTICE BOARD                          Good Morning                                     02:22
    -------------------------------------------------------------------------------------------- 

14) Where ever id displays, Id should display in the format of "ID-1".
    -> currently in table and details pages.

15) When ever we move the mouse in the table
    that row should be highlited same as in gmail.
    