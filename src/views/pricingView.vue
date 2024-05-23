<template>
  <div class="container">
    <div class="pricing-header">
      <h1 class="display-4">Pricing</h1>
      <p class="lead">
        Welcome to our virtual tutoring service! We offer personalized tutoring sessions to help you
        excel academically. Choose a plan that fits your needs and start your learning journey with
        us today.
      </p>
    </div>
    <div class="plans">
      <div class="card-deck">
        <div class="card-header">
          <h4>Basic Plan</h4>
        </div>
        <div class="card-body">
          <h1>$30<small> / month</small></h1>
          <ul class="lead">
            <li>2 Sessions per Month</li>
            <li>1 Subject</li>
            <li>Access to Study Materials</li>
            <li>Email Support</li>
            <li>Ideal for students who need occasional help with a specific subject or topic.</li>
          </ul>
          <button class="btn">Sign up</button>
        </div>
      </div>
      <div class="card-deck">
        <div class="card-header">
          <h4>Standard Plan</h4>
        </div>
        <div class="card-body">
          <h1>$50<small> / month</small></h1>
          <ul class="lead">
            <li>4 Sessions per Month</li>
            <li>Up to 2 Subjects</li>
            <li>Access to Study Materials</li>
            <li>Email Support</li>
            <li>Progress Tracking</li>
            <li>Great for students seeking regular assistance across multiple subjects.</li>
          </ul>
          <button class="btn">Get started</button>
        </div>
      </div>
      <div class="card-deck">
        <div class="card-header">
          <h4>Premium Plan</h4>
        </div>
        <div class="card-body">
          <h1>$80<small> / month</small></h1>
          <ul class="lead">
            <li>8 Sessions per Month</li>
            <li>Up to 3 Subjects</li>
            <li>Access to Study Materials</li>
            <li>Priority Email Support</li>
            <li>Progress Tracking</li>
            <li>Monthly Performance Review</li>
            <li>Perfect for students looking for intensive support and personalized guidance.</li>
          </ul>
          <button class="btn">Get started</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {}
</script>
<style  scoped>
.pricing-header {
  text-align: center;
}
.pricing-header h1 {
  font-size: 39px;
}
.pricing-header p {
  margin: 10px 25%;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
ul {
  list-style: disc;
}
.card-header {
  margin-left: 50px;
  font-size: 20px;
  margin-top: -34px;
}
.card {
  margin: 0 10px;
  width: 300px;
}
.card-body {
  margin-left: 50px;
  margin-top: 7px;
}
small {
  font-size: 18px;
  color: #9c9c9c;
}
h1 {
  font-size: 25px;
}
.lead li {
  color: #9c9c9c;
  text-align: left;
  margin-left: 10px auto;
  font-weight: 700;
  line-height: 1.6;
  font-size: 13px;
}
.lead {
  margin-top: 10px;
  /* margin-left: 50px; */
}
.card-deck {
  padding: 51px 25px;
  margin-top: 30px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  align-content: center;
  width: 268px;
  height: 335px;
  border-radius: 16px;
  background-color: rgb(255, 255, 255);
  margin-inline-end: 20px;
}

.btn {
  font-size: 14px;
  box-shadow: 1px black;
  border: none;
  color: white;
  margin-top: 27px;

  background-color: cadetblue;
  border-radius: 4px;
  padding: 10px 20px;
}
.plans {
  padding: 35px;
  display: flex;
  flex-direction: row;
  justify-content: center; /* Align children horizontally at the center */
  align-items: center;
}
@media (max-width: 500px) {
  .plans {
    padding: 35px;
    flex-direction: column;
  }
  .pricing-header p {
    font-size: 14px;
    margin: 10px 40px;
  }
  .pricing-header h1 {
    margin-top: 24px;
    font-size: 30px;
  }
}
</style>
