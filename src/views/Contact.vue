<template>
  <div class="container">
    <div class="contact-form">
      <form action="#" method="post">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label for="email">Email</label>
        <input type="text" id="email" name="email" required />

        <label for="message">Message</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  </div>
</template>
<style scoped>
.contact-form {
  padding: 20px;
}

.contact-form label {
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
}

.contact-form input[type='text'],
.contact-form textarea {
  width: 100%;
  padding: 10px 120px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
}

.contact-form textarea {
  height: 150px;
}

.contact-form button {
  background-color: #5882af;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
}

.contact-form button:hover {
  background-color: #0056b3;
}
</style>