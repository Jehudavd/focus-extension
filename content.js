// Hapus semua konten halaman
document.documentElement.innerHTML = `
<!DOCTYPE html>
<html>
<head>
  <title>Stay Focused</title>
  <link rel="stylesheet" type="text/css" href="${chrome.runtime.getURL(
    "styles.css"
  )}">
</head>
<body>
  <div>
    <h1>Stay Focused!</h1>
    <p>You have tried to access a distracting site. Stay focused and productive.</p>
    <button id="goToProductiveSite">Go to ChatGPT</button>
  </div>

  <script src="${chrome.runtime.getURL("redirect.js")}"></script>
</body>
</html>
`;

// Tambahkan event listener untuk tombol goToProductiveSite
document
  .getElementById("goToProductiveSite")
  .addEventListener("click", function () {
    window.location.href = "https://www.chatgpt.com";
  });
