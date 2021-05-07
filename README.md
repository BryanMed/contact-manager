# Contact manager app [**work in progress**]

This app is deployed in heroku, and you can test it [💻 here!](https://bryan-contact-manager.herokuapp.com/)

## Stack

Firebase + React + Bootstrap

## Scope

Unfortunately, this work is still in progress. The app is supposed to meet the next requirements for a contacts app:
I'll mark what this app can do:

---

- 🟡--name (required).
  - Only text, not numbers.

🙋‍♂️ Warns the user that the input is not correct. But submit wrong data anyway.

---

- 🟡--last name (required)
  - Only text, not numbers.

🙋‍♂️ Warns the user that the input is not correct. But submit wrong data anyway

---

- 🟡--company (optional)
  - Alphanumeric.

🙋‍♂️ Warns the user that the input is not correct. But submit wrong data anyway

---

- 🟡--phone number (optional)
  - Numeric.
  - Phone numbers must be unique between contacts.

🙋‍♂️ Warns the user that the input is not correct. But submit wrong data anyway

---

- 🟡--email (required)
  - Email must be unique between contacts.
  - Email must be a valid email.

🙋‍♂️ Warns the user that the input is not correct. But submit wrong data anyway

---

- 🔴 --Displays all your contacts with pagination (10 contacts per page).

🙋‍♂️ I didn't implement this feature yet.

---

- 🟡--You can save, edit, delete a contact.

🙋‍♂️ I could only implement the saving user data part. Editing and deleting the data caused all the data to be deleted.

---

- 🟢 --Deployed in Heroku.

🙋‍♂️ You can try the app [here](<(https://bryan-contact-manager.herokuapp.com/)>)

---

- Nice to have:
  - 🔴 Filter by name and last name (full or partial match).
  - 🟢 Use a CSS Framework. https://geekflare.com/best-css-frameworks/

🙋‍♂️ I haven't implemented the filters yet.

🙋‍♂️ First I tried with Material UI, but i had hard times getting the things work. At last minute I changed the project onto Bootstrap.

---

## My situation

Unfortunately, I followed the wrong tutorials, which caused me to switch the technology stack several times. In the case of the database, I had problems getting MySQL to work on my computer, and I could not understand it well, this made me switch to Firebase which I think I understand much better. On the other hand, I was trying to work with Material UI, but it was hard to understand for me, and I was feeling like if i was reinventing the wheel, using Bootstrap felt so much better.

I made the mistake of not taking good advantage of my mentors, they were always willing to help me, but I wanted to learn from the tutorials, in order to ask them more specific questions. So at the end that was my failure.

## Future work

I will definitely finish this app. My practical knowledge of react and database management was almost nil until this project. But now I am motivated, because I learned a lot. And finally I did something that made me very excited, which was to deploy an application that I could share with my friends.
