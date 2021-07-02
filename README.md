# Djembe Front-End Capstone

## Overview

This is a product display page that allows for the user to interact with the main image and allows for viewing other related products. Users can ask questions related to the product and provide answers. Users can rate and review their purchases of the product.

## Table of Contents
* [Product Overview](#product-overview)
* [Related Products](#related-products)
* [Questions and Answers](#questions-and-answers)
* [Ratings and Reviews](#ratings-and-reviews)


## Installation

Use npm install to install dependencies
```bash
npm install
```
Use npm run client to start webpack to compile bundle
```bash
npm run client
```
Use npm start to run server
```bash
npm start
```

### [Product Overview](#product-overview)
![Product Overview](readme-screenshots/1-overview.png?raw=true "Optional Title")

### [Related Products](#related-products)
![Related Products](readme-screenshots/2-related-products.png?raw=true "Optional Title")

Related Products section has Related Products list and Your Outfit List. Both lists consist of clickable cards in a carousel like format. Each card will display the image and brief information for a single product with an action button.

Related Products list contains products associated with the current product determined by the company. The star action button opens a window comparing the details of the current product to the product that was selected from the list.

Your Outfit List displays a "Add to Outfit" action card, and products that the user has selected to group together. The x action button removes the selected product from the Outfit List.

### [Questions and Answers](#questions-and-answers)
![Question and Answers](readme-screenshots/3-questions-and-answers.png?raw=true "Optional Title")

Question Search Component allows the user to search for specific questions that may have been asked regarding a product. After 3 character inputs, the questions list will display questions matching the input and will continue to update the list as the user types. If the characters are below 3, the display will display the defaulted questions and answers.

By default, the questions list will display the 2 most helpful questions as well as 2 most helpful questions. If there are more than just the 2 default questions, the 'More Answered Question' button will appear and will increase the number of questions displayed by 4 each time until there are no more additional questions.

On the answers, if there are more than 2 answers, there will be a 'Show more answers' button that will display ALL the answers for the specific question.
In the answers list, each answer will be accompanied by a helpful link and a report link. Clicking 'Yes' next to helpful will increase the yes count but you can only press it once. Like the helpful button, the report button can only be clicked once as well and once clicked, the report text will change to reported.

The user can ask a question by clicking 'Add a Question' button which will open an modal with the 'Username', 'Email', and 'Question' fields. These fields are required fields in order to submit the question. If the fields are not completed, an alert will display which fields are missing.

If the user wishes to answer a question, the user can click on 'Add Answer' which will open an modal with the 'Username', 'Email', and 'Answer' fields. There is also a 'Upload Photo' button which allows the user to upload up to 5 pictures. As each photo is uploaded, they will be displayed above the button in the form of thumbnails.

### [Ratings and Reviews](#ratings-and-reviews)
![Ratings and Reviews](readme-screenshots/4-ratings-and-reviews.png?raw=true "Optional Title")


## Team Members
* Andre Boussarath - https://github.com/aboussarath
* Kingsley Allen - https://github.com/kingsleyallen
* Huiqing Li - https://github.com/sharplessHQ
* Simon Si - https://github.com/Sim0nSl1003


