function copy() {
    navigator.clipboard.writeText(event.target.textContent);
    // thank you so much https://github.com/macedeveloper <3

    var tooltip = document.createElement("span");
    tooltip.className = "tooltip";
    tooltip.textContent = "link copied!";
    event.target.textContent = "";
    event.target.appendChild(tooltip);
}