/* eslint-disable no-undef */

chrome.runtime.onInstalled.addListener(() => {
  console.log("installed service");
});

chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({
    url: "index.html",
  });
});
