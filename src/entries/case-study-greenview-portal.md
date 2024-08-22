---
title: "Case Study: Greenview Portal"
slug: /case-study-greenview-portal
date: 30 Dec 2023
description: "An enterprise web app that helps hotel chains manage their sustainability data and efforts"
tags: productdesign casestudy
imageUrl: "/assets/entryAssets/greenview-portal-thumbnail.png"
---

[[toc]]

---

## Introduction

Back in 2019, **[Greenview](https://greenview.sg/about-us/)**, a company who worked in the world of hospitality and sustainability, came to our tech consultancy with a problem. They had a tool called **[Greenview Portal](https://greenview.sg/services/greenview-portal)**, which helps hotels manage their Environmental, Social, and Governance (ESG) data. It sounded great on paper, but the reality was far from it—clunky, difficult to use, and fell short of what businesses needed.

We had our work cut out for us: To rebuild Greenview Portal from the ground up, making it not just functional but user-friendly. This is a short story of how we transformed Greenview Portal into a tool that worked for its users.

## Existing Challenges

Initially, a full-scale redesign of Greenview Portal wasn’t in the plan, but after speaking with users, stakeholders, and subject experts, the system had some critical flaws.

<figure>
  <img src="/assets/entryAssets/greenview-portal-1.png" alt="A collated image of three website screenshots. There is one main screenshot, with two screenshots on both sides placed behind as supporting images. The screenshots comprise various visual graphs and data metrics related to sustainability.">
  <em>Taken from a Green Key newsletter in 2018, collated snapshots of Greenview Portal and some of their features</em>
</figure>

For starters, the system placed too much emphasis on single-property users, which isn’t the case for the hotel industry. Many users manage multiple hotels, and the system’s shortcomings forced them into inefficient workarounds.

Next, there were navigation issues. Users were getting lost in the features, especially when managing multiple hotels. We restructured the navigation with tree tests to ensure that we grouped features in a way that made sense to users.

Finally, usability problems plagued routine tasks like data entry and report generation. New users struggled to get onboarded, and existing users dreaded these complex tasks.

After discussions with Greenview, Greenview Portal was going to receive a complete overhaul, rather than just minor adjustments.

## Walkthrough of design process

Over the three years I worked on this project, our team tackled various features and issues. Among the many challenges, the bulk input of data records stood out. It was a major pain point for our users and was one of the first features we developed. We aimed to transform this clunky process into a streamlined solution that users would enjoy using.


### 1. Research & Discovery

We began by talking to users about their experiences with the current system. They revealed a host of issues: managing multiple uploads and downloads led to confusion, tracking and fixing errors in lengthy Excel sheets was a struggle, and the system offered no feedback to confirm whether data uploads were successful.

One user’s account stood out. They described the frustration of importing five years’ worth of data for a sustainability report. With thousands of records to sift through various files with similar names, they struggled hard.

These conversations pinpointed the core problem: users were grappling with a cumbersome data input process that made error management and file handling a real headache.

### 2. Concept Exploration

In exploring solutions for the bulk input of data records, we evaluated several options based on user feedback and initial discussions:

- **Excel upload**: Users would upload an Excel file directly to the system, improving on the current method by addressing key usability issues.
- **Receipt capture**: An idea to use image recognition for extracting data from receipts or documents.
- **In-app data entry**: Users would input data directly into a table within the app.
- **API integration**: Automated data import from energy providers directly into Greenview Portal.
- **Voice input**: Users could use voice recognition to enter data.

We quickly developed wireframes to assess feasibility. Budget constraints and their inability to handle large amounts of numeric data efficiently led to the discarding of receipt capture and voice input. API integration was also ruled out because it couldn’t provide comprehensive coverage for all users. 

<figure>
  <img src="../assets/entryAssets/greenview-portal-5.png" alt="There are five boxes of shortlisted options. Number 2 invoice capture and number 5 voice input were crossed out at decision point 1, eliminated because of budget constraint. Number 4 API integration was crossed out at decision point 2, eliminated because of minimal coverage. The remaining options are number 1 excel upload and number 3 in-app entry which were evaluated for their pros and cons. Under excel upload, pros: user owns data, can edit as necessary. Cons: Data validation via Excel is cumbersome. Under in-app entry, pros: more interactivity, easier error-handling. Cons: Updates within the app aren’t saved till submission.">
  <em>Decision points of ideas that didn’t make it and shortlisted options</em>
</figure>

Ultimately, we combined **Excel upload** with **in-app data entry**. Users could upload data onto the app via Excel and receive real-time error feedback within the app, streamlining the process. This approach balanced familiarity with Excel and interactive error handling, addressing user needs effectively.

<figure>
  <img src="../assets/entryAssets/greenview-portal-6.png" alt="Title: Bulk Input Records User Flow. Subtext: Scenario Simon wants to input his monthly environmental data. There are about 30 records he wants to input, so he uses the bulk input function. Below, there is a flow diagram made of boxes and arrows. Description of flow: Simon going to data management to input his data. Simon access the bulk input record page. The next point is a branching logic. If Simon already has an existing template file, Simon can move on to fill it out with his month’s data records. If Simon doesn’t have it, he needs to download it first. Next, he uploads the file onto the page, and clicks on a validate button for the system to do a data validation. If there are no errors found during the validation, Simon can submit data record rows. If there are detected errors, Simon will review the flagged row(s) along with a summary. Next, he clicks validate again to, which brings him back to a previous step. This flow seems to repeat until Simon successfully submits his data and sees a toast notification that data submission is successful.">
  <em>User Flow of Bulk Input Data Management Flow</em>
</figure>

### 3. Prototyping & User Feedback

With a rough concept in mind, we moved on towards user testing, putting a mock prototype in the hands of users who would use this feature frequently. We crafted scenarios that simulated real-world tasks to help them visualize how the feature might fit into their workflow. While the prototypes are not perfect, they offered enough information for users to envision their interactions and share their feedback.

Here are some key learnings from this phase:

- **Error visibility**: Despite the new improvements, they still struggled to pinpoint errors in a massive dataset. This was a significant hurdle, so we responded by adding a summary view to pinpoint exactly which rows had issues, making it easier to address problems.

- **Terminology**: Another user pointed out a disconnect between the system’s terminology and their own. This mismatch led to confusion and inefficiency. To bridge this gap, we started developing a controlled vocabulary list to ensure that our terms matched the language users were familiar with.

- **Excel comfort**: During testing, it became clear that users were deeply accustomed to Excel’s features. The in-app table lacked some of these functionalities, which made editing in the in-app table feel awkward. To address this, we integrated some essential Excel-like features into our table.

<figure>
  <video controls alt="A screen capture of someone navigating through a website. Title: Bulk Input Environmental Records. There is a blank table with rows and columns. The cursor clicks on the upload sheet button, which opens up a modal. Modal Title: Upload excel spreadsheet. The modal contains of a section which prompts users to drag and drop an excel file. After a slight movement drag by the cursor, a spreadsheet is being uploaded. After 3 seconds, the modal title updates to: Spreadsheet successfully uploaded. The cursor clicks on the close button, which brings the user back to the original page, with the table now filled out with rows of information.">
    <source src="../assets/entryAssets/greenview-portal-7.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <em>A section of the prototype used during a task for users to try out data importing, done either through a copy-paste or a file upload.</em>
</figure>

### 4. Product specification
After finalizing the design, we transitioned to the specification phase. We created a comprehensive product requirement document that incorporated all insights and decisions. This document guided the development team through drafting Jira tickets with clear acceptance criteria. It also included detailed product specification screens to ensure clarity on what needed to be built.

<figure>
  <video controls alt="A screen capture of someone navigating through Greenview Portal. The cursor clicks on Input Bulk Records. After a short split-second load, it brings the user to a page. Title: Bulk Input Environmental Usage Records. Below it there are a few action options such as ‘Add a row’, ‘Clear all rows’, and a row count. There’s also an option to download the template, upload sheet, or check for validation. The user copy and pasted all their data into a blank table of rows and columns, which populates it. There seem to be 12 rows. The user clicks on the check for validation button, and after 2 seconds, two banners appeared on top of the table. A red banner appears which says ‘1 issue is detected. Please fix the following rows: 12’. And a yellow banner appeared below it which says ‘1 possible issue detected. Records with this issue can be submitted. Please check the following rows: 5’. The user then scrolls down to check the following rows, which are then shown to have errors upon hovering regarding invalid dates. The user corrects them and checks for validation again. This time, the two banners disappeared, and are replaced by a green banner which states that ‘no issues are found.’ The user clicks submit and a toast confirmation appears to show that data is successfully added.">
    <source src="../assets/entryAssets/greenview-portal-8.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <em>A working demonstration of how the bulk input feature works in Greenview Portal</em>
</figure>

## Feature showcase
While this feature case study of bulk data record input captures our rough feature design process, I’ve also worked on many other features. Here are some screenshots of other parts of the system:

<figure>
  <img src="../assets/entryAssets/greenview-portal-9.png" alt="A screenshot of Greenview Portal. Title: Environmental All Records. The majority of the image shows a table with many rows and columns of environmental data, along with information such as the type of data, period, usage, and cost. There are also edit and delete actions on each row. There are actions on top of the table that says 'Download as excel' and 'input'.">
  <em>Inputted environmental data records are stored in a place with all other records. These records are used to power insights in Greenview Portal.</em>
</figure>

<figure>
  <img src="../assets/entryAssets/greenview-portal-10.png" alt="A screenshot of Greenview Portal. Title: Best Practices. Subtitle: Understand and benchmark sustainability practices to similar standards by answering these best practice questions. There are 8 categories, and they seem to be clickable, with a selected category called Social Impact. Within each category, there is a progress bar that shows the number of answered questions. Under it, there is a large progress bar that seems to show answered questions and their response answers in relation to each other. Below are two questions. The first question has the following text. Question: Does the property have written statements to show how it makes sure no discrimination takes place in any way, in any area of its business (e.g. recruitment, general employment, training, promotion)? Answer: Yes, no. There is an option to add a comment. It also has the following tags: Humans Rights and Modern Slavery, GSTC, Policy, Reporting and Communication.">
  <em> Best Practice is a page that collects industry standard practices based on Greenview’s expertise. Hotels use this as a self-check questionnaire to evaluate if they are following the typical hotel standards and serves as knowledge in Greenview Porta’s knowledge database, which is called Guidance Library.</em>
</figure>

<figure>
  <img src="../assets/entryAssets/greenview-portal-11.png" alt="A screenshot of Greenview Portal. Title: Greenview Portal Performance. There are six sections, 5 of which are environmental metrics for different data. In each, it tells you the metric type, its unit, its value and a percentage that tells you whether it has increased or decreased. For example, the first section has the following text: Total Energy (Facility Only) per square meter/square feet (GFA). 122.00 kilowatt hour (per square meter). A green background text of 11.4% with a downward arrow.">
  <em>For users to have a quick glance at their up-to-date environmental metrics are, they can access the performance tab from their landing page. Our users also take screenshots of this for their sustainability meetings to keep everyone up to date.</em>
</figure>

## Reflection
The most significant takeaway from this project was understanding the crucial role of embedding empathy within my team. Initially, we struggled to integrate user feedback into our design process effectively, resulting in wasted time and missed insights from those who took the effort to provide their input. Over time, I worked on weaving this feedback throughout the design phases, ensuring that empathy became a driving force instead of a checkbox on a to-do list.

Creating a culture where empathy informs design is an ongoing challenge, especially as team sizes grow and processes become more entrenched. However, it is crucial for meaningful design and user satisfaction for me, and I will continue to work on this in future projects.

Another key takeaway was the importance of transparent communication. I learned that admitting when I didn’t have the answers and involving the team in problem-solving built trust and often improved our approach. Initially, I feared that this openness might make me appear incompetent, but I discovered that facing issues honestly is far better than risking a failed product. This transparency not only fostered a more collaborative environment, it also encouraged others to be open and constructive.

## Impact
Initially, the web app had a modest user base of only around 20 active users a month. By the end of my time with the project, that number had grown to over 5,000 users and approximately 2,500 hotels.

The system supports several prominent brands in the hospitality industry, including Mandarin Oriental and Ascott, among many others. This expansion indicates that our efforts have been successful in meeting the needs of a diverse range of clients, with the full extent of its impact continuing to develop with time.