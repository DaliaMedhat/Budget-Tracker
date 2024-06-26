# Project Overview
A single-page application is implemented that allows users to track their daily expenses and income, as well as see their current balance.

By pressing the plus button, the user can open a form to add a new record, which can be either an income or an expense. The balance is internally calculated and the user can see the current status.
A Record List is also shown with all of the records that were previously added.
The user is also able to delete any record.

As a visulaization tool, a pie chart is implemented. Whenever any record (income/expenses) is added, the pie chart appears. 
The total income and expenses is also stated to improve UX.


# How to run the application
- In the main directory, run "npm start"

# Technologies and Design ideas
- Javascript
- React
- tailwindcss for styling

- Pie Chart for visualization
- Easy UI to avoid confusion
- A slightly colorful background with changing colors when hovering.
- Well-known colors for the PieChart (Green & Red) for user's familiarity and linking to the colors.
- Total Income and Total Expenses with the same colors as the PieChart to link them.
- Checks are done on 
      * whether description or amount fields are empty.
      * whether the amount field has a negative number (can be considered expense but does not make sense since we have expenses in our dropdown list).
      * 'no records yet' as a user feedback message.


# Screenshots can be seen below


![Screenshot 2024-06-23 at 11 43 18 PM](https://github.com/DaliaMedhat/Budget-Tracker/assets/47298390/371e8a33-4037-4800-ba8e-e768c6340260)

![Screenshot 2024-06-23 at 11 43 38 PM (2)](https://github.com/DaliaMedhat/Budget-Tracker/assets/47298390/d08ec8f3-c674-4a70-bcf7-c85eb19b0b71)

![Screenshot 2024-06-23 at 11 44 23 PM](https://github.com/DaliaMedhat/Budget-Tracker/assets/47298390/13f8d3e4-0531-4828-8f1f-8471743c580c)
