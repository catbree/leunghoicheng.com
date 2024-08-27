---
title: "Revamping Pet Adoption Galleries"
slug: /paw-haven
date: 6 Jun 2023
description: "A UI exploration to improve outdated pet adoption galleries in Singapore"
tags: uidesign
imageUrl: "/assets/entryAssets/paw-haven-thumbnail.png"
---

[[toc]]

---

Inspired by my love for animals and a drive to improve my UI design skills, I created a challenge for myself: make outdated pet adoption galleries look better!

<figure>
  <img src="/assets/entryAssets/paw-haven-9.png" alt="A screenshot of a website on a desktop. There is a dark blue top navigation with the following options: home, gallery, and guidelines on the left. On the right, there's a yellow button with a heart and a value counter. Below the navigation, it is split into a left and right side. The left side contains information about the dog. There are two buttons under it, with a yellow button that says 'Meet Casey' and a light blue button that says 'View Next' with a mini Polaroid photo of the next dog, which is named Jujube. On the right section, there is a photo of the dog with an image carousel of another four images. The dog is short-haired, has a black coat with a white belly. It has brown eyes and is looking in the distance, seemingly serious. Information about the dog:'Casey. Gender: Female. Breed: Cross-Breed. Age: Young, 1 year 2 months (as of May 2023). Adoption Eligibility: HDB Approved. Health Status: Vaccinated. Description: Casey is a lovely, playful, and happy puppy. She's always curious to explore new places, meet new people, play with them, and most importantly, she loves food! Due to the Circuit Breaker, Casey has been used to having a human presence all day long, so having someone at home would be great. Also, very much a couch potato, she enjoys humans around wherever they go and is often very curious.">
</figure>

## A small bone to pick
Many residents will agree that pet adoption in Singapore faces some serious challenges. Designed to keep pets safe and happy, pet ownership rules here are very strict. From installing permanent window grilles to restrictions on adoptions from rental units, these regulations are well-intentioned but can sometimes miss the mark. I know people who treat their dogs like family yet struggle with adoption through formal channels because of these stringent rules.

In contrast, an unattractive dog gallery seems minor. But do you ever look at restaurant menus and wonder it can be better? I do the same for dog adoption galleries, so I’ve got an itch to scratch.

## Let's explore some galleries

I’ve captured some screenshots of existing dog adoption galleries to give you a sense of what’s out there. Here are three quick examples:

### SoSD (formerly Save Our Street Dogs)

Their website presents a straightforward gallery that lists dogs by name. Clicking on a dog takes you to a basic profile page with details like personality, gender, and date of birth. It’s simple and functional! However, the gallery sorts their dogs alphabetically (tough luck for Yoko and Zane), which seems like an odd choice. You can register by completing a REALLY lengthy form which deters potential adopters.

<figure>
  <img src="/assets/entryAssets/paw-haven-1.png" alt="A screenshot of a desktop webpage. At the top, there is a type and gender filter. A checkbox for 'HDB Approved'. A green search button and a red reset button. There is a grid with 4 columns and 2 rows. Each cell of the grid has a picture of a dog and its name under it.">
  <em>SoSD's dog adoption gallery</em>
</figure>

Since they operate under strict regulations, the long, cumbersome forms might explain their intentional design to filter out applicants who don’t meet the formal adoption criteria.

<figure>
  <img src="/assets/entryAssets/paw-haven-2.png" alt="A screenshot of a desktop webpage. An image gallery is present at the top, with a main large image, along with three smaller images on the right. All images are of a light-creamed colored dog in different angles. Below the image gallery, there are text that describes the dog. Text: Ah Heng. Sponsored by Christine. Gender: Male. HDB Approved: Yes. Estimated DOB: 16 Mar 2019. Personality: Ah Heng lived in a fish farm all his life, and despite being at a ripe old age of 15, he appears to be healthy and strong! He is such a sweet boy, always asking for affection. We hope a home is somewhere round the corner for him soon, as he truly deserves a home sweet home in the last stage in his life! If you are keen to share your home and love with Ah Heng, please register your interest here. If you are keen to foster SOSD dogs, please register your interest here.">
  <em>SoSD's dog profile page when you click into a specific dog</em>
</figure>

### Oscas

Next, we have Oscas. Their dog adoption gallery provides detailed information on each dog with full descriptions. Clicking the “Find out more” button opens your local mail app to write them an email. I can’t imagine many people following through (What would they even write?). While it’s functional, the lengthy descriptions make it difficult to focus on individual dogs. Each individual profile doesn’t even fit on my monitor screen. It makes browsing a bit of a hassle.

<figure>
  <img src="/assets/entryAssets/paw-haven-3.png" alt="A screenshot of a desktop webpage. There is a grid with 3 columns and 1 row. Each cell of the grid has a picture of a dog, the  dog's name, information such as gender, age, temperament, as well as a long description of around 4 paragraphs. Thre is a grid with three rows, and four columns. However for the first row, there are only two cells sharing the four columns. Each cell has a photo of a dog, its name and whether it is HDB approved, its date of birth, its gender, some letters which says 'V,C,S,H' and a short one-liner description. ">
  <em>Oscas's dog adoption gallery</em>
</figure>

### CAS (Causes for Animals Singapore)

Last but definitely not least, we have CAS. Their dog adoption gallery is the most barebones but still functional. They have a decent profile with additional details listed, and a stylised “Adopt Me” button. Clicking on it brings you to a generic page with step-by-step instructions, starting with a link to a simple pre-adoption questionnaire.

<figure>
  <img src="/assets/entryAssets/paw-haven-4.png" alt="A screenshot of a desktop website. It starts with two text instructions which tells users to click on image for more info and to note that dogs tagged 'homestay' means they are unavailable as they are with a potential adopting family. Below it, there is a grid with 3 columns and 1 row. Each cell of the grid has a picture of a dog, the  dog's name, information such as gender, age, temperament, as well as a long description of around 4 paragraphs. Thre is a grid with three rows, and four columns. However for the first row, there are only two cells sharing the four columns. Each cell has a photo of a dog, its name and whether it is HDB approved, its date of birth, its gender, some letters which says 'V,C,S,H' and a short one-liner description. ">
  <em>CAS's dog adoption gallery</em>
</figure>

<figure>
  <img src="/assets/entryAssets/paw-haven-5.png" alt="A screenshot of a desktop webpage. An image gallery is on the left, with a main large image, along with six smaller images below it. All images are of a light-creamed colored dog in different angles. Below it is a text to ask if the reader is interested to be a foster, along with an email address. To the right of the image gallery, there are text that describes the dog. Along with a green 'Adopt Me' button.">
  <em>CAS's dog profile page when you click into a specific dog</em>
</figure>

## Design concept

Note: Along the way, I named the project “Paw Haven,” so I’ll refer to it that way instead of calling it “my redesign attempt at a dog adoption site.”

### User flow

To kick things off, I sketched a quick user flow to get a sense of the project’s scope. I excluded other species like cats and hamsters, focusing solely on dogs. Most adoption sites separate them into different galleries anyway, so this helps streamline the work.

<figure>
  <img src="/assets/entryAssets/paw-haven-6.png" alt="Zoomed out image of numerous boxes and arrows connecting with each other from the left to right. There are random scribbles in red, with three of them encircling certain boxes and two X shaped scribbles crossing off some boxes. There are also two post-it notes coupling two boxes.">
  <em>Working notes of Paw Haven's user flow used as reference during design</em>
</figure>

Here's a summary of the flow:

1. Begin with a gallery of dogs, showing their photos and names.
2. Click on a dog to view its detailed profile.
3. Shortlist the dogs you’re interested in meeting.
4. Fill out a form and book a date.
5. Receive confirmation of the date and time, followed by a redirection to the Adoption & Preparation guide.

Let’s walk through this step by step. The following screenshots showcase some screens I created during the process. They’re not perfect, and you might notice inaccuracies that came as I experimented with various distinct elements. Please excuse them!

### Main dog gallery

I laid out the gallery as a grid, much like the sites we’ve seen since they’re effective and seem to work well. I only listed the bare essentials: a photo and the dog’s name. This makes for easy scrolling and less information to sift through. It uses an infinite scroll, which keeps going as long as there are dogs available. 

<figure>
  <img src="/assets/entryAssets/paw-haven-7.png" alt="A screenshot of a website. There is a dark blue navigation on top, with the 'Gallery' page selected. Title: Adoption Gallery. Subtitle: Our furry companions eagerly await their chance to bring endless joy to cozy and welcoming homes. If one of our stories tug at your heartstrings, a little love tap on the [heart] is all it takes. When you're ready to make memories together, that same [heart] on the top-right is your ticket to setting up a meet-and-greet. Below this there is a yellow filter button, with a bunch of selected options on the right: female, HDB Approved, and vaccinated. There is a small text which says showing 5 of 42 dogs. The remaining page is a three column by two row grid, with a total of 5 dogs. Each cell has a dog photo, the dog's name, and a grey heart. One of the cell's heart is red instead of grey.">
  <em>Paw Haven's dog adoption gallery. It is currently filtered.</em>
</figure>

To step out of my comfort zone of neutral and muted colours, I opted for a bright yellow and comforting deep blue as the primary and secondary color. 

The gallery has a filter, which displays the number of dogs available after applying it to avoid a moment where no dogs match the filter.

<figure>
  <img src="/assets/entryAssets/paw-haven-8.png" alt="A screenshot of a desktop website. The entire background is darkened, with a modal in the middle. Title: Filters. There are several filter options for age, gender, adoption eligibility, and health statuses. Several options are selected. At the bottom of the modal, there is a yellow button which writes 'Show 5 [dogs]' and a white button lined with light blue that writes 'Clear All'.">
  <em>The filter for the adoption gallery</em>
</figure>

### Dog profile

When a user clicks on a dog, they’re taken to the dog’s profile page, which provides all the information a potential owner would need. The image gallery takes up the entire right side. I love looking at a dog’s photo gallery when I view their profiles, so I chose that as the primary focus.

From here, users can decide whether they want to meet this dog or view another. If they choose to meet, the system adds the dog into their shortlist.

<figure>
  <img src="/assets/entryAssets/paw-haven-9.png" alt="A screenshot of a website on a desktop. There is a dark blue top navigation with the following options: home, gallery, and guidelines on the left. On the right, there's a yellow button with a heart and a value counter. Below the navigation, it is split into a left and right side. The left side contains information about the dog. There are two buttons under it, with a yellow button that says 'Meet Casey' and a light blue button that says 'View Next' with a mini Polaroid photo of the next dog, which is named Jujube. On the right section, there is a photo of the dog with an image carousel of another four images. The dog is short-haired, has a black coat with a white belly. It has brown eyes and is looking in the distance, seemingly serious. Information about the dog:'Casey. Gender: Female. Breed: Cross-Breed. Age: Young, 1 year 2 months (as of May 2023). Adoption Eligibility: HDB Approved. Health Status: Vaccinated. Description: Casey is a lovely, playful, and happy puppy. She's always curious to explore new places, meet new people, play with them, and most importantly, she loves food! Due to the Circuit Breaker, Casey has been used to having a human presence all day long, so having someone at home would be great. Also, very much a couch potato, she enjoys humans around wherever they go and is often very curious.">
  <em>A dog profile page for a black dog named Casey</em>
</figure>

### Shortlist

Clicking the button on the top-right navigation brings you to the shortlist. A user can shortlist a maximum of three dogs that they’re interested in at the adoption shelter. Three is an arbitrary number, but not too many because the people at the adopter shelters are busy!

<figure>
  <img src="/assets/entryAssets/paw-haven-10.png" alt="A screenshot of a website on a desktop. There is a dark blue top navigation with the following options: home, gallery, and guidelines on the left. On the right, there's a yellow button with a heart and a value of 3. The yellow button seems to be selected. Title: Ready to meet your furry friends? Sub title: All adoption viewings and visits are strictly by appointment only. Slots are released 7 days in advance. Click on the button below to start reserving a slot. For more information, fetch all the details in our comprehensive guidelines. Below the text, there are three images of dogs along with their names with red hearts. Their names are Jujube, Mischief, and Carbon. There's a yellow button at the end which says 'Reserve your slot'.">
  <em>Shortlist page with three dogs selected</em>
</figure>

When users are ready, they can click on “Reserve Your Slot,” which takes them to a form to input key details. The specifics vary by shelter, with most currently managing their appointments through emails or walk-ins. I imagine a tool like [Calendly]("https://calendly.com/features") would be ideal for setting up appointment slots that potential adopters can select. This will potentially streamline their appointment management flow so they can focus on other responsibilities.

### Confirmation

Users get redirected to a confirmation page once they set the form and appointment. Their next step is to review the Adoption & Preparedness Guide, so they know what to expect on the big day. And that wraps up this flow!

<figure>
  <img src="/assets/entryAssets/paw-haven-11.png" alt="A screenshot of a website on a desktop. There is a dark blue top navigation with the following options: home, gallery, and guidelines on the left. On the right, there's a yellow button with a heart and a value of 3. The yellow button seems to be selected. Title: You're all set to meet! Sub title: We've just sent you a confirmation email. Remember, spots are as precious as belly rubs. So if your plans change, kindly give us a paws-up at least 48 hours ahead to give other furry friends a chance to meet their potential forever family. Below the text, there are three images of dogs along with their names with red hearts. Their names are Jujube, Mischief, and Carbon. There's a ;light blue button at the end which says 'Read guidelines'.">
  <em>Confirmation page after successful reservation of slots </em>
</figure>

## Reflection

I did not back this project with much research and worked solely off my personal preferences. While I enjoyed working on the UI refinements, I can’t confidently say whether the UX improvements would make things better or worse.

In addition, the success of a gallery relies heavily on the quality of photos and descriptions, which volunteers create amidst other tasks. If these aren’t up to par, the gallery loses its appeal, which isn’t something I tested while working on this.

Another consideration is the time-consuming nature of updating galleries, which may be the reason many centers opt for having dog adoption posts on Instagram instead: it’s easier and more familiar. If I take this project further, I’d explore ways to streamline updating dog entries.

## Conclusion

This project was a lot of fun and perfectly aligned with my interests. I’m excited to see how I can develop and validate this concept in a real-world context in the future. This project was also a key inspiration for joining [The Odin Project](https://www.theodinproject.com/) and enhancing my web development skills. Building a website like this would be really cool to me!
