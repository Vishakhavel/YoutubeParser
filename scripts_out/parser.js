"use strict";
function getIdForShorts(link) {
    if (link === undefined)
        return null;
    return link.split("/")[2];
}
function parseWatchHistory() {
    const results = [];
    document
        .querySelectorAll("ytd-item-section-renderer #contents ytd-video-renderer")
        .forEach((videoElement) => {
        var _a, _b;
        const videoTitleElement = videoElement.querySelector("#video-title");
        const channelElement = videoElement.querySelector("#channel-name a");
        if (videoTitleElement && channelElement) {
            const videoUrl = videoTitleElement.getAttribute("href");
            const videoID = videoUrl
                ? new URLSearchParams(new URL(videoUrl, window.location.href).search).get("v")
                : null;
            if (videoID) {
                results.push({
                    channelName: ((_a = channelElement.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || "",
                    videoTitle: ((_b = videoTitleElement.textContent) === null || _b === void 0 ? void 0 : _b.trim()) || "",
                    videoID: videoID,
                });
            }
        }
    });
    console.log(results);
}
parseWatchHistory();
