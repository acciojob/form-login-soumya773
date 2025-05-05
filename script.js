function getFormvalue() {
    const form = document.getElementById("nameForm");
    const firstName = form.fname.value.trim();
    const lastName = form.lname.value.trim();

    alert(`${firstName} ${lastName}`);
    return false; // Prevent default form submission
  }