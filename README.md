# Simeón's Personal Website
## palomarblumenthaljaimesimeon@gmail.com

In this document you will find some explanations for the performance analysis and design of this website, which I've created from scratch in my spare time.

## Performance Analysis

This analysis was made using Google's Web.dev tool, that uses the following metrics:

* **First Contentful Paint (FCP)**: Measures the time it takes to render the first visible element on screen.
  
* **Largest Contentful Paint (LCP)**: Measures the time it takes to render the largest visible element on screen.

* **Cumulative Layout Shift (CLS)**: Measures the visual stability of the webpage's content as a user views it.
  
* **Total Blocking Time (TBT)**: Measures the total time after First Contentful Paint (FCP) where the main thread was blocked for long enough to prevent responses to user input.
   
* **Speed Index (SI)**: Ranking factor that helps determine how well you are optimized for poor networks and lower data bandwidths.

### Desktop Version

![Desktop Screenshot](./img/readme/desktopScreenshot.png)

The desktop version has recieved very good results in all metrics. But one I would like to discuss in this particular case is Large Contentful Paint (LCP).

![Desktop Analysis Scores](./img/readme/desktopAnalysis.png)

The thing is that, when the page loads, the main header of the page has an interesting animation I made that lasts 3 seconds, and then the content cards below start appearing for another 3 seconds.

On the one hand, this animation presents the information of the page little by little and smoothly to the user and gives the the site a sense of motion. But on the other hand, it makes it so the largest element of the page takes a total of 6 seconds to render completely.

This results in a very poor score in the LCP metric. So I decided to maintain my artistic view of the design and keep the animation as it is, but disable it just for the analysis in order to see if there was another issue.

**The final score for the performance analysis when the animation is loaded is 72.**