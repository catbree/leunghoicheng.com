---
title: "ESG Bulk Data Input"
slug: /esg-bulk-data-input
date: 30 Dec 2023
description: "An ESG input feature designed to streamline the entry of large historical datasets."
tags: productdesign casestudy
imageUrl: "/assets/entryAssets/bulk-input-thumbnail.gif"
---

The ESG bulk data management feature streamlines the entry of large datasets.

**The problem:**  Single-entry inputs were time-consuming, error-prone, and inefficient for managing large volumes of ESG data.

**The solve:** We developed a bulk data input feature that allowed users to upload large amounts of ESG data, improving efficiency and accuracy.

**My role:** I was the sole product designer, working with a remote team of engineers and a product manager.

<figure>
  <img className="image-container" src="/assets/entryAssets/bulk-input-1.png" alt="A skeleton load of the bulk input table.">
</figure>

## Exploratory Research
We spoke with 5 users to understand their frustrations with the existing system and how they currently handled large datasets.

<figure>
  <img className="image-container" src="/assets/entryAssets/bulk-input-2.png" alt="4 key findings: excel-based workflows, tedious single entry, historical data challenges, and error-prone validation.">
</figure>

## Design Process
We explored several options for improving data entry, including examining existing solutions in the market. Based on user feedback and initial testing with lo-fi wireframes, we shortlisted our options.

<figure>
  <img className="image-container" src="/assets/entryAssets/bulk-input-3.png" alt="There are five boxes of shortlisted options. Number 2 invoice capture and number 5 voice input were crossed out at decision point 1, eliminated because of budget constraint. Number 4 API integration was crossed out at decision point 2, eliminated because of minimal coverage. The remaining options are number 1 excel upload and number 3 in-app entry which were evaluated for their pros and cons. Under excel upload, pros: user owns data, can edit as necessary. Cons: Data validation via Excel is cumbersome. Under in-app entry, pros: more interactivity, easier error-handling. Cons: Updates within the app aren’t saved till submission.">
</figure>

We opted for a combination of Excel Upload and In-app Data Entry to balance familiarity and real-time validation. 

Once the concept was clearer, we created a user story map to define the key tasks users needed to complete, prioritize features, and ensure we aligned with user goals. This allowed us to understand which parts of the workflow needed the most attention.

<figure>
  <img className="image-container" src="/assets/entryAssets/bulk-input-4.png" alt="Screenshot of a user story map on Miro for bulk input.">
</figure>

With the team aligned on what was needed, I created a user flow to detail how users would upload and validate data. This ensured that users could correct errors and flag anomalies (such as unusual values) before finalizing their inputs.

<figure>
  <img className="image-container" src="/assets/entryAssets/bulk-input-5.png" alt="Title: Bulk Input Records User Flow. Subtext: Scenario Simon wants to input his monthly environmental data. There are about 30 records he wants to input, so he uses the bulk input function. Below, there is a flow diagram made of boxes and arrows. Description of flow: Simon going to data management to input his data. Simon access the bulk input record page. The next point is a branching logic. If Simon already has an existing template file, Simon can move on to fill it out with his month’s data records. If Simon doesn’t have it, he needs to download it first. Next, he uploads the file onto the page, and clicks on a validate button for the system to do a data validation. If there are no errors found during the validation, Simon can submit data record rows. If there are detected errors, Simon will review the flagged row(s) along with a summary. Next, he clicks validate again to, which brings him back to a previous step. This flow seems to repeat until Simon successfully submits his data and sees a toast notification that data submission is successful.">
</figure>


## Usability Testing
After building a prototype of the bulk data input feature, we tested it with real users who frequently handle large datasets. We ran through scenarios where users had to upload and validate data, focusing on error handling and workflow efficiency.

<figure>
  <video autoPlay loop muted playsInline src="/assets/entryAssets/bulk-input-6.mp4" alt="A screen capture of someone navigating through a website. Title: Bulk Input Environmental Records. There is a blank table with rows and columns. The cursor clicks on the upload sheet button, which opens up a modal. Modal Title: Upload excel spreadsheet. The modal contains of a section which prompts users to drag and drop an excel file. After a slight movement drag by the cursor, a spreadsheet is being uploaded. After 3 seconds, the modal title updates to: Spreadsheet successfully uploaded. The cursor clicks on the close button, which brings the user back to the original page, with the table now filled out with rows of information."> Your browser does not support the video tag.
</figure>

After synthesizing our findings, we prioritized and assigned action items to address the key usability issues.

<figure>
  <img className="image-container" src="/assets/entryAssets/bulk-input-7.png" alt="Three key usability problems as well as the action items that were done to address them.">
</figure>

## Feature Demonstration
This is a demonstration of the feature using a mock hotel and sample data.
<figure>
  <video autoPlay loop muted playsInline src="/assets/entryAssets/bulk-input-8.mp4" alt="A screen capture of someone navigating through Greenview Portal. The cursor clicks on Input Bulk Records. After a short split-second load, it brings the user to a page. Title: Bulk Input Environmental Usage Records. Below it there are a few action options such as ‘Add a row’, ‘Clear all rows’, and a row count. There’s also an option to download the template, upload sheet, or check for validation. The user copy and pasted all their data into a blank table of rows and columns, which populates it. There seem to be 12 rows. The user clicks on the check for validation button, and after 2 seconds, two banners appeared on top of the table. A red banner appears which says ‘1 issue is detected. Please fix the following rows: 12’. And a yellow banner appeared below it which says ‘1 possible issue detected. Records with this issue can be submitted. Please check the following rows: 5’. The user then scrolls down to check the following rows, which are then shown to have errors upon hovering regarding invalid dates. The user corrects them and checks for validation again. This time, the two banners disappeared, and are replaced by a green banner which states that ‘no issues are found.’ The user clicks submit and a toast confirmation appears to show that data is successfully added."> Your browser does not support the video tag.
</figure>

## Impact
The average time for monthly data entry was reduced from over an hour to just 10 minutes, by streamlining the process of uploading, validating, correcting, and submitting a template. Time savings increase with larger datasets.