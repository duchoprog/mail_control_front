document
  .getElementById("estimates")
  .addEventListener("click", function () {
    // Call the backend endpoint to initiate the login process
    window.location.href = "http://localhost:8000/auth/google";
  })
  .then((response) => console.log(response));
document.getElementById("boom").addEventListener("click", function () {
  alert("BOOM");
});
document.getElementById("makito").addEventListener("click", function () {
  alert("We are still working on this");
});
