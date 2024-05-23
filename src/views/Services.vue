<template>
  <div class="container">
    <div class="service">
      <h2>Individual Tutoring</h2>
      <p>Get personalized one-on-one tutoring sessions tailored to your learning needs.</p>
    </div>

    <div class="service">
      <h2>Group Sessions</h2>
      <p>Join small group tutoring sessions to collaborate and learn with peers.</p>
    </div>

    <div class="service">
      <h2>Exam Preparation</h2>
      <p>Prepare for exams with targeted study sessions and practice tests.</p>
    </div>

    <div class="service">
      <h2>Homework Help</h2>
      <p>Receive assistance with homework assignments and clarify concepts.</p>
    </div>
  </div>
</template>
<script lang="ts">
export default {}
</script>
<style scoped>
header {
  background-color: #007bff;
  color: #fff;
  padding: 20px 0;
  text-align: center;
}

.container {
  padding: 35px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.service {
  padding: 51px 25px;
  margin-top: 30px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 200px;
  height: 200px;
  border-radius: 16px;
  background-color: rgb(255, 255, 255);
  margin-inline-end: 20px;
}

.service h2 {
  font-size: 19px;
  color: #760e0e;
}

.service p {
  margin-top: 15px;
  margin-bottom: 15px;
}

.service ul {
  list-style-type: none;
  padding-left: 0;
}

.service ul li::before {
  content: '\25CF'; /* Unicode for a black circle */
  color: #007bff;
  margin-right: 10px;
}
@media (max-width: 500px) {
  .container[data-v-83a35225] {
    padding: 35px;
    display: flex;
    flex-direction: column;
  }
  .service[data-v-83a35225] {
    width: 200px;
    height: 100px;
  }
}
</style>