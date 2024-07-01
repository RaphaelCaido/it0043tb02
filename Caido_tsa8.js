document.addEventListener("DOMContentLoaded", function () {
  const flexContainer = document.querySelector(".flex-container");
  const flexDirectionButtons = document.querySelectorAll(
    "#flex-direction button"
  );
  const justifyContentButtons = document.querySelectorAll(
    "#justify-content button"
  );
  const alignItemsButtons = document.querySelectorAll("#align-items button");
  const gap = document.getElementById("gap");
  const flexGrow1 = document.getElementById("flex-grow-1");
  const flexGrow2 = document.getElementById("flex-grow-2");
  const flexGrow3 = document.getElementById("flex-grow-3");
  const resetGrowButton = document.getElementById("reset-grow");
  const growAllButton = document.getElementById("grow-all");
  function updateFlexbox() {
    const selectedFlexDirection = document.querySelector(
      "#flex-direction button.selected"
    ).dataset.value;
    const selectedJustifyContent = document.querySelector(
      "#justify-content button.selected"
    ).dataset.value;
    const selectedAlignItems = document.querySelector(
      "#align-items button.selected"
    ).dataset.value;
    flexContainer.style.flexDirection = selectedFlexDirection;
    flexContainer.style.justifyContent = selectedJustifyContent;
    flexContainer.style.alignItems = selectedAlignItems;
    flexContainer.style.gap = `${gap.value}px`;
    document.getElementById("box-1").style.flexGrow = flexGrow1.value;
    document.getElementById("box-2").style.flexGrow = flexGrow2.value;
    document.getElementById("box-3").style.flexGrow = flexGrow3.value;
  }
  function resetFlexGrow() {
    flexGrow1.value = "0";
    flexGrow2.value = "0";
    flexGrow3.value = "0";
    updateFlexbox();
  }
  function growAll() {
    flexGrow1.value = "1";
    flexGrow2.value = "1";
    flexGrow3.value = "1";
    updateFlexbox();
  }
  function handleButtonClick(event) {
    const button = event.target;
    const buttonGroup = button.parentNode;
    const buttons = buttonGroup.querySelectorAll("button");
    buttons.forEach((btn) => btn.classList.remove("selected"));
    button.classList.add("selected");
    updateFlexbox();
  }
  flexDirectionButtons.forEach((button) =>
    button.addEventListener("click", handleButtonClick)
  );
  justifyContentButtons.forEach((button) =>
    button.addEventListener("click", handleButtonClick)
  );
  alignItemsButtons.forEach((button) =>
    button.addEventListener("click", handleButtonClick)
  );
  gap.addEventListener("input", updateFlexbox);
  flexGrow1.addEventListener("input", updateFlexbox);
  flexGrow2.addEventListener("input", updateFlexbox);
  flexGrow3.addEventListener("input", updateFlexbox);
  resetGrowButton.addEventListener("click", resetFlexGrow);
  growAllButton.addEventListener("click", growAll);
  // Initialize default selected buttons
  document
    .querySelector('#flex-direction button[data-value="row"]')
    .classList.add("selected");
  document
    .querySelector('#justify-content button[data-value="flex-start"]')
    .classList.add("selected");
  document
    .querySelector('#align-items button[data-value="flex-start"]')
    .classList.add("selected");
  updateFlexbox(); // Initial update
});
