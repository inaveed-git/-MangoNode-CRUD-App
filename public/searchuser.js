function searchChats() {
    const searchTerm = document
      .getElementById("searchBar")
      .value.toLowerCase();
    const chatsContainer = document.getElementById("chatsContainer");
    const chatBoxes = chatsContainer.getElementsByClassName("msgBox");

    Array.from(chatBoxes).forEach((chatBox) => {
      const textContent = chatBox.textContent.toLowerCase();
      chatBox.style.display = textContent.includes(searchTerm)
        ? "block"
        : "none";
    });
  }