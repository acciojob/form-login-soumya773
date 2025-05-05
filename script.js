function getFormvalue() {
    //Write your code here
	function getFormvalue() {
      const form = document.getElementById("nameForm");

      // Trim to remove extra spaces
      const firstName = form.fname.value.trim();
      const lastName = form.lname.value.trim();

      // Alert full name
      alert(`${firstName} ${lastName}`);

      return false; // Prevent form submission

}
