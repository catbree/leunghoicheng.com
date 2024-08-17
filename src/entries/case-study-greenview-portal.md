---
title: "Case Study: Greenview Portal"
slug: /case-study-greenview-portal
date: 30 Dec 2023
description: "An enterprise webapp that helps hotel chains manage their sustainability data and efforts"
tags: productdesign casestudy
imageUrl: "/assets/entryAssets/greenview-portal-thumbnail.png"
---

[[toc]]

---

## Introduction

Back in 2019, **[Greenview](https://greenview.sg/about-us/)**, a company who worked in the world of hospitality and sustainability, came to our tech consultancy with a problem. They had a tool called **[Greenview Portal](https://greenview.sg/services/greenview-portal)**, which helps hotels manage their Environmental, Social, and Governance (ESG) data. It sounded great on paper, but the reality was far from it—clunky, difficult to use, and fell short of what businesses needed.

We had our work cut out for us: To rebuild Greenview Portal from the ground up, making it not just functional but user-friendly. This is a short story of how we transformed Greenview Portal into a tool that worked for its users.

## Existing Challenges

Initially, a full-scale redesign of Greenview Portal wasn't in the plan, but after speaking with users, stakeholders, and subject matter experts, it became clear that the system had some critical flaws.

<figure>
  <img src="/assets/entryAssets/greenview-portal-1.png" alt="Taken from a Green Key newsletter in 2018, collated snapshots of Greenview Portal and some of their features">
  <em>Taken from a Green Key newsletter in 2018, collated snapshots of Greenview Portal and some of their features</em>
</figure>

For starters, the system was designed with single-property users in mind, but that's not how the hotel industry works. Many users manage multiple hotels, and the system’s shortcomings forced them into frustrating workarounds that led to major inefficiencies.

Then there was navigation difficulties. Users were getting lost in the features, especially when they had to manage several hotels. We needed to restructure the navigation, using tree tests to make sure features were grouped in a way that made sense to the users

And finally the routine tasks. From entering data or generating reports, these actions were riddled with usability issues. New users struggled to get onboarded, and the existing ones dreaded the routine tasks because they were so cumbersome to use.

After discussions with Greenview, it was decided that Greenview Portal needed a complete overhaul rather than just a few minor tweaks.

## Walkthrough of design process

Over the three years I worked on this project, our team tackled numerous features and issues. Among the many challenges, the bulk input of data records stood out. It was a major pain point for our users and was one of the first features we developed. We aimed to transform this clunky process into a streamlined solution that users would actually enjoy using.

### 1. Research & Discovery

We began by talking to users about their experiences with the current system. They revealed a host of issues: managing multiple uploads and downloads led to confusion, tracking and fixing errors in lengthy Excel sheets was a struggle, and the system offered no feedback to confirm whether data uploads were successful.

One user's account stood out. They described the frustration of importing five years' worth of data for a sustainability report. With thousands of records to sift through and numerous files with similar names, they struggled hard.

These conversations pinpointed the core problem: users were grappling with a cumbersome data input process that made error management and file handling a real headache.

### 2. Concept Exploration

In exploring solutions for the bulk input of data records, we evaluated several options based on user feedback and initial discussions:

- **Excel upload**: Users would upload an Excel file directly to the system, improving on the current method by addressing key usability issues.
- **Receipt capture**: An idea to use image recognition for extracting data from receipts or documents.
- **In-app data entry**: Users would input data directly into a table within the app.
- **API integration**: Automated data import from energy providers directly into Greenview Portal.
- **Voice input**: Users could use voice recognition to enter data.

We quickly developed wireframes to assess feasibility. Receipt capture and voice input were discarded early due to budget constraints and inefficiency with large volumes of numeric data. API integration was also ruled out because it couldn’t provide comprehensive coverage for all users. We do have plans to integrate in the future as we expand our capabilities.

<figure>
  <img src="../assets/entryAssets/greenview-portal-5.png" alt="Decision points of ideas that didn't make it and shortlisted options">
  <em>Decision points of ideas that didn't make it and shortlisted options</em>
</figure>

Ultimately, we chose to combine **Excel upload** with **in-app data entry**. Users could upload data onto the app via Excel and receive real-time error feedback within the app, streamlining the process. This approach balanced familiarity with Excel and interactive error handling, addressing user needs effectively.

<figure>
  <img src="../assets/entryAssets/greenview-portal-6.png" alt="User Flow of Bulk Input Data Management Flow">
  <em>User Flow of Bulk Input Data Management Flow</em>
</figure>

### 4. Prototyping & User Feedback

With a rough concept in mind, we moved on towards user testing, putting a mock prototype in the hands of users who would use this feature frequently. We crafted scenarios that simulated real-world tasks to help them visualize how the feature might fit into their workflow. The prototypes weren't fully polished, but they provided enough substance for users to imagine their interactions and share their thoughts.

Here’s some key learnings from this phase:

- **Error visibility**: despite the new improvements, they still struggled to pinpoint errors in a massive dataset. This was a significant hurdle, so we responded by adding a summary view to pinpoint exactly which rows had issues, making it easier to address problems.

- **Terminology**: Another user pointed out a disconnect between the system’s terminology and their own. This mismatch led to confusion and inefficiency. To bridge this gap, we started developing a controlled vocabulary list to ensure that our terms matched the language users were familiar with.

- **Excel comfort**: During testing, it became clear that users were deeply accustomed to Excel’s features. The in-app table lacked some of these functionalities, which made editing in the in-app table feel awkward. To address this, we integrated some essential Excel-like features into our table.

<figure>
  <video controls>
    <source src="../assets/entryAssets/greenview-portal-7.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <em>Final propotype, one of the tasks which was to have a look at how the import will be handled, either through a copy-paste, or a file upload</em>
</figure>

### 6. Product specification

With the design finalized, we moved into the specification phase. We compiled a comprehensive product requirement document that consolidated all insights and decisions. This document guided the development team through drafting JIRA tickets with clear acceptance criteria. It also included detailed product specification screens to ensure clarity on what needed to be built.

<figure>
  <video controls>
    <source src="../assets/entryAssets/greenview-portal-8.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <em>Video of how it actually works in action</em>
</figure>

### Other features

While this feature case study of bulk data record input captures our rough feature design process, I've also worked on many other features. Here are some screenshots of other parts of the system:

<figure>
  <img src="../assets/entryAssets/greenview-portal-9.png" alt="Inputted environmental data records are listed in all record section, this powers alot of insights in the Portal">
  <em>Inputted environmental data records are listed in all record section, this powers alot of insights in the Portal</em>
</figure>

<figure>
  <img src="../assets/entryAssets/greenview-portal-10.png" alt="Best Practices">
  <em>Best Practice are industry standard practices collected by Greenview, this is a self-check by hotels to evaluate if they're following the typical hotel standards. Serves as great knowledge. Answer this questions to get an understanding of where you stand!</em>
</figure>

<figure>
  <img src="../assets/entryAssets/greenview-portal-11.png" alt="Environmental Metrics">
  <em>For users to see what data was put into the portal with specific metrics so they can quickly know at a glance what the numbers are.</em>
</figure>

## Reflection

The most significant takeaway from this project was understanding the crucial role of embedding empathy within my team. Initially, we struggled to effectively integrate user feedback into our design process, resulting in wasted time and missed insights from those who took the effort to provide their input. Over time, I worked on weaving this feedback throughout the design phases, ensuring that empathy became a driving force instead of checkbox on a todo list.

Creating a culture where empathy informs design is an ongoing challenge, especially as team sizes grow and processes become more entrenched. But I recognise that it is crucial for meaningful design and user satisfaction, and will continue to work on this in future projects.

Another key takeaway was the importance of transparent communication. I learned that admitting when I didn’t have the answers and involving the team in problem-solving built trust and often improved our approach. Initially, I feared that this openness might make me appear incompetent, but I discovered that facing issues honestly is far better than risking a failed product. This transparency not only fostered a more collaborative environment but also encouraged others to be open and constructive. Moving forward, I’m committed to fostering a culture of honesty and mutual support in all future teams.

## Impact

Initially, the web app had a modest user base of only around 20 active users a month. By the end of my time with the project, that number had grown to over 5,000 users and approximately 2,500 hotels.

The system supports several prominent brands in the hospitality industry, including Mandarin Oriental and Ascott, among many others. This expansion indicates that our efforts have been successful in meeting the needs of a diverse range of clients, with the full extent of its impact continuing to develop over time.
