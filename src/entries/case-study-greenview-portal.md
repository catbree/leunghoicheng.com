---
title: "Case Study: Greenview Portal"
slug: /case-study-greenview-portal
date: 30th December 2024
description: "An enterprise webapp that helps hotel chains manage their sustainability data and efforts"
tags: productdesign casestudy
imageUrl: "/assets/entryAssets/greenview-portal-thumbnail.png"
---

Greenview Portal is an enterprise web app that helps hotels and hotel companies manage their sustainability-related data, reporting, and efforts. 

Here's a page that shares the [key features of Greenview Portal](https://greenview.sg/services/greenview-portal).
___

[[toc]]
___

## Introduction
Greenview Portal was created by [Greenview](https://greenview.sg/about-us/), a company which supports the world's leading hospitalisation organisations with their Environmental, Social and Governance (ESG) requirements. Greenview Portal was envisioned to be a one-stop-shop for companies to handle all their sustainability matters in a single place.

In 2019, Greenview approached the tech consultancy I was in to work on their Greenview Portal. While prospective clients saw value in the product's features, the web app as it stands was too cumbersome to use and failed to meet business needs.

The development team was assembled and I was the only product designer. We had one vision — Rebuild Greenview Portal from scratch with a focus on usability.

## Existing Challenges

![Taken from a Green Key newsletter in 2018, collated snapshots of Greenview Portal and some of their features](/assets/entryAssets/greenview-portal-1.png)
*A collated snapshot of Greenview Portal captured in its prior glory from a Green Key newsletter in 2018*

The original plan did not involve an entire overhaul. At the start of the project, we took the time to familiarise with the hospitality and sustainability domain. We spoke to subject matter experts, users, and stakeholders to gain their perspective regarding the existing solution.

There was a long-running list of frustrations, with these three major points repeatedly brought up.

### 1. Navigation was a pain
Users were getting lost amidst the numerous features that Greenview Portal had. This gets worse when a user has to manage multiple hotel properties. 

To address this issue, we had to restructure the existing information architecture to make it more intuitive for our users to navigate. We did a series of tree tests to work out the natural grouping of certain areas. This was something we repeated along the way when new features were added and we did not have the confidence of knowing where it should go.

![Sample tree task](/assets/entryAssets/greenview-portal-3.png)
*A sample tree task that we asked our users to do*

### 2. Unaccounted primary use cases
The existing solution did not consider that a significant portion of users manage multiple hotel properties. These properties were also grouped by similar attributes such as brand or region during reporting. Workarounds were done in the existing solution to allow for the grouping of properties. It kind of worked, but was extremely painful to use. Switching between properties that they managed required alot of time and steps for something they had to do often.


### 3. Frequent actions were cumbersome
Many common actions such as inputting data records and reporting were riddled with usability issues. It made these actions difficult to adopt for new users, and existing users dreaded when they had to do something in Greenview Portal.

With these major concerns in mind, it was decided that a rebuild was necessary, instead of working off the existing solution.

## Powered by interview insights
Throughout the project, qualitative interviews were our primary method for connecting with users as the existing system initially had too few users to yield meaningful quantitative data.

With the help of Greenview consultants, we engaged Greenview Portal's corporate clients to participate in these interviews. It gave us access to a broad range of perspectives. We heard from decision-makers considering a Greenview Portal subscription, middle managers ensuring the efficient use of Greenview Portal in their company, and everyday users inputting data on behalf of their companies.

Over time, we incorporated these interviews into our regular workflow, branding them as "sharing sessions" to make them less intimidating. Each session, held twice a month, focused on different areas depending on the features we were developing at that time. This approach ensured consistent user feedback on features we were less confident about.

![Sharing sessions in our cadence](../assets/entryAssets/greenview-portal-4.png)
*User research cadence in our cycle, twice a week, we schedule sessions on Monday and Tuesday*

I later realized that this practice was uncommon in other companies, and deeply valued the opportunity to engage with so many corporate users during development. It was a privilege to have earned our Greenview's trust to directly interact with their corporate clients.

One key lesson I learnt was the difficult art of prioritisation. While I naturally want to solve every problem and pain point, I had to learn to objectively capture and weigh user feedback. This meant making decisions on what needed to be addressed first, while ensuring all users felt heard, even if their issues cannot be prioritised immediately.

## Bulk Input Records Feature Development
During my three years on this project, we developed numerous features and tackled countless tickets (too many to count!). For this case study, I'll focus on the bulk input of data records into the system. I chose this feature because it is a common action, and is also one of the earlier features.

### 1. Research & Discovery
We started the session by asking that they share about their current experience with the existing solution. And they shared a bunch of usability issues.

- Multiple uploads and downloads result in numerous files, leading to confusion about which file is which.
- Users struggle to identify and correct mistakes, especially in excel table with numerous rows.
- The system lacks validation feedback and confirmation for successful uploads

>When we first started bringing data into the system, I was tasked to bring in the past 5 years of records so that we can run a 5-year report as part of our sustainbility reportings.. We had so many errors... many lines of records, over a thousand. There were so many rows of data, it was difficult to keep track of what went wrong. Thankfully we had our Greenview consultant to help us with this issue.

>I had so many files with the same name with just abit of variation between each. Import and export is so confusing, especially when you're buried in files with rows and rows of numbers.

These fuelled our problem area.

### 2. Problem definition
Problem Context: 
Data records drive many features in our system. We handle two main types: quantitative data (eg: energy and water usage in hotels), and qualitative data (eg: efforts taken by a hotel to promote employee well-being). The bulk input feature focuses solely on quantitative data due to its templated nature, while qualitative data is more flexible and was excluded from this feature.

The current process involves the user uploading an excel file, the system lets users download a new excel file which includeds edits to flag errors. Users repeatedly upload and download files until the records are error-free. Users found the existing solution too cumbersome.

Use case:
Users typically input data on a monthly basis, averaging around 30 records each time depending on the data that the hotel is interested to record. Users can also input thousands of records if entering historical data.

Current problem:
We spoke with users to pinpoint the exact issues they were facing. In general, users found the existing solution too cumbersome.

Goal: The bulk record input function should support bulk data entry of up till 600 records, clearly identifies and highlights record errors, and confirms successful data saving upon error-free submission.

### 3. Concept Exploration

We explored several concepts for bulk data management:
- Excel Upload: Users can upload an Excel file directly to the system, following the current method but addressing usability issues.
- Receipt Capture: Users can capture receipts or documents using image recognition to extract data.
- In-App Data Entry: Users can enter data records directly into an Excel-like table within the website.
- API integration: Automate data import from energy providing companies, allowing seamless data syncing
- Voice input

Each concept was minimally wireframed to assess feasibility, user experience, and convey the general idea. 

![Decision points of ideas that didn't make it and shortlisted options](../assets/entryAssets/greenview-portal-5.png)
*Decision points of ideas that didn't make it and shortlisted options*

The receipt capture concept was deemed unfeasible due to budget constraints. Additionally, users felt that while an invoice attachment feature could be useful, capturing every receipt in bulk would be cumbersome if their primary need was to input numbers. Voice inputs will struggle with recognition, in addition, data records involve alot of numeric and specialised data, so for large volumes it will be slower than typing or uploading files.

API integration was excluded because it only worked for a few and major energy providers. There's no 100% coverage, which makes it a bad option for the primary bulk input.

After further decision, We decided to blend the first two options to leverage their benefits. 

- Excel Upload: Users upload an Excel file containing their data. They can also download a template for the required columns.
- In-App Table: The uploaded data is displayed on the website. Errors are highlighted directly in the table, showing users where mistakes are and which lines they are in.

![User Flow of Bulk Input Data Management Flow](../assets/entryAssets/greenview-portal-6.png)
*User Flow of Bulk Input Data Management Flow*

This approach combines the convenience of Excel with interactive error handling. For future, we have intentions to add API integration for major energy companies. This was attractive to the larger corporations.

### 4. Prototype and User Research

We moved to prototyping and user testing next. We targeted users who fit our personas, specifically those like Sean who would be entering data.

We then shared the prototype for user testing. These prototypes weren’t fully functional or polished—complete functionality wasn’t necessary at this stage, as feedback often leads to significant revisions. We asked users to imagine the flow and provide their insights.

Key insights included:

- Difficulty in viewing errors with large datasets. One user shared their experience with entering historical data for a five-year report, highlighting challenges with handling extensive records.
- Frustration with referencing specific terms for each column.
- Need for updating controlled vocabulary to match users' terminology.
- Issues with partial uploads causing duplicated records, requiring manual identification and deletion of errors.

### 5. Synthesised Findings
Research is only as useful as the synthesized findings we share. Conducting research is pointless if the insights don't effectively reach and inform my team and my client. We disseminate this information during our weekly design reviews.

It's crucial to distill information into actionable takeaways. We all know that nobody watches the lengthy full interview videos that we keep in our document references. We also include quote highlights and timestamp to crtain key moments to make it easier for the team to review the most important parts.

 This summary process also includes updating the original idea based on the findings and discussing any assumptions that were validated or disproved. Sometimes, despite user feedback, we may decide to proceed with our original approach. In such cases, we move forward anyway with a clear understanding of the risks and implications.

Some additional insights that popped up (and continued to resurface) revealed issues like language proficiency and general tech literacy amongst our users. While these challenges weren't initially prioritized, they became more apparent over time. Continuous witness of user struggles can help to justify the need for prioritisation of certain features, even if they require more time and resource. As product designers, it's our role to advocate for the user experience.  This doesn’t negate the importance of other factors like business needs; rather, it’s our responsibility to champion the user perspective and ensure it’s considered in decision-making.

Another key point was that our entire team was highly user-centric, which I consider essential. It’s also the product designer’s role to foster this quality in everyone involved.

### 6. Product specification
Throughout the process, we maintain a product requirement document that consolidates all findings and discussions. At this stage, we draft JIRA tickets outlining acceptance criteria for developers and include product specification screens to clarify what needs to be built.

Here is an example of the final product specification screens:

<video controls>
  <source src="../assets/entryAssets/greenview-portal-7.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

*Final propotype, one of the tasks which was to have a look at how the import will be handled, either through a copy-paste, or a file upload*

### 7. User Acceptance Testing
Once the developers complete the tickets, we conduct User Acceptance Testing (UAT). Our clients are involved in this process as well. We triage all issues that arise during testing, allowing developers to address concerns efficiently and collaboratively with our clients. This collaborative approach helps streamline the process and ensures that both client and user needs are addressed.

### Final Feature

Here's a video of the final feature in action:

<video controls>
  <source src="../assets/entryAssets/greenview-portal-8.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

*Video of how it actually works in action*

## Repeat again, and again!

We follow an agile approach. Agile itself sparked some debate about its effectiveness. That's out-of-scope for discussion in this article. 

But in summary, while it worked well for the initial phases, we faced challenges towards the end. Agile's focus on small, incremental work often led us to overlook larger objectives. We realized that sometimes, a single significant feature was more critical than multiple smaller ones.

To address this, we transitioned to a 3-month agile cycle with periodic re-evaluation of overall goals. This approach combines agile with some elements of waterfall, allowing for initial planning while still adapting and updating as needed.

![Sample timeline](../assets/entryAssets/case-study-greenview-thumbnail.jpg)


"In general, this outlines the rough process we followed for designing a feature. Here are some highlights of other features we developed over the three years. We rinse and repeat, continually refining our product and making it better over time.

![Sample timeline](../assets/entryAssets/case-study-greenview-thumbnail.jpg)
![Sample timeline](../assets/entryAssets/case-study-greenview-thumbnail.jpg)
![Sample timeline](../assets/entryAssets/case-study-greenview-thumbnail.jpg)


## Reflection

As the sole product designer, I had a unique learning opportunity. From the start, we prioritized user experience over UI and interactions due to our fast-paced work environment. This decision led to a growing design backlog. Although the features functioned well, their appearance often felt lackluster. While this didn't impact users significantly, it created a subtle sense of untidiness. Eventually, we addressed this during a rebrand in my third year when our team expanded, at my time of departure there were now 4 product designers. So I'm glad this is now finally addressed, even though I was not able to stick around to see the full change!

I initially created several color palettes without clear naming conventions. By the second year, I revised and named them but failed to communicate these changes effectively to the developers. This led to inconsistencies and difficulties during the rebrand, though the sensible palette choice minimized user impact. Standardizing these colors was challenging but a valuable lesson. Or just standardising anything in general

So from the beginning, we prioritised a lot of on the user experience. The UI and interactions were de-prioritised. Primarily because we were working so fast. It did build a design backlog over time, and it got bigger and bigger. Unfortunately, it was never prioritised, because the features already work, they just look slightly ugly and maybe it may be glaring to you, but to users it doesn't. But what this does is I believe it creates an air of subconscious vibe of untidy, it's never 100% good but it's not bad either. And it never gets picked up!!! We did pick it up eventually, at the cost of some budget at some point because we wanted to rebrand which is thanks to the client also agreeing. But personal note, I wished I kept asking the question of "will this change in the future? how sure am i?" In my first year, i made a bunch of color palettes, I did not name them to scale. Only for the second year, i made changes and added colors and I named them, but didn't communicate it clearly with a software developer. When it came to updating the rebrand, there were so many different colors, and some were the same color just named differently. Thankfully I made a sensible choice of color palette so it wasn't that obvious to the everyday users. But it was a pain to standardise.

Anyways, along with the want to rebrand the website, we took this chance to make some drastic changes, from reskinning the UI, to changing the navigational elements.

We had an ad-hoc component library, but this time we wanted to make a formalised one. And I was part of the initial bits before I left!

I learnt this and it took me really long. I didn't want to disturb them (or anyone as a matter of fact). But what's more annoying is trying my best to account for them, when I don't know anything of their discipline, and it turns out horribly wrong, and I have my software engineer being very upset that I just accidentally passed off something to the client that turned out to really difficult to do. Not to forget having to turn around going to the client with my tail tucked between my legs and going "sorry... remember that thing we agreed on? we can't do it..." But that too, became something that was learn over time, it was important to say "I don't know" let me check and get back to you. That was valid. That's also art in bringing my software engineer tasked for that feature to do the quickest vibe check: heyy so i was thinking of this, it would do this and that, what do you think? More often than not, even if feasible, their response would make you reconsider your optins.

Did I regret this? Yes and no. I learnt that sometimes you don't have to make decisions today but with experience you'll have a better understanding of what needs to be handled today and what can be pushed. This is what it is like to work in a fast-paced environment. You just don't have enough time for everything. The important differentiation is making a definite point of acknowledgement that this is something you consciously deprioritised to focus on other areas. And that's nothing to be ashamed about. I imagine this would have helped my confidence when I came up with something subpar, but looking back given everything at hand, that was a good thing I came up with.

One significant lesson was learning to consult with developers early and admit when I didn't have all the answers. I discovered that discussing ideas with developers could prevent potential issues and help refine solutions.

Regretfully, I recognized that not everything needed immediate resolution. Over time, I learned to prioritize effectively, acknowledging that some decisions could be deferred. Working in a fast-paced environment requires balancing immediate needs with long-term goals. Understanding and accepting this dynamic helped me navigate challenges and improve my confidence in decision-making.

## Impact
Initially, the web app had minimal built-in statistics and success metrics, reflecting a modest user base. We started with around 20 users per month, including a quarter being Greenview admin users. By the end of our development cycle, the user base had surged to approximately 4,500 users and xxx hotels—a remarkable 6,000% increase in user traffic and a 2,000% increase in hotels. While these figures are impressive relative to the original numbers, their significance may vary based on perspective so it's up to you to judge for yourself!

Our system now supports several key brands, such as Mandarin Oriental, Vista Hospitality, with many extremely huge brands upcoming, further validating our progress and success.

## Conclusion
Leaving after three years, I gained invaluable experience as a solo designer. I had to create and update frameworks and systems from scratch, tailoring them uniquely to the project at hand. This experience taught me to balance design, development, and user needs while deeply appreciating the value of established practices and industry standards. It shaped my approach to product design, blending creative solutions with a greater understanding of best practices.
I eventually left after three years, i'd like to believe i learnt alot because I was a design team of one and forced to learn how to do everything from nothing. it works because i created and updated my own frameworks and systems based on experience, rather than the opinions of others. Design is an art, so i could make unique systems that really molded to the project at hand. At the same time, it also made me wonder what it was like at established places to know what is the best practice and industry standards. 

Leaving after three years, I gained invaluable experience as a solo designer. I learned to create tailored systems and frameworks while appreciating the value of established practices. This project taught me to balance design, development, and user needs, shaping my approach to product design.

