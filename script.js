document.getElementById('service').addEventListener('change', function() {
    var service = this.value;
    var detailsDiv = document.getElementById('details');
    if (service === 'Dry Cleaning') {
      detailsDiv.innerHTML = "<p>Expert dry cleaning for all types of garments</p><p>Delicate fabric care</p><p>Stain removal</p>";
    } else if (service === 'Laundry Services') {
      detailsDiv.innerHTML = "<p>Washing and drying</p><p>Folded or hanged as per your preference</p><p>Ironing available</p>";
    } else if (service === 'Institution Cleaning') {
      detailsDiv.innerHTML = "<p>Office cleaning</p><p>Hospital cleaning</p><p>Estate cleaning</p><p>Other institution cleaning</p>";
    } else {
      detailsDiv.innerHTML = "";
    }
  });
  