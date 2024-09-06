import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface BlogSection {
  title: string;
  paragraphs: string[];
}

export interface BlogEntry {
  title: string;
  date: Date;
  sections: BlogSection[];
};

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  entries: BlogEntry[] = [
    {
      title: "A time-series volatility library?",
      date: new Date(2024, 9, 5),
      sections: [
        {
          title: "timers",
          paragraphs: [
            "I've been working recently on timers, a Rust library to fit and forecast volatility processes like ARCH or GARCH. This topic is in the crossroad between two of my interests: programming and mathematics. I plan to make some more blog entries following my progress on the library and, hopefully, its release!"

          ]
        },
        {
          title: "What are volatility processes?",
          paragraphs: [
            "A very important problem in finances, mainly in quantitative finances, is that of forecasting the volatility, that is, how much move can you expect in the price of a given financial asset. This is very important because it's used, for example, to price options. This is just a part of the study of stochastic processes: time series following random patterns. The interesting part here is that most of the time, this randomness has some properties, and this has given rise to the study of a myriad of different stochastic processes: brownian movement, white noise, ARIMA processes,... It has been seen that the volatility of returns doesn't follow the pattern of these 'more famous' stochastic series. Hence why, for this category of processes, the name 'Volatility process' has been employed.",
            "There are already some libraries to work with time series and stochastic processes, but not dedicated to volatility stochastic processes (that I've seen), so I've decided to try to contribute to that particular space, although, as implied by the title of the blog, it's yet a WIP.",
          ]
        },
        {
          title: "Some design decisions",
          paragraphs: [
            "At this point, I'm trying different APIs and thinking about how I should design the library, so this is probably the best topic for this small entry. I've decided on a priority: generics.",
            "Given that there are more mature libraries to work with time series, it makes sense to adapt my future work to their already more established work. I see two possible approaches. The first would be to use some of their structures and implement volatility stochastic processes. The second one, which I've choosen, is to allow the user of timers to choose its own implementation. This is done through generics. This will apply to the data structures employed behind the time series and to the mathematical operations used by timers on these.",
          ]
        },
      ]
    }
    
  ];
}
