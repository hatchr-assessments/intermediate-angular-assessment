# Angular Dashboard and Order Management Assessment

## Introduction

This task is designed to test your Angular skills in creating and managing a dashboard for order management. The tasks in this assessment will challenge you to create functional components, implement services to handle API requests, and use modules to manage the application.

As an intermediate Angular developer, you are expected to have a good understanding of the fundamentals of Angular and be able to create moderately complex applications. You should be comfortable working with components, services, and modules, and have solid knowledge of how to handle data in an application.

The assessment includes seven tasks that build on each other and should take approximately 90 minutes to complete. We ask that you limit your total working time to 90 minutes for this assessment. We encourage you to submit your assessment regardless of if you completed every question or not.

## The API

This project uses json-server (https://github.com/typicode/json-server) as a mock customer data REST API 

To spin up the mock backend you need to run the following command in the terminal:

`json-server --watch db.json --port 3004`

This will start a local server on port 3004

eg GET to `http://localhost:3004/customers` fetches all customers. While DELETE to `http://localhost:3004/customers/1` deletes the customer with `"id": 1`

## Task steps

1. Create a new module called **`DashboardModule`**. This module should include a new component called **`DashboardComponent`**. The **`DashboardComponent`** should display a dashboard view that includes a chart showing the total revenue for each month of the current year. Use the mocked **`orders`** data provided in the boilerplate.
2. Extend the **`DashboardComponent`** created in task 1 to include a summary view that displays the total revenue and number of orders for the current month.
3. Create a new component called **`OrderListComponent`**. This component should display a list of orders, including their ID, customer name, order date, and total price. Use the mocked **`orders`** data provided in the boilerplate.
4. Extend the **`OrderListComponent`** created in task 3 to allow users to filter the list of orders by customer name and order date. Add input fields to the component that allow users to enter a search query and date range, and update the list of orders to show only those whose customer name matches the query and whose order date falls within the specified range.
5. Create a new module called **`AdminModule`**. This module should include a new component called **`AdminComponent`**. The **`AdminComponent`** should display a view that allows users to edit the details of a specific order, including the customer name, order date, and items. Use the mocked **`orders`** data provided in the boilerplate.
6. Add form validation to the **`AdminComponent`** to ensure that the user enters valid values when updating an order's details, including customer name, order date, and items.
7. Discussion: The current implementation of the **`OrderListComponent`** uses a simple filter function to filter the list of orders. Suggest and discuss any improvements or changes you could make to improve the performance and scalability of the filtering function. Explain your reasoning for your proposed changes.  You can add your discussion in your Pull Request as comments

## How to Submit

1. Fork the repository
2. Clone the repository to your local machine
3. Create a branch for task 1 and make your changes 
4. Create a branch for task 2 and your changes
4. Push your changes to your fork
5. Submit a pull request to the original repository
6. You can comment your PR with next steps, blockers, and comments if you would like

Note: Please submit the pull request within the 90 minute time window

Good luck, and we look forward to reviewing your submission!