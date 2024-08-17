---
title: "Paw Haven - Revamping Pet Adoption Galleries"
slug: /paw-haven
date: 6 Jun 2023
description: "A UI exploration seeking to improve outdated pet adoption galleries in Singapore"
tags: uidesign
imageUrl: "/assets/entryAssets/paw-haven-thumbnail.png"
---

[[toc]]

---

Inspired by my love for animals and a drive to improve my UI design skills, I created a challenge for myself: make outdated pet adoption galleries look better! 

<figure>
  <img src="/assets/entryAssets/paw-haven-9.png" alt="a screenshot of a website">
</figure>

## Is this even a problem?
Well, probably not.

Many will agree that pet adoption in Singapore faces some serious challenges. Strict pet ownership rules are designed to keep pets safe and happy. From installing permanent window grilles to restrictions on adoptions from rental units, these regulations are well-intentioned but can sometimes miss the mark. I know people who treat their dogs like family yet struggle with adoption through formal channels due to these stringent rules.

In contrast, an unattractive dog gallery seems minor. But have you ever looked at a restaurant menu and think, "I'd tweak this to make it better." I found myself wondering this, but for dog adoption galleries because I browse them often. So I've got an itch to scratch, and this is a problem to me.

## Let's explore some galleries
I’ve captured some screenshots of existing dog adoption galleries to give you a sense of what’s out there. Here are three quick examples:

### SoSD (formerly Save Our Street Dogs)
Their website features a straightforward gallery where dogs are listed by name. Clicking on a dog takes you to a basic profile page with details like personality, gender, and date of birth. It’s simple and functional! However, the dogs are sorted alphabetically (tough luck for Yoko and Zane), which seems like an odd choice. To register, you need to follow a link on the profile page and complete a REALLY lengthy form which will be a deterrent for potential adopters.

<figure>
  <img src="/assets/entryAssets/paw-haven-1.png" alt="a screenshot of a website">
  <em>SoSD's dog adoption gallery</em>
</figure>

Since they operate under strict regulations, it might explain the long, cumbersome forms which may be intentionally designed to filter out applicants who don’t meet the formal adoption criteria.

<figure>
  <img src="/assets/entryAssets/paw-haven-2.png" alt="a screenshot of a website">
  <em>SoSD's dog profile page if you click into a specific dog</em>
</figure>

### Oscas
Next, we have Oscas. Their dog adoption gallery provides detailed information on each dog with full descriptions. Clicking the "Find out more" button opens your local mail app via a mailto: link for sending them an email. I can’t imagine many people following through (What would they even write?). While it's functional, the lengthy descriptions make it difficult to focus on individual dogs. Each individual profile doesn’t even fit on my monitor screen. The browsing is a bit of a hassle.

<figure>
  <img src="/assets/entryAssets/paw-haven-3.png" alt="a screenshot of a website">
  <em>Oscas's dog adoption gallery</em>
</figure>

### CAS (Causes for Animals Singapore)
Last but definitely not least, we have CAS. Their dog adoption gallery is the most barebones but still functional.They have a decent profile with additional details listed and a stylish "Adopt Me" button. Clicking it takes you to a generic page with step-by-step instructions, starting with a link to a simple pre-adoption questionnaire.

<figure>
  <img src="/assets/entryAssets/paw-haven-4.png" alt="a screenshot of a website">
  <em>CAS's dog adoption gallery</em>
</figure>

<figure>
  <img src="/assets/entryAssets/paw-haven-5.png" alt="a screenshot of a website">
  <em>CAS's dog profile page if you click into a specific dog</em>
</figure>

## Design Concept
Along the way, I named the project “Paw Haven,” so I’ll refer to it that way instead of calling it “my redesign attempt of a dog adoption site.”

### User Flow
To kick things off, I sketched a quick user flow to get a sense of the project’s scope. I decided to exclude other species like cats and hamsters, focusing solely on dogs. Most adoption sites separate them into different galleries anyway, so this helps streamline the work.
<figure>
  <img src="/assets/entryAssets/paw-haven-6.png" alt="a screenshot of a website">
  <em>Very zoomed out image of my user flow for paw haven</em>
</figure>

Here's a summary of the flow:

- Begin with a gallery of dogs, showing their photos and names.
- Click on a dog to view its detailed profile.
- Shortlist the dogs you’re interested in meeting.
- Fill out a form and book a date.
- Receive confirmation of the date and time, followed by a redirection to the Adoption & Preparation guide.

Let’s walk through this step by step. The following screenshots showcase some screens I created during the process. They’re not perfect, and you might notice inaccuracies that came as I experimented with different elements. Please excuse them!

### Main dog gallery
The adoption page is laid out as a grid, much like all the sites we’ve seen. It only lists the essentials: a photo and the dog’s name. This makes for easy scrolling and less information to sift through. It uses infinite scroll, which keeps going as long as there are dogs available. 

<figure>
  <img src="/assets/entryAssets/paw-haven-7.png" alt="a screenshot of a website">
  <em>Paw Haven's dog adoption gallery. It is currently filtered.</em>
</figure>

In an attempt to step out of my comfort zone of neutral and muted colours, I chose a bright yellow and comforting deep blue for the primary colours. 

The gallery has a filter, which displays the number of dogs available after applying it to avoid a moment where no dogs match the filter.

<figure>
  <img src="/assets/entryAssets/paw-haven-8.png" alt="a screenshot of a website">
  <em>The filter for the adoption gallery</em>
</figure>

### Dog profile
When a user clicks on a dog, they’re taken to the dog’s profile page, which provides all the information a potential owner would need. The image gallery takes up the entire right side, and is the primary focus. This probably doesn't apply to everyone, but I focus the most on galleries when looking at dog profiles.

From here, users can decide whether they want to meet this dog or view another. If they choose to meet, the dog is added to their shortlist.

<figure>
  <img src="/assets/entryAssets/paw-haven-9.png" alt="a screenshot of a website">
  <em>Dog Profile of a black dog named Casey</em>
</figure>

### Shortlist
Clicking the button on the top-right navigation brings you to the shortlist. A can shortlist a maximum of three dogs that you’re interested in at the adoption shelter. Three is an arbitrary number, but not too many because the people at the adopter shelters are busy!

<figure>
  <img src="/assets/entryAssets/paw-haven-10.png" alt="a screenshot of a website">
  <em>Shortlist page with three dogs</em>
</figure>

When users are ready, they can click on "Reserve Your Slot," which takes them to a form to input key details. The specifics vary by shelter, but many currently manage appointments through emails or walk-ins.

I imagine a tool like [Calendly]("https://calendly.com/features") would be ideal for setting up appointment slots that potential adopters can select.

### Confirmation
Once the form and appointment are set, users are redirected to a confirmation page. Their next step is to review the Adoption & Preparedness Guide, so they know what to expect on the big day. And that wraps up this flow!

<figure>
  <img src="/assets/entryAssets/paw-haven-11.png" alt="a screenshot of a website">
  <em>Confirmation page</em>
</figure>

## Reflection
This project isn’t backed by research and mainly reflects my personal preferences. While I enjoyed working on the UI refinements, I can’t confidently say whether the UX improvements would make things better or worse.

The success of a gallery relies heavily on the quality of photos and descriptions, which volunteers create amidst other tasks. If these aren’t up to par, the gallery loses its appeal, which isn't something I tested while working on this.

Another consideration is the time-consuming nature of updating galleries, possibly why many centers opt for Instagram—it’s easier and more familiar. If I take this project further, I’d explore ways to streamline the process of updating dog entries.


## Conclusion
This project was a lot of fun and perfectly aligned with my interests. I’m excited to see how this concept can be developed and validated in a real-world context in the future. It also inspired me to join [The Odin Project]("https://www.theodinproject.com/") to enhance my web development skills. Building a website like this would be really cool to me!




