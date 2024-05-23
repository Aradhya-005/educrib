<template>
  <div class="container">
    <div class="about-section">
      <div class="about-text">
        <p>
          Welcome to our virtual tutoring app! We are dedicated to providing high-quality education
          to students around the globe.
        </p>
        <p>
          Our platform connects students with experienced tutors who specialize in various subjects,
          ensuring personalized learning experiences tailored to individual needs.
        </p>
        <p>
          Whether you need help with homework, exam preparation, or mastering challenging concepts,
          our tutors are here to support you every step of the way.
        </p>
      </div>
    </div>

    <div class="mission-section">
      <h2>Our Mission</h2>
      <p>
        Our mission is to empower students to achieve their academic goals by offering accessible,
        affordable, and effective tutoring services.
      </p>
    </div>

    <div class="why-choose-us-section">
      <h2>Why Choose Us?</h2>
      <ul>
        <li>Experienced and qualified tutors</li>
        <li>Personalized one-on-one sessions</li>
        <li>Flexible scheduling</li>
        <li>Affordable pricing options</li>
        <li>Convenient online platform</li>
        <li>Dedicated customer support</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.container {
  flex-direction: column;
  display: flex;
  margin: 0 auto;
  padding: 20px 102px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.about-section {
  padding: 20px;
  border-bottom: 2px solid #2c3e50;
}

.about-text {
  text-align: justify;
}

.about-text p {
  margin-bottom: 15px;
  font-size: 16px;
}

/* Mission section styles */
.mission-section {
  padding: 20px;
  border-bottom: 2px solid #2c3e50;
}

.mission-section h2 {
  padding: 17px 0px;
  margin-top: 0;
  font-size: 24px;
  color: #2c3e50;
}

/* Why choose us section styles */
.why-choose-us-section {
  padding: 20px;
}

.why-choose-us-section h2 {
  padding: 17px 0px;
  margin-top: 0;
  font-size: 24px;
  color: #2c3e50;
}

.why-choose-us-section ul {
  list-style-type: none;
  padding-left: 0;
}

.why-choose-us-section ul li {
  margin-bottom: 10px;
  padding-left: 20px;
  position: relative;
}

.why-choose-us-section ul li::before {
  content: '\2022'; /* Bullet character */
  color: #2c3e50;
  position: absolute;
  left: 0;
}
@media (max-width: 500px) {
  .container[data-v-d4948df9] {
    flex-direction: column;
    display: flex;
    margin: 11px 17px;
    padding: 0;

    background-color: #fff;
    border-radius: 0;
    box-shadow: none;
  }
}
</style>
