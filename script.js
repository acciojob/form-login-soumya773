function getFormvalue() {
        const form = document.getElementById("nameForm");
        if (!form) {
          console.error("Form not found!");
          return false;
        }

        const firstName = form.elements["fname"].value.trim();
        const lastName = form.elements["lname"].value.trim();
        alert(`${firstName} ${lastName}`);
        return false; // Prevent form from reloading the page
      }