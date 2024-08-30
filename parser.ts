function getIdForShorts(link: string): string | null {
  if (link === undefined) return null;
  return link.split("/")[2];
}
function parseWatchHistory(): void {
  interface VideoInfo {
    channelName: string;
    videoTitle: string;
    videoID: string;
  }

  const results: VideoInfo[] = [];

  document
    .querySelectorAll<HTMLElement>(
      "ytd-item-section-renderer #contents ytd-video-renderer"
    )
    .forEach((videoElement) => {
      const videoTitleElement =
        videoElement.querySelector<HTMLElement>("#video-title");
      const channelElement =
        videoElement.querySelector<HTMLElement>("#channel-name a");

      if (videoTitleElement && channelElement) {
        const videoUrl: string | null = videoTitleElement.getAttribute("href");
        const videoID = videoUrl
          ? new URLSearchParams(
              new URL(videoUrl, window.location.href).search
            ).get("v")
          : null;

        if (videoID) {
          results.push({
            channelName: channelElement.textContent?.trim() || "",
            videoTitle: videoTitleElement.textContent?.trim() || "",
            videoID: videoID,
          });
        }
      }
    });

  console.log(results);
}

parseWatchHistory();
