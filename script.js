function getFormvalue() {
        const form = document.getElementById("nameForm");

        // Use form.elements to safely access input fields by name
        const firstName = form.elements["fname"].value.trim();
        const lastName = form.elements["lname"].value.trim();

        alert(`${firstName} ${lastName}`);
        return false;
}